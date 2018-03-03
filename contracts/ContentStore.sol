pragma solidity ^0.4.19;

contract ContentStore {
  mapping (address => string) public previewContents;
  mapping (address => string) private mainContents;

  function ContentStore () public {
    addContent(
      "Qmdw1pN4MqPts76bo1RZ4wgJ6REHcRDP9drpYbk14TdWte",
      "QmX4U7jwgYfM6EzMt3SiiEL24EcSBLc9hKWSwnqqb19phR"
      );
  }

  function addContent (string _preview, string _main) private {
    previewContents[msg.sender] = _preview;
    mainContents[msg.sender] = _main; 
    // TODO: fire event
  }

  function getMain (address _owner) public view returns (string) {
    return mainContents[_owner];
  }
}
