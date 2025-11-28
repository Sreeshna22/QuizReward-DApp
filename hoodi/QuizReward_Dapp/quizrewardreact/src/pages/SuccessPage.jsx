

import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { createWalletClient, custom, getContract, createPublicClient, http } from "viem";
import { hoodi } from "viem/chains"; 
import QuizReward from "../assets/QuizReward.json";
import RewardTokenABI from "../assets/RewardToken.json"; 

const QUIZ_CONTRACT = "0xb015218D8c663319C2c6dFf2AB8E34C6c928AEFB"; 

export default function SuccessPage() {
  const { state } = useLocation();
  const [account, setAccount] = useState("");
  const [userDetails, setUserDetails] = useState(null);
  const [networkCorrect, setNetworkCorrect] = useState(false);
  const [loading, setLoading] = useState(true);

  const [transactionHash, setTransactionHash] = useState(state?.txHash || null); 

  useEffect(() => {
    async function init() {
      if (!window.ethereum) {
        alert("Please install MetaMask!");
        setLoading(false);
        return;
      }

      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0]);

        const chainId = await window.ethereum.request({ method: "eth_chainId" });
        console.log("Connected chainId:", chainId);

        if (Number(chainId) === hoodi.id) { 
          setNetworkCorrect(true);
          await fetchUserDetails(accounts[0], transactionHash); 
        } else {
          setNetworkCorrect(false);
          alert(`Please switch MetaMask to the Hoodi Network (${hoodi.id})`); 
          setLoading(false);
        }

        window.ethereum.on("accountsChanged", () => window.location.reload());
        window.ethereum.on("chainChanged", () => window.location.reload());
      } catch (err) {
        console.error("Initialization error:", err);
        setLoading(false);
      }
    }

    init();
  }, [transactionHash]); 

  async function fetchUserDetails(wallet, txHash) {
    try {
      const publicClient = createPublicClient({
        chain: hoodi, 
        transport: http("https://eth-hoodi.g.alchemy.com/v2/E_22OzI2TfxmRHgCa57Kf"), 
      });

    
      if (txHash) {
        console.log("Checking transaction receipt for:", txHash);
        const receipt = await publicClient.waitForTransactionReceipt({ hash: txHash });
        if (receipt.status === 'reverted') {
          console.error("Transaction REVERTED on-chain:", receipt);
          alert("Claim transaction failed on the blockchain. Check console for details.");
        } else {
          console.log("Transaction SUCCESSFUL on-chain:", receipt);
         
        }
      }
    


      const quizContract = getContract({
        address: QUIZ_CONTRACT,
        abi: QuizReward.abi,
        client: publicClient,
      });

      const rewardTokenAddress = await quizContract.read.token();
      console.log("Reward Token Address retrieved:", rewardTokenAddress);

      const tokenContract = getContract({
        address: rewardTokenAddress,
        abi: RewardTokenABI.abi, 
        client: publicClient,
      });

      const user = await quizContract.read.users([wallet]); 

      if (!user[2]) {
        alert("Account is not registered. Please register first!");
        setUserDetails(null); 
        return;
      }

      const balance = await tokenContract.read.balanceOf([wallet]);

      setUserDetails({
        name: user[0],
        email: user[1],
        registered: user[2],
        claimed: user[3],
        balance: Number(balance) / 1e18, 
      });

    } catch (err) {
      console.error("Error fetching user details:", err);
      const errorMessage = err.shortMessage || err.message || "Unknown error.";
      alert(
        "Error fetching user details. Make sure:\n" +
        `- Your Hoodi node is accessible via its RPC URL.\n` + 
        `- Wallet is on Hoodi network (${hoodi.id})\n` + 
        `- You have successfully registered your account on Hoodi.\n` + 
        `- The QuizReward contract is deployed at ${QUIZ_CONTRACT} on Hoodi.\n` + 
        `Details: ${errorMessage}`
      );
      setUserDetails(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-gradient-to-b from-red-50 via-white to-green-100">
      <div className="w-24 h-24 flex items-center justify-center rounded-full bg-green-600 text-white text-5xl shadow-xl animate-bounce mb-6">
        ✓
      </div>
      <h1 className="text-5xl font-extrabold text-green-700 mb-4">Reward Claimed!</h1>

      {!networkCorrect && (
        <p className="text-red-600 font-semibold mb-4">
          Wrong network! Please switch to the Hoodi Network ({hoodi.id}) in MetaMask. 
        </p>
      )}

      {loading ? (
        <p className="text-gray-700 mt-4">Loading user details...</p>
      ) : userDetails ? (
        <div className="text-left bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
          <p><strong>Name:</strong> {userDetails.name}</p>
          <p><strong>Email:</strong> {userDetails.email}</p>
          <p><strong>Registered:</strong> {userDetails.registered ? "Yes" : "No"}</p>
          <p><strong>Reward Claimed:</strong> {userDetails.claimed ? "Yes" : "No"}</p>
          <p><strong>Token Balance:</strong> {userDetails.balance} QRT</p>
        </div>
      ) : (
        networkCorrect && <p className="text-red-700 mt-4">Could not load user details. Please ensure you are registered and connected.</p>
      )}

      <Link
        to="/"
        className="bg-red-600 text-white px-8 py-3 rounded-2xl shadow-md hover:bg-red-700 transition-all duration-300 mt-6"
      >
        Go to Home →
      </Link>
    </div>
  );
}