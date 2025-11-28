# QuizReward-DApp

⚡️Project Name : QuickSpark


📌 Project Overview
The QuizReward DApp is a decentralized application designed to incentivize user engagement through a quiz. Users can register, take a quiz, and if they achieve a passing score, claim a reward in the form of QuizRewardToken (QRT). The DApp demonstrates basic Web3 interaction, including wallet connection, contract interaction for registration, reward claiming, and displaying user-specific information.

This project uses Hardhat for smart contract development and deployment, and a React frontend for the user interface, interacting with the Hoodi network.



📈Features

💡Wallet Connection: Connects securely using MetaMask.

💡User Registration: Allows users to register with a name and email on the blockchain.

💡Quiz Interface: A simple quiz (frontend-based for scoring).

💡Reward Claiming: Users can claim QRT if their quiz score meets the pass mark.

💡Token Display: Shows the user's QRT balance.

💡Decentralized: All registration and reward claiming logic is handled by smart contracts on the Hoodi network



🧑‍💻Technologies Used

♻️Smart Contracts:

📌Solidity (version ^0.8.20)

📌Hardhat (for development, testing, and deployment)

📌OpenZeppelin Contracts (ERC20, Ownable)

🔍️Frontend:

📌React (with Vite)

📌Viem (for interacting with Ethereum blockchain)

📌Tailwind CSS (for styling)

📌React Router DOM (for navigation)

🌐Blockchain Network:

📌Hoodi Network (Testnet/Mainnet)

📄License
📌This project is licensed under the MIT License. See the LICENSE file for details.




📄Smart Contracts
The DApp consists of two primary smart contracts:

🎉RewardToken.sol

🌱An ERC20 token named "QuizRewardToken" with symbol "QRT".

🌱Ownable: The contract deployer is the owner.

🌱mintReward(address to, uint256 amount): Allows only the owner to mint new QRT tokens and send them to a specified address. This function is crucial for the QuizReward contract to distribute tokens.

🧑‍💻QuizReward.sol

🌱Ownable: The contract deployer is the owner.

🌱token: A public variable storing the address of the deployed RewardToken contract.

🌱passMark: The minimum score required to claim a reward (default: 3).

🌱rewardAmount: The amount of QRT awarded per claim (default: 10 QRT).

🌱users: A public mapping storing User structs, linking an address to their registration and claim status.

Solidity

struct User {
    string name;
    string email;
    bool registered;
    bool claimed;
}
constructor(): Deploys a new RewardToken contract upon deployment of QuizReward and sets its address.

💡registerUser(string memory name, string memory email): Allows a user to register their details. Requires the user not to be already registered.

💡claimReward(uint256 score): Allows a registered user to claim their reward.

💡Requires the user to be registered.

💡Requires the provided score to be greater than or equal to passMark.

💡Requires the user not to have already claimed the reward.

💡Sets the user's claimed status to true.

💡Calls token.mintReward() to issue rewardAmount QRT to the user.




 💬How It Works?

 ✅Connect Wallet: Open the DApp in your browser, ensure MetaMask is installed, and click "Connect Wallet". Make sure your MetaMask is set to the Hoodi Network.

✅Register: Navigate to the registration page (e.g., /register). Enter your name and email, then click "Continue". Confirm the transaction in MetaMask.

✅Take Quiz: After successful registration, you'll be redirected to the quiz page. Complete the quiz to get a score.

✅Claim Reward: If your score is 3 or higher, proceed to the claim page. Click "Claim Reward" and confirm the transaction in MetaMask.🎉

✅View Status: On the success page, you can see your registration status, whether you've claimed the reward, and your QRT balance.🎉



🚀Future Enhancements

✏️Implement a more sophisticated quiz mechanism (e.g., on-chain questions, verifiable answers).

✏️Add a leader-board for top quiz scores.

✏️Integrate a decentralized oracle for more complex scoring.

✏️Improve error handling and user feedback.

✏️Add proper unit tests for both contracts and frontend.

✏️Implement a token faucet for RewardToken during testing




🔧Prerequisites
⚡️Before you begin,  you have the following installed:

🔧Node.js 

🔧npm 

🔧Git

🔧MetaMask browser extension

🔧An account on MetaMask with funds on the Hoodi network 💸


🔧Setup and Installation


🔧Clone the repository:

🔍️git clone <https://github.com/Sreeshna22/QuizReward-DApp.git>


cd QuizReward-DApp



🔍️Install Hardhat dependencies:

npm install




🔍️Configure Environment Variables: Create a .env file in the root of your Hardhat project:

HOODI_URL=https://eth-hoodi.g.alchemy.com/v2/E_22OzI2TfxmRHgCa57Kf
HOODI_PRIVATE_KEY=YOUR_METAMASK_PRIVATE_KEY_HERE



🔍️Compile Smart Contracts:


npx hardhat compile


🔍️Deploy Smart Contracts to Hoodi Network:

npx hardhat ignition deploy ignition/modules/QuizReward.ts --network hoodi



💫Frontend (React)


Navigate to the  QuizReward DApp frontend directory:

cd  QuizReward DApp fronten



🚀Update Contract Address in Frontend: Open the following files and replace 0xb015218D8c663319C2c6dFf2AB8E34C6c928AEFB  with the actual QuizReward contract address you obtained during deployment to Hoodi:

📈pages/ClaimPage.jsx

📈pages/RegisterPage.jsx

📈pages/SuccessPage.jsx



🚀Run the Frontend Development Server:



npm run dev