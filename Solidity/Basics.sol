// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Basics {
    bool booleanValue = true;
    int256 twofiftysix; //256bits
    uint256 unsigned;
    string myString;
    address addressVal;

    constructor(string memory initial_value) {
        myString = initial_value;
    }
}
