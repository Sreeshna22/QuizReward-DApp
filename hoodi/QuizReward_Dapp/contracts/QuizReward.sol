
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";



contract RewardToken is ERC20, Ownable {
   
    constructor()
        ERC20("QuizRewardToken", "QRT")
        Ownable(msg.sender) 
    {
        
    }

    function mintReward(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }
}



contract QuizReward is Ownable {
    RewardToken public token;

    uint256 public passMark = 3;
    uint256 public rewardAmount = 10 * 10 ** 18;

    struct User {
        string name;
        string email;
        bool registered;
        bool claimed;
    }

    mapping(address => User) public users;

    // FIX: Constructor changed. It no longer takes an address argument.
    constructor() Ownable(msg.sender)
    {
        
        token = new RewardToken();
    }

    function registerUser(string memory name, string memory email) external {
        require(!users[msg.sender].registered, "Already registered");

        users[msg.sender] = User(name, email, true, false);
    }

    function claimReward(uint256 score) external {
        require(users[msg.sender].registered, "Not registered");
        require(score >= passMark, "Score too low");
        require(!users[msg.sender].claimed, "Already claimed");

        users[msg.sender].claimed = true;

        
        token.mintReward(msg.sender, rewardAmount);
    }
}