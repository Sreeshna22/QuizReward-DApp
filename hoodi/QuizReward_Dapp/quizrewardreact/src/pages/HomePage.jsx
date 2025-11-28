

import { Link } from "react-router-dom";




export default function HomePage() {

  return (

    <div className="relative flex flex-col items-center justify-center min-h-screen p-6 

                    bg-gradient-to-br from-red-100 via-red-200 to-yellow-100 overflow-hidden">




     

      <div className="absolute top-[-100px] left-[-100px] w-80 h-80 bg-red-300 rounded-full opacity-30 animate-pulse"></div>

      <div className="absolute bottom-[-120px] right-[-100px] w-96 h-96 bg-red-300 rounded-full opacity-25 animate-pulse"></div>




      <h1 className="relative text-4xl md:text-6xl font-extrabold mb-6 text-center leading-tight">

        <span className="text-gray-900">Your Learning </span>

        <span className="text-gray-900">Journey Powered by </span>

        <span className="text-red-600">Rewards</span>

      </h1>




      <p className="relative text-gray-800 text-xl md:text-2xl max-w-3xl mb-10 text-center">

        Improve your skills, take quizzes, score high — and earn crypto rewards!

      </p>




      <Link

        to="/register"

        className="relative bg-red-600 text-white px-10 py-4 rounded-2xl font-bold text-lg 

                   shadow-lg hover:bg-red-700 hover:scale-105 transform transition-all duration-300"

      >

        Start Quiz →

      </Link>




     

    

    </div>

  );

}

