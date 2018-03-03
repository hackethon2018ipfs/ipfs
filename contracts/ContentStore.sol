pragma solidity ^0.4.19;

contract ContetStore {
  mapping (address => string) public previewContents;
  mapping (address => string) private mainContents;
  mapping (address => uint) private funds;
  uint price;
  event Purchase(string content);

  function ContentStore (uint _price) public {
    addContent(
      "Qmdw1pN4MqPts76bo1RZ4wgJ6REHcRDP9drpYbk14TdWte",
      "QmX4U7jwgYfM6EzMt3SiiEL24EcSBLc9hKWSwnqqb19phR"
      );

      price = _price;
  }

  function addContent (string _preview, string _main) private {
    previewContents[msg.sender] = _preview;
    mainContents[msg.sender] = _main;
    // TODO: fire event
  }

  function getMain (address _owner) public view returns (string) {
    if (msg.value >= price) {
      funds[_owner] += msg.value;
      return mainContents[_owner];
    }
  }


}