// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SSSHHHTTT is ERC721Enumerable, Ownable {

    using Strings for uint256;

    string public baseTokenURI;
    string public baseExtension = ".json";

    uint256 public maxSupply = 7777;
    uint256 public publicsale1Supply = 2000;
    uint256 public presaleStartDate = 1638306000;       // 11 Nov 2021 GMT
    uint256 public publicStartDate = 1638478800;        // 14 Nov 2021 GMT
    uint256 public presaleSupply = 0;

    uint256 public prePrice = 0.02 ether;
    uint256 public pubicPrice1 = 0.03 ether;
    uint256 public pubicPrice2 = 0.04 ether;

    mapping(address => bool) public whitelist;

    uint256 public totalWhitelist;
    
    bool public paused = false;

    /**
    * @dev Throws if called by any account is not whitelisted.
    */
    modifier onlyWhitelisted() {
        require(whitelist[msg.sender], 'Sorry, this address is not on the whitelist. Please message us on Discord.');
        _;
    }

    
    constructor() ERC721("SSS HHH TTT", "SHT") {
        //setBaseURI(baseURI);
    }

    function price() public view returns (uint256) {
        uint256 d_now = block.timestamp;
        uint256 supply = totalSupply();
        if (d_now < presaleStartDate) {
            return prePrice;
        } else if (presaleStartDate <= d_now && d_now < publicStartDate) {
            return prePrice;
        } else if (publicStartDate <= d_now && (supply-presaleSupply) <= publicsale1Supply ) {
            return pubicPrice1;
        } else {
            return pubicPrice2;
        }
    }

    /** Add multiple addresses to whitelist */
    function multipleAddressesToWhiteList(address[] memory addresses) public onlyOwner {
        for(uint256 i =0; i < addresses.length; i++) {
            singleAddressToWhiteList(addresses[i]);
        }
    }

    /** Add single address to whitelist */
    function singleAddressToWhiteList(address userAddress) public onlyOwner {
        require(userAddress != address(0), "Address can not be zero");
        whitelist[userAddress] = true;
        totalWhitelist++;
    }

    /** Remove multiple addresses from whitelist */
    function removeAddressesFromWhiteList(address[] memory addresses) public onlyOwner {
        for(uint i =0; i<addresses.length; i++) {
            removeAddressFromWhiteList(addresses[i]);
        }
    }

    /** Remove single address from whitelist */
    function removeAddressFromWhiteList(address userAddress) public onlyOwner {
        require(userAddress != address(0), "Address can not be zero");
        whitelist[userAddress] = false;
        totalWhitelist--;
    }

    function preSaleMint() public payable onlyWhitelisted {
        uint256 supply = totalSupply();

        require(!paused,                                'Contract is paused.');
        require(presaleStartDate < block.timestamp,     'Presale Minting is not started.');
        require(block.timestamp < publicStartDate,      'Presale Minting is ended.');
        require(supply < maxSupply,                     'This transaction would exceed max supply of queen');
        require(msg.value >= prePrice,                  'Ether value is too low');

        if (totalSupply() < maxSupply) {
            presaleSupply += 1;
            _safeMint(msg.sender, supply + 1);
        }

        require(payable(owner()).send(msg.value));
    }

    function mint() public payable {
        uint256 supply = totalSupply();

        require(!paused,                                'Contract is paused.');
        require(publicStartDate < block.timestamp,      'Public Minting is not started.');
        require(supply < maxSupply,                     'This transaction would exceed max supply of queen');
        require(msg.value >= price(),                   'Ether value is too low');

        if (totalSupply() < maxSupply) {
            _safeMint(msg.sender, supply + 1);
        }

        require(payable(owner()).send(msg.value));
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseTokenURI;
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId),               "ERC721Metadata: URI query for nonexistent token");

        string memory currentBaseURI = _baseURI();
        return
            bytes(currentBaseURI).length > 0
                ? string(
                    abi.encodePacked(
                        currentBaseURI,
                        tokenId.toString(),
                        baseExtension
                    )
                )
                : "";
    }

    function setBaseURI(string memory baseURI) public onlyOwner {
        baseTokenURI = baseURI;
    }

    function setPrice(uint256 _max_price, uint256 _min_price) public onlyOwner {
        pubicPrice2 = _max_price;
        prePrice = _min_price;
        uint256 d_now = block.timestamp;
        uint256 supply = totalSupply();
        if (publicStartDate <= d_now && (supply-presaleSupply) <= publicsale1Supply ) {
            pubicPrice1 = _max_price;
            prePrice = _min_price;
        } else {
            pubicPrice2 = _max_price;
            prePrice = _min_price;
        }
    }

    function setMintDate(uint256 _presale_startdate, uint256 _public_startdate) public onlyOwner {
        presaleStartDate = _presale_startdate;
        publicStartDate = _public_startdate;
    }

    function setSupply(uint256 _max_supply, uint256 _publicsale1Supply) public onlyOwner {
        maxSupply = _max_supply;
        publicsale1Supply = _publicsale1Supply;
    }
    
    function setBaseExtension(string memory _base_extension) public onlyOwner {
        baseExtension = _base_extension;
    }

    function pause(bool _state) public onlyOwner {
        paused = _state;
    }

    function tokensOfOwner(address owner) public view returns (uint256[] memory) {
        uint256 tokenCount = balanceOf(owner);
        uint256[] memory tokenIds = new uint256[](tokenCount);
        for (uint256 i = 0; i < tokenCount; i++) {
            tokenIds[i] = tokenOfOwnerByIndex(owner, i);
        }
        return tokenIds;
    }
    
    
    function info() public view returns (uint256, uint256, uint256, uint256, uint256) {
        return (price(), presaleStartDate, publicStartDate, totalSupply(), maxSupply);
    }
}