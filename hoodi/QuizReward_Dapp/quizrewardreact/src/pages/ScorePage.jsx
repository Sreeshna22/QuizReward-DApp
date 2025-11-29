

import { Link, useLocation } from "react-router-dom";




export default function ScorePage() {

  const { state } = useLocation();

  const score = state?.score ?? 0;

  const passMark = 3; 




  const passed = score >= passMark;




  return (

    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-200 p-6 overflow-hidden">




 

      <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-red-400 rounded-full opacity-20 animate-pulse"></div>

      <div className="absolute bottom-[-100px] right-[-60px] w-80 h-80 bg-red-500 rounded-full opacity-20 animate-pulse"></div>




      <div className="bg-white shadow-3xl rounded-3xl p-12 md:p-16 w-full max-w-md border-t-8 border-red-600 text-center relative z-10">




 

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">

          Quiz Completed!

        </h1>




   

        <p className={`text-6xl md:text-7xl font-black mb-6 ${passed ? "text-red-600 animate-pulse" : "text-gray-400"}`}>

          {score}

        </p>




     

        {passed ? (

          <p className="text-lg md:text-xl text-gray-700 mb-10">

            Congratulations! You passed the quiz. Claim your reward now.

          </p>

        ) : (

          <p className="text-lg md:text-xl text-gray-500 mb-10">

            You scored below the passing mark. Try again to earn rewards.

          </p>

        )}




        

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