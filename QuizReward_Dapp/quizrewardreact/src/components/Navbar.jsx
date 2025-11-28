
import { createWalletClient, custom } from "viem";
import logo from "../assets/images/logo.jpeg";

export default function Navbar({ account, setAccount }) {
  async function connectWallet() {
    if (!window.ethereum) return alert("MetaMask required!");

    try {
      // Request accounts from MetaMask
      const [address] = await window.ethereum.request({ method: "eth_requestAccounts" });
      setAccount(address);
    } catch (err) {
      console.error("Wallet connection failed:", err);
      alert("Failed to connect wallet.");
    }
  }

  function disconnectWallet() {
    setAccount(null);
  }

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <img src={logo} alt="QuickSpark" className="w-10 h-10 rounded-full object-cover" />
        <h1 className="text-2xl font-extrabold">
          <span className="text-black">Quick</span>
          <span className="text-red-600">Spark</span>
        </h1>
      </div>

      {account ? (
        <div className="flex gap-3">
          <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-xl font-semibold">
            {account.slice(0, 6)}...{account.slice(-4)}
          </span>
          <button
            onClick={disconnectWallet}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-xl font-semibold transition-all"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <button
          onClick={connectWallet}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-xl font-semibold transition-all"
        >
          Connect Wallet
        </button>
      )}
    </nav>
  );
}