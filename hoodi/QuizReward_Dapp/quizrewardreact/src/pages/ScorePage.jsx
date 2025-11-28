// import { Link, useLocation } from "react-router-dom";

// export default function ScorePage() {
//   const { state } = useLocation();
//   const score = state?.score ?? 0;

//   return (
//     <div className="text-center p-10">
//       <h1 className="text-4xl font-bold">Your Score: {score}</h1>

//       <Link
//         to="/claim"
//         state={{ score }}
//         className="text-red-600 underline text-xl mt-6 block"
//       >
//         Claim Reward →
//       </Link>
//     </div>
//   );
// }
// import { Link, useLocation } from "react-router-dom";

// export default function ScorePage() {
//   const { state } = useLocation();
//   const score = state?.score ?? 0;

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100 p-6">

//       <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md border-t-4 border-red-600 text-center animate-fadeIn">

//         {/* Score Title */}
//         <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
//           Quiz Completed!
//         </h1>

//         {/* Animated Score */}
//         <p className="text-6xl font-black text-red-600 mb-6 animate-bounce">
//           {score}
//         </p>

//         <p className="text-lg text-gray-600 mb-10">
//           You did great! Claim your reward now.
//         </p>

//         {/* Claim Button */}
//         <Link
//           to="/claim"
//           state={{ score }}
//           className="px-6 py-3 bg-red-600 text-white font-semibold text-lg rounded-xl shadow-lg 
//             hover:bg-red-700 hover:scale-105 transition transform inline-block"
//         >
//           Claim Reward →
//         </Link>
//       </div>
//     </div>
//   );
// }



import { Link, useLocation } from "react-router-dom";




export default function ScorePage() {

  const { state } = useLocation();

  const score = state?.score ?? 0;

  const passMark = 3; // Match your smart contract




  const passed = score >= passMark;




  return (

    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-200 p-6 overflow-hidden">




      {/* Decorative floating circles */}

      <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-red-400 rounded-full opacity-20 animate-pulse"></div>

      <div className="absolute bottom-[-100px] right-[-60px] w-80 h-80 bg-red-500 rounded-full opacity-20 animate-pulse"></div>




      <div className="bg-white shadow-3xl rounded-3xl p-12 md:p-16 w-full max-w-md border-t-8 border-red-600 text-center relative z-10">




        {/* Score Title */}

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">

          Quiz Completed!

        </h1>




        {/* Animated Score */}

        <p className={`text-6xl md:text-7xl font-black mb-6 ${passed ? "text-red-600 animate-pulse" : "text-gray-400"}`}>

          {score}

        </p>




        {/* Pass/Fail Message */}

        {passed ? (

          <p className="text-lg md:text-xl text-gray-700 mb-10">

            Congratulations! You passed the quiz. Claim your reward now.

          </p>

        ) : (

          <p className="text-lg md:text-xl text-gray-500 mb-10">

            You scored below the passing mark. Try again to earn rewards.

          </p>

        )}




        {/* Claim Button */}

        {passed && (

          <Link

            to="/claim"

            state={{ score }}

            className="px-8 py-4 bg-red-600 text-white font-bold text-lg rounded-2xl shadow-xl 

            hover:bg-red-700 hover:scale-105 transform transition-all duration-300 inline-block"

          >

            Claim Reward →

          </Link>

        )}




       

      </div>

    </div>

  );

}