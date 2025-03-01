// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LabMateData {
    struct ExperimentLog {
        string ipfsCID;
        uint256 timestamp;
    }

    mapping(address => ExperimentLog[]) public logs;

    event LogStored(address indexed student, string ipfsCID, uint256 timestamp);

    function storeLog(string memory _ipfsCID) public {
        ExperimentLog memory newLog = ExperimentLog({
            ipfsCID: _ipfsCID,
            timestamp: block.timestamp
        });
        logs[msg.sender].push(newLog);
        emit LogStored(msg.sender, _ipfsCID, block.timestamp);
    }
    
    // NEW helper function: returns the number of logs for a given user
    function getLogsLength(address user) public view returns (uint256) {
        return logs[user].length;
    }
}
