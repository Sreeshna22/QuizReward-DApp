// import { Link } from "react-router-dom";

// export default function HomePage() {
//   return (
//     <div className="flex flex-col items-center justify-center text-center p-10 min-h-screen">
      
//       <h1 className="text-7xl font-extrabold mb-4">
//         <span className="text-black">Learn </span>
//         <span className="text-black">10x </span>
//         <span className="text-red-600">Faster</span>
//       </h1>

//       <p className="text-gray-700 max-w-xl mb-6 text-lg">
//         Unlock your potential with personalized blockchain quizzes.
//         Earn crypto rewards when you score well!
//       </p>

//       <Link
//         to="/quiz"
//         className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold"
//       >
//         Get Started
//       </Link>
//     </div>
//   );
// }

// import { Link } from "react-router-dom";

// export default function HomePage() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
//       <h1 className="text-7xl font-extrabold mb-4">
//         <span className="text-black">Your Learning </span>
//         <span className="text-black">Journey Powered by </span>
//         <span className="text-red-600">Rewards</span>
//       </h1>

//       <p className="text-gray-700 text-lg max-w-xl mb-6">
//         Improve your skills, take quizzes, score high — and earn crypto rewards!
//       </p>

//       <Link
//         to="/register"
//         className="bg-red-600 text-white px-6 py-3 rounded-xl font-bold"
//       >
//         Start Quiz →
//       </Link>
//     </div>
//   );
// }

import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 
                    bg-gradient-to-b from-white via-red-100 to-gray-200">

      <h1 className="text-3xl md:text-5xl font-extrabold mb-5 leading-tight text-center">
        <span className="text-black">Your Learning </span>
        <span className="text-black">Journey Powered by </span>
        <span className="text-red-600">Rewards</span>
      </h1>

      <p className="text-gray-700 text-2xl max-w-2xl mb-8 text-center">
        Improve your skills, take quizzes, score high — and earn crypto rewards!
      </p>

      <Link
        to="/register"
        className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition"
      >
        Start Quiz →
      </Link>
    </div>
  );
}
