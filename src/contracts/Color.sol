/* pragma solidity  0.5.0;

import "@openzeppelin/contracts/token/ERC721/ERC721Full.sol";

contract Color is ERC721Full {
  string[] public colors;
  mapping(string => bool) _colorExists;

  constructor() ERC721Full("Color", "COLOR") public {

  }

  function mint(string memory _color) public {
    // Check that incoming color does not already exist
    require(!_colorExists[_color]);
    // Pushing to colors will return a unique ID if successful
    uint _id = colors.push(_color);
    _mint(msg.sender, _id);
    _colorExists[_color] = true;
  }
} */


pragma solidity 0.5.0;

import "@openzeppelin/contracts/token/ERC721/ERC721Full.sol";

contract Color is ERC721Full {
  string[] public accessCodes;

  address payable wallet;
  /* address payable accessCode; */

  /* constructor(address payable _wallet, address payable _accessCode) ERC721Full("Color", "COLOR") public { */
  constructor(address payable _wallet) ERC721Full("Color", "COLOR") public {
    wallet = _wallet;
    /* accessCode = _accessCode; */
  }

  function() external payable {
    buyAccessCode();
  }

  function buyAccessCode(string memory _accessCode) public payable {
    this.mint(_accessCode);
    wallet.transfer(msg.value);
  }

  // E.G. color = "#FFFFFF"
  function mint(string memory accessCode) public {
    //Generate and add it
    uint _id = accessCodes.push(accessCode);
    //Call the mint function
    _mint(msg.sender, _id);
  }
}
