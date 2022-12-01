// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Base64.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RewardCardNFT is ERC721Enumerable, ERC721URIStorage,Ownable {
    
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;


  constructor() ERC721 ("RewardCard", "RWD") {
      
  }
  function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }


    

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function safeMint(address to, uint256 tokenId, string memory uri)
        public
        onlyOwner
    {
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }


    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function encodeBaseSVG(string memory _characterName,string memory user,uint256 level) public pure returns  ( string memory) {
    
        // uint baseProductNumber =1 ;

        string memory base_svg =string ( abi.encodePacked('<svg width="479.99999999999994" height="479.99999999999994" xmlns="http://www.w3.org/2000/svg">',
                                            '<path transform="rotate(90 240.828 45.9752)" id="svg_8" d="m241.49152,-194.25005l-1.32721,480.45044" opacity="undefined" stroke="#000" fill="none"/>',
                                            '<path id="svg_9" d="m41.08263,-1.80443l-1.32721,480.45044" opacity="undefined" stroke="#000" fill="none"/>',
                                            '<text xml:space="preserve" text-anchor="start" font-family="Noto Sans JP" font-size="24" id="svg_1" y="71.19218" x="45.06426" stroke-width="0" stroke="#000" fill="#000000">',_characterName,'</text>',
                                            '<text xml:space="preserve" text-anchor="start" font-family="Noto Sans JP" font-size="24" id="svg_3" y="137.1888" x="45.06426" stroke-width="0" stroke="#000" fill="#000000">Card Holder Name:' ,user, '</text>',
                                            '<text xml:space="preserve" text-anchor="start" font-family="Noto Sans JP" font-size="24" id="svg_6" y="170.02286" x="45.00661" stroke-width="0" stroke="#000" fill="#000000">Level:', Strings.toString(level),'</text>',
                                            '<text xml:space="preserve" text-anchor="start" font-family="Noto Sans JP" font-size="24" id="svg_1" y="190.19218" x="45.06426" stroke-width="0" stroke="#000" fill="#000000">Congratulations you are eligible for rewards!</text>',
                                            '</svg>'));
            return base_svg;    
    }

    function encodeJson(string memory _svg, string memory _contractName ) public pure returns (string memory){
        string memory json = Base64.encode(
        bytes(
            string(
                abi.encodePacked(
                    '{"name": "',
                    
                    _contractName,
                    '", "description": "Your reward NFT" , "image": "data:image/svg+xml;base64,',
                    
                    Base64.encode(bytes(_svg)),
                    '"}'
                )
            )
        )
    );
    return json ;
    
    }

    function makeNFT(string memory _characterName,string memory user ,uint256 level, address reciever ) public {
    //   require(balanceOf(msg.sender) == 0,"error");
      
    //   profiles.push(Profiles(_characterName , user , 1));
    uint256 newItemId = _tokenIds.current();


        string memory baseSvg = encodeBaseSVG(_characterName , user,level);
        // string memory finalSvg = appendCharacterLevel(0,baseSvg);
        string memory contractName = string(abi.encodePacked(user ,"'s Rewards Card"));
        string memory json = encodeJson(baseSvg , contractName);

    string memory finalTokenUri = string(
        abi.encodePacked("data:application/json;base64,", json)
    );

    _safeMint(reciever, newItemId);

    _setTokenURI(newItemId, finalTokenUri);
  
    _tokenIds.increment();
   
}

}


