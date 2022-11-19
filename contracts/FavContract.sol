// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract FavContract {
    string public name = 'foobar';
    address public owner;
    uint public fee;

    function changeName(string memory newName) public{
        name = newName;
    }

    constructor(uint _fee){
        owner = msg.sender;
        fee = _fee;
    }
}