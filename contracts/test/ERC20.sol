// SPDX-License-Identifier: GPL-3.0-or-later Or MIT
pragma solidity >=0.8.0 <0.9.0;

import '../PancakeERC20.sol';

contract ERC20 is PancakeERC20 {
    constructor(uint _totalSupply) {
        _mint(msg.sender, _totalSupply);
    }
}