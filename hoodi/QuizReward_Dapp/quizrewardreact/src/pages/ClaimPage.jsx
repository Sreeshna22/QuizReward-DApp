

import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createWalletClient, custom, getContract } from "viem";
import { hoodi } from "viem/chains";
import QuizReward from "../assets/QuizReward.json";

const CONTRACT = "0xb015218D8c663319C2c6dFf2AB8E34C6c928AEFB";

export default function ClaimPage({ account }) {
  const { state } = useLocation();
  const score = Number(state?.score ?? 0);
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);

  async function claimReward() {
    if (!account) {
      alert("Please connect your wallet first!");
      return;
    }

    try {
      setLoading(true);
      console.log("Claiming reward for score:", score);

      const client = createWalletClient({
        chain: hoodi,
        transport: custom(window.ethereum),
        account,
      });

      const contract = getContract({
        address: CONTRACT,
        abi: QuizReward.abi,
        client,
      });

      const txHash = await contract.write.claimReward([score]);

      console.log("Transaction sent. Hash:", txHash);

      alert("Reward Claimed Successfully!");
      // ✅ Pass txHash to the success page
      nav("/success", { state: { score, txHash } }); 

    } catch (err) {
      console.error("Claim failed:", err);
      const errorMessage = err.shortMessage || err.message || "Internal RPC Error";
      alert(`Failed to claim reward: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-red-50 to-red-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg border-t-4 border-red-600 text-center">
        <h1 className="text-3xl font-extrabold mb-4 text-red-600">
          Claim Your Reward
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          You scored <span className="font-bold text-red-600">{score}</span> points!
        </p>
        <button
          onClick={claimReward}
          disabled={loading || score < 3} 
          className={`w-full py-3 rounded-xl font-bold text-lg text-white 
          ${loading || score < 3 ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"} transition`}
        >
          {loading ? "Processing..." : score < 3 ? "Score too low to claim" : "Claim Reward →"}
        </button>
        <button
          onClick={() => nav("/")}
          className="mt-4 w-full py-3 rounded-xl bg-gray-300 text-gray-800 font-semibold hover:bg-gray-400 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}