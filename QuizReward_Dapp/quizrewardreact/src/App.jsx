// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";

// import Navbar from "./components/Navbar";

// // Correct paths
// import HomePage from "./pages/HomePage";
// import Quiz from "./pages/Quiz";
// import Reward from "./pages/Reward";

// export default function App() {
//   const [account, setAccount] = useState("");

//   return (
//     <BrowserRouter>
//       <Navbar account={account} setAccount={setAccount} />

//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/quiz" element={<Quiz />} />
//         <Route path="/reward" element={<Reward />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import Quiz from "./pages/Quiz";
import ScorePage from "./pages/ScorePage";
import ClaimPage from "./pages/ClaimPage";
import SuccessPage from "./pages/SuccessPage";

export default function App() {
  const [account, setAccount] = useState("");

  return (
    <BrowserRouter>
      <Navbar account={account} setAccount={setAccount} />

      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Pass account to RegisterPage */}
        <Route
          path="/register"
          element={<RegisterPage account={account} />}
        />

        <Route path="/quiz" element={<Quiz />} />
        <Route path="/score" element={<ScorePage />} />

        {/* Pass account to ClaimPage */}
        <Route
          path="/claim"
          element={<ClaimPage account={account} />}
        />

        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </BrowserRouter>
  );
}
