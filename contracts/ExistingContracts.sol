// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract ExistingContract {
    struct EscrowInfo {
        address escrowContractAddress;
        address arbiter;
        address beneficiary;
        string value;
        bool isApproved;
    }

    EscrowInfo[] public escrowInfo;

    function addEscrow(address _escrow,address _arbiter, address _beneficiary, string memory _value) external {
        escrowInfo.push(EscrowInfo (_escrow,_arbiter,_beneficiary,_value,false));
    }

    function approve(address _escrow) external {
        uint index=0;
        for(uint i=0;i<escrowInfo.length;i++){
            if(escrowInfo[i].escrowContractAddress==_escrow){
                index=i;
                require(msg.sender==escrowInfo[i].arbiter);
            }
        }
        require(!escrowInfo[index].isApproved);
        escrowInfo[index].isApproved=true;
        escrowInfo[index]=escrowInfo[escrowInfo.length-1];
        escrowInfo.pop();
    }
}


