// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract LuckyDragonNFT is ERC721Enumerable, Ownable {

    using Strings for uint256;

    string public baseTokenURI;
    string public baseExtension = ".json";

    uint256 public maxSupply = 10000;
    uint256 public preSaleSupply = 2000;
    uint256 public publicSaleSupply = 8000;

    bool public isPreSaleActive = false;
    bool public isPublicSaleActive = false;

    uint256 public prePrice = 0.08 ether;
    uint256 public pubicPrice = 0.2 ether;

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

    
    constructor() ERC721("Dragon NFT", "SHT") {
        //setBaseURI(baseURI);
    }

    function price() public view returns (uint256) {
        if (isPreSaleActive) {
            return prePrice;
        } else {
            return pubicPrice;
        }
    }

    function flipPreSale() public onlyOwner {
        isPublicSaleActive = false;
        isPreSaleActive = !isPreSaleActive;
    }

    function flipPublicSale() public onlyOwner {
        isPreSaleActive = false;
        isPublicSaleActive = !isPublicSaleActive;
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
        require(isPreSaleActive,                        'Pre sale is not active');
        require(supply < maxSupply,                     'This transaction would exceed max supply of queen');
        require(msg.value >= prePrice,                  'Ether value is too low');

        if (totalSupply() < maxSupply) {
            preSaleSupply += 1;
            _safeMint(msg.sender, supply + 1);
        }

        require(payable(owner()).send(msg.value));
    }

    function publicSaleMint() public payable {
        uint256 supply = totalSupply();

        require(!paused,                                'Contract is paused.');
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
        pubicPrice = _max_price;
        prePrice = _min_price;
    }

    function setSupply(uint256 _max_supply, uint256 _publicsaleSupply) public onlyOwner {
        maxSupply = _max_supply;
        publicSaleSupply = _publicsaleSupply;
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
    
    
    // function info() public view returns (uint256, uint256, uint256, uint256, uint256) {
    //     return (price(), preSaleStartDate, publicStartDate, totalSupply(), maxSupply);
    // }
}// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract LuckyDragonNFT is ERC721Enumerable, Ownable {

    using Strings for uint256;

    string public baseTokenURI;
    string public baseExtension = ".json";

    uint256 public maxSupply = 10000;
    uint256 public preSaleSupply = 2000;
    uint256 public publicSaleSupply = 8000;

    bool public isPreSaleActive = false;
    bool public isPublicSaleActive = false;

    uint256 public prePrice = 0.08 ether;
    uint256 public pubicPrice = 0.2 ether;

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

    
    constructor() ERC721("Dragon NFT", "SHT") {
        //setBaseURI(baseURI);
    }

    function price() public view returns (uint256) {
        if (isPreSaleActive) {
            return prePrice;
        } else {
            return pubicPrice;
        }
    }

    function flipPreSale() public onlyOwner {
        isPublicSaleActive = false;
        isPreSaleActive = !isPreSaleActive;
    }

    function flipPublicSale() public onlyOwner {
        isPreSaleActive = false;
        isPublicSaleActive = !isPublicSaleActive;
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
        require(isPreSaleActive,                        'Pre sale is not active');
        require(supply < maxSupply,                     'This transaction would exceed max supply of queen');
        require(msg.value >= prePrice,                  'Ether value is too low');

        if (totalSupply() < maxSupply) {
            preSaleSupply += 1;
            _safeMint(msg.sender, supply + 1);
        }

        require(payable(owner()).send(msg.value));
    }

    function publicSaleMint() public payable {
        uint256 supply = totalSupply();

        require(!paused,                                'Contract is paused.');
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
        pubicPrice = _max_price;
        prePrice = _min_price;
    }

    function setSupply(uint256 _max_supply, uint256 _publicsaleSupply) public onlyOwner {
        maxSupply = _max_supply;
        publicSaleSupply = _publicsaleSupply;
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
    
    
    // function info() public view returns (uint256, uint256, uint256, uint256, uint256) {
    //     return (price(), preSaleStartDate, publicStartDate, totalSupply(), maxSupply);
    // }
}