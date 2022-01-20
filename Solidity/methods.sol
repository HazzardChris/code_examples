// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract methods {
    //Method parameters can be declared with memory or storage
    //Memory not expensive - datatypes not of struct or array
    //storage is expensive - structs and arrays
    string a;
    int256 b;

    function funA(string memory _a) public {
        a = _a;
    }

    //view - no state change but the input is changed
    function noChange(int256 _a) public view returns (int256 val) {
        val = b + _a;
        return val;
    }

    //pure - no state change no input change
    function pureFun(string memory _a)
        public
        pure
        returns (int256 val, string memory _myString)
    {
        _myString = _a;
        val = 123;
    }
}
