
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("QuizRewardModule", (m) => {
  
  
  const quizReward = m.contract("QuizReward"); 

  
  return { quizReward }; 
});

