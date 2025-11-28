// import { useState } from "react";
// import { createWalletClient, custom, getContract } from "viem";
//  import { hardhat } from "viem/chains";
// import QuizReward from "../assets/QuizReward.json";
// import { useNavigate } from "react-router-dom";

// const CONTRACT = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

// export default function RegisterPage({ account }) {
//   const nav = useNavigate();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   async function registerUser() {
//     if (!account) {
//       alert("Please connect your wallet first!");
//       return;
//     }

//     const client = createWalletClient({
//       chain: hardhat,
//       transport: custom(window.ethereum),
//       account,   
//     });

//     const contract = getContract({
//       address: CONTRACT,
//       abi: QuizReward.abi,
//       client,
//     });

//     await contract.write.registerUser([name, email]); // Works now

//     nav("/quiz");
//   }

//   return (
//     <div className="p-6 max-w-xl mx-auto mt-10">
//       <h1 className="text-3xl font-bold mb-4">Register</h1>

//       <input
//         className="border w-full px-4 py-2 rounded mb-4"
//         placeholder="Enter name"
//         onChange={(e) => setName(e.target.value)}
//       />

//       <input
//         className="border w-full px-4 py-2 rounded mb-4"
//         placeholder="Enter email"
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <button
//         onClick={registerUser}
//         className="bg-red-600 text-white px-4 py-2 rounded-xl"
//       >
//         Continue →
//       </button>
//     </div>
//   );
// }



import { useState } from "react";
import { createWalletClient, custom, getContract } from "viem";
import { hardhat ,hoodi} from "viem/chains";
import QuizReward from "../assets/QuizReward.json";
import { useNavigate } from "react-router-dom";

const CONTRACT = "0xb015218D8c663319C2c6dFf2AB8E34C6c928AEFB";

export default function RegisterPage({ account }) {
  const nav = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  async function registerUser() {
    if (!account) {
      alert("Please connect your wallet first!");
      return;
    }

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

    await contract.write.registerUser([name, email]);
    nav("/quiz");
  }

  return (
    <div className="min-h-screen flex items-center justify-center 
                    bg-gradient-to-b from-white via-red-50 to-red-100 p-6">

      <div className="bg-white shadow-xl rounded-2xl p-8 w-full  max-w-lg
 border-t-4 border-red-500">

        <h1 className="text-3xl font-extrabold text-center mb-6 text-red-600">
          Register
        </h1>

        <input
          className="border border-gray-300 w-full px-4 py-3 rounded-xl mb-4 
                     focus:outline-none focus:ring-2 focus:ring-red-400 transition"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border border-gray-300 w-full px-4 py-3 rounded-xl mb-6 
                     focus:outline-none focus:ring-2 focus:ring-red-400 transition"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={registerUser}
          className="w-full bg-red-600 text-white py-3 rounded-xl 
                     font-semibold text-lg hover:bg-red-700 transition"
        >
          Continue →
        </button>
      </div>
    </div>
  );
}

