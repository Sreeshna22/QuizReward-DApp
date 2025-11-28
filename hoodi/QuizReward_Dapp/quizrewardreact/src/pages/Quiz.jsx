

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  { q: "What does HTML stand for?", a: "HyperText Markup Language", options: ["HyperText Markdown Link", "HyperText Markup Language", "HighText Machine Language"] },
  { q: "Which tag links a CSS file?", a: "<link>", options: ["<style>", "<css>", "<link>"] },
  { q: "Which CSS property controls text size?", a: "font-size", options: ["text-style", "font-size", "text-size"] },
  { q: "JavaScript is ___?", a: "Single-threaded", options: ["Multi-threaded", "Single-threaded", "Parallel-threaded"] },
  { q: "Which method fetches API data?", a: "fetch()", options: ["get()", "fetch()", "retrieve()"] },
  { q: "React is a ___?", a: "JavaScript library", options: ["Framework", "Database", "JavaScript library"] },
  { q: "Hook used for state in React?", a: "useState", options: ["useEffect", "useState", "useContext"] },
  { q: "Which hook runs after render?", a: "useEffect", options: ["useEffect", "useMemo", "useRef"] },
  { q: "Node.js runs on which engine?", a: "V8", options: ["SpiderMonkey", "Chakra", "V8"] },
  { q: "Which command initializes Node?", a: "npm init", options: ["npm start", "npm create", "npm init"] },
];

export default function Quiz() {
  const nav = useNavigate();
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});

  const q = questions[current];
  const total = questions.length;
  const progress = ((current + 1) / total) * 100;

  function next() {
    if (current < total - 1) setCurrent(current + 1);
  }

  function prev() {
    if (current > 0) setCurrent(current - 1);
  }

  function submitQuiz() {
    let score = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.a) score++;
    });
    nav("/score", { state: { score } });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-200 p-6 flex justify-center items-center">
      <div className="bg-white shadow-3xl rounded-3xl p-12 md:p-16 w-full max-w-3xl border-t-8 border-red-600">

        <div className="w-full bg-gray-200 h-4 rounded-full mb-8">
          <div
            className="bg-red-600 h-4 rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

    
        <h2 className="text-xl font-semibold text-gray-700 mb-3">
          Question {current + 1} of {total}
        </h2>

     
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
          {q.q}
        </h1>

     
        <div className="space-y-4">
          {q.options.map((opt) => (
            <label
              key={opt}
              className={`block p-5 rounded-2xl border cursor-pointer transition 
              ${answers[current] === opt ? "bg-red-100 border-red-600 shadow-inner" : "bg-gray-50 hover:bg-gray-100 border-gray-300 shadow-md"}`}
            >
              <input
                type="radio"
                className="mr-4 scale-125"
                name={`q-${current}`}
                checked={answers[current] === opt}
                onChange={() => setAnswers({ ...answers, [current]: opt })}
              />
              <span className="text-lg font-medium">{opt}</span>
            </label>
          ))}
        </div>

    
        <div className="flex justify-between mt-10">
          <button
            onClick={prev}
            disabled={current === 0}
            className={`px-6 py-3 rounded-xl font-semibold shadow 
            ${current === 0 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-gray-700 text-white hover:bg-gray-800 transform hover:scale-105 transition-all duration-300"}`}
          >
            ← Previous
          </button>

          {current === total - 1 ? (
            <button
              onClick={submitQuiz}
              className="px-8 py-3 rounded-xl bg-red-600 text-white font-bold shadow-lg hover:bg-red-700 hover:scale-105 transform transition-all duration-300"
            >
              Submit Quiz →
            </button>
          ) : (
            <button
              onClick={next}
              className="px-8 py-3 rounded-xl bg-red-600 text-white font-bold shadow-lg hover:bg-red-700 hover:scale-105 transform transition-all duration-300"
            >
              Next →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}