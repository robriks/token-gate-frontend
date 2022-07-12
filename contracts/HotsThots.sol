//SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@rari-capital/solmate/src/tokens/ERC721.sol";
import "@rari-capital/solmate/src/auth/Owned.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract HotsThots is ERC721("HotsThots", "HOTS"), Owned(msg.sender) {
    using Counters for Counters.Counter;

    Counters.Counter private _idCount;

    string public baseURI;

    address[] public hotsFrens;

    constructor(address[] memory _whitelist) {
        console.log("Deploying HotsThots membership NFT to whitelisted addresses");
        hotsFrens = _whitelist;
        baseURI = "https://ipfs.io/ipfs/QmaKFurpTEK99CBdRWUKopaWDDqvS9ZcnB8AroLotbrrwE";
        _mint(msg.sender, _idCount.current());
        _idCount.increment();
    }

    function addFren(address _newFren) public onlyOwner() {
        hotsFrens.push(_newFren);
    }

    function tokenURI(uint256 id) public view override returns (string memory) {
        return baseURI;
    }

    function changeTokenURI(string calldata newURI) public onlyOwner() {
        baseURI = newURI;
    }

    // function contractURI() public view returns (string memory) {
    //     return "https://hots-thots.vercel.app";
    // }

    function claim() external {
        require(balanceOf(msg.sender) == 0, "You already own a HotsThots NFT!");
        for (uint i; i < hotsFrens.length; i++) {
            if (hotsFrens[i] == msg.sender) {
                _mint(msg.sender, _idCount.current());
                _idCount.increment();
                return;
            } 
        }
        revert('You must be whitelisted by the KweenBirb Robriks in order to claim');
    }

    function frensLength() public view returns (uint) {
        return hotsFrens.length;
    }
}
