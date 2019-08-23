//import Web3 from 'web3';
//const BN = require('bn.js');

const dasJahr = "2018"
const ContainerGgasLimit = 300000;
const ContainerGasPrice = 1000;

var Container;
const ContainerContractADR = "0x871b450C2a34446943A18Ad10216ECFd46c18BD0";
const Containerbytecode ="0x608060405234801561001057600080fd5b506040516108ba3803806108ba8339810180604052602081101561003357600080fd5b81019080805164010000000081111561004b57600080fd5b8281019050602081018481111561006157600080fd5b815185600182028301116401000000008211171561007e57600080fd5b5050929190505050806000908051906020019061009c929190610137565b506103e86001819055506001600260006101000a81548160ff02191690831515021790555060038060018154018082558091505090600182039060005260206000200160006040805190810160405280600181526020017f31000000000000000000000000000000000000000000000000000000000000008152509091909150908051906020019061012f929190610137565b5050506101dc565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061017857805160ff19168380011785556101a6565b828001600101855582156101a6579182015b828111156101a557825182559160200191906001019061018a565b5b5090506101b391906101b7565b5090565b6101d991905b808211156101d55760008160009055506001016101bd565b5090565b90565b6106cf806101eb6000396000f3fe608060405260043610610099576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632d3153dc1461009e578063471290c5146100c95780635a0bd96b14610159578063a6006cc51461020d578063abd8c99c1461029d578063b2ea5ba2146102c8578063cfae907714610341578063f0ebbd861461036c578063f3fe7de61461039b575b600080fd5b3480156100aa57600080fd5b506100b36103b2565b6040518082815260200191505060405180910390f35b3480156100d557600080fd5b506100de6103b8565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561011e578082015181840152602081019050610103565b50505050905090810190601f16801561014b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561016557600080fd5b506101926004803603602081101561017c57600080fd5b8101908080359060200190929190505050610456565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101d25780820151818401526020810190506101b7565b50505050905090810190601f1680156101ff5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561021957600080fd5b50610222610511565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610262578082015181840152602081019050610247565b50505050905090810190601f16801561028f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102a957600080fd5b506102b26105b3565b6040518082815260200191505060405180910390f35b61033f600480360360208110156102de57600080fd5b81019080803590602001906401000000008111156102fb57600080fd5b82018360208201111561030d57600080fd5b8035906020019184600183028401116401000000008311171561032f57600080fd5b90919293919293905050506105c0565b005b34801561034d57600080fd5b506103566105d6565b6040518082815260200191505060405180910390f35b34801561037857600080fd5b506103816105e0565b604051808215151515815260200191505060405180910390f35b3480156103a757600080fd5b506103b06105f3565b005b60015481565b60008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561044e5780601f106104235761010080835404028352916020019161044e565b820191906000526020600020905b81548152906001019060200180831161043157829003601f168201915b505050505081565b60038181548110151561046557fe5b906000526020600020016000915090508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105095780601f106104de57610100808354040283529160200191610509565b820191906000526020600020905b8154815290600101906020018083116104ec57829003601f168201915b505050505081565b606060008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105a95780601f1061057e576101008083540402835291602001916105a9565b820191906000526020600020905b81548152906001019060200180831161058c57829003601f168201915b5050505050905090565b6000600380549050905090565b8181600091906105d19291906105fe565b505050565b6000600154905090565b600260009054906101000a900460ff1681565b610384600181905550565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061063f57803560ff191683800117855561066d565b8280016001018555821561066d579182015b8281111561066c578235825591602001919060010190610651565b5b50905061067a919061067e565b5090565b6106a091905b8082111561069c576000816000905550600101610684565b5090565b9056fea165627a7a72305820fb8cd380afd7380b821e4fd2c5c1067e937027f9a9e7657eed56608cdf1794730029";
const ContainerdeployedBytecode = "0x608060405260043610610099576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632d3153dc1461009e578063471290c5146100c95780635a0bd96b14610159578063a6006cc51461020d578063abd8c99c1461029d578063b2ea5ba2146102c8578063cfae907714610341578063f0ebbd861461036c578063f3fe7de61461039b575b600080fd5b3480156100aa57600080fd5b506100b36103b2565b6040518082815260200191505060405180910390f35b3480156100d557600080fd5b506100de6103b8565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561011e578082015181840152602081019050610103565b50505050905090810190601f16801561014b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561016557600080fd5b506101926004803603602081101561017c57600080fd5b8101908080359060200190929190505050610456565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101d25780820151818401526020810190506101b7565b50505050905090810190601f1680156101ff5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561021957600080fd5b50610222610511565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610262578082015181840152602081019050610247565b50505050905090810190601f16801561028f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102a957600080fd5b506102b26105b3565b6040518082815260200191505060405180910390f35b61033f600480360360208110156102de57600080fd5b81019080803590602001906401000000008111156102fb57600080fd5b82018360208201111561030d57600080fd5b8035906020019184600183028401116401000000008311171561032f57600080fd5b90919293919293905050506105c0565b005b34801561034d57600080fd5b506103566105d6565b6040518082815260200191505060405180910390f35b34801561037857600080fd5b506103816105e0565b604051808215151515815260200191505060405180910390f35b3480156103a757600080fd5b506103b06105f3565b005b60015481565b60008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561044e5780601f106104235761010080835404028352916020019161044e565b820191906000526020600020905b81548152906001019060200180831161043157829003601f168201915b505050505081565b60038181548110151561046557fe5b906000526020600020016000915090508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105095780601f106104de57610100808354040283529160200191610509565b820191906000526020600020905b8154815290600101906020018083116104ec57829003601f168201915b505050505081565b606060008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105a95780601f1061057e576101008083540402835291602001916105a9565b820191906000526020600020905b81548152906001019060200180831161058c57829003601f168201915b5050505050905090565b6000600380549050905090565b8181600091906105d19291906105fe565b505050565b6000600154905090565b600260009054906101000a900460ff1681565b610384600181905550565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061063f57803560ff191683800117855561066d565b8280016001018555821561066d579182015b8281111561066c578235825591602001919060010190610651565b5b50905061067a919061067e565b5090565b6106a091905b8082111561069c576000816000905550600101610684565b5090565b9056fea165627a7a72305820fb8cd380afd7380b821e4fd2c5c1067e937027f9a9e7657eed56608cdf1794730029";
var ContainerOptions;
const ContainerAccount1="0x947e202Ef011728AaFe46Bf85821A282c2Ef007b";
const ContainerAccount2="0x58f9015d8B36EAcBD4d105CB79872992C073583F";
const ContainerAccount3="0x98C77df30c6d0f91F27C57c4F9404a4b1f9C99E4";
const ContainerAccount4="0xC1A22e91d1A820Fd01b0288a6115d5f2f39E4fb4";
const ContainerAccount5="0x34382923ba2Ed191D4D466E6053fADa870Fe79E1";
var ContainerTransaktion;
var betragInWei=1000000000000000000; //Wei
var betragInEth=1; //1 EHT = 1e18 Wei


var Coin;
const CoinContractADR = "0x98C77df30c6d0f91F27C57c4F9404a4b1f9C99E4";
const CoinAccount ="0x6d8C98f8eb01F8f7ee55D25Bf01e30Fa64333940";

const CoinABI = [
 
  {
    "constant": true,
    "inputs": [],
    "name": "minter",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "balances",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Sent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Verschenkt",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "receiver",
        "type": "address"
      },
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "mint",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "receiver",
        "type": "address"
      },
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "send",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "receiver",
        "type": "address"
      },
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "schencken",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  }

];

const ContainerABI = [
  
  {
    "constant": true,
    "inputs": [],
    "name": "INT2",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "STRING1",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "ARRAY5",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "BOOL3",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "s",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "gibInt",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "gibString",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "gibArrayLaenge",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "p",
        "type": "string"
      }
    ],
    "name": "aendereString",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "aendereInt",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }


    ];
    

 /*************************************************************************
 * 
 * 
 * 1Coin-Management
 * 
 *************************************************************************/
function CoinAnzeigen(data) {

  console.log("Coin lesen: " + Coin);

  data.coinabi = CoinABI;
  CoinContract = web3.eth.contract(CoinABI);
  try {
      data.coincontract = "(obj/adr/data):" + CoinContract + "/" + CoinContract.address + "/" + CoinContract.data ;
    
  } catch (error) {
      console.log(error + CoinContract );    
  }
  data.coin = "." ; 
  Coin = CoinContract.at(CoinContractADR);
  try {
    data.coin = "(obj/adr/data):" + Coin + "/" + Coin.address + "/" + Coin.data ;
  
  } catch (error) {
      console.log(error + Coin);    
  }


  try {

    data.minter=".";
    Coin.minter((error, value) => {
      if (error) { console.error(error); }
      data.minter = value;
    });

    console.log("Coin korrekt angezeigt.")


  } catch (error) {

    console.log("Fehler beim Container lesen: " + error);
    
  }

  console.log("Coin lesen fertig.")


}  





function CoinVerschenken (data,adressat) {

  console.log("CoinVerschenken: " + data.amount);

  try {


    //
    // Code für ändern ????
    //
    var myContract = web3.eth.contract(CoinABI);
    var myContractInstance = myContract.at(CoinContractADR);
    console.log("contract/contractinstanz:" + myContract + "/" + myContractInstance);
    console.log("contract/contractinstanz:" + myContract.address + "/" + myContractInstance.address);
    console.log("para:" + betragInWei + "/" + "adr:" + adressat);
    
    myContractInstance.schencken(
      ContainerAccount2,betragInWei,
      {from : ContainerAccount5, value: betragInWei, gas: ContainerGgasLimit, gasPriceInWei : ContainerGasPrice}, 
      function(err, myContract){
        if(!err) {
           // NOTE: The callback will fire twice!
           // Once the contract has the transactionHash property set and once its deployed on an address.
            // e.g. check tx hash on the first call (transaction send)
           if(!myContract.address) {
               console.log("Phase1- " + myContract.transactionHash) // The hash of the transaction, which deploys the contract
           
           // check address on the second call (contract deployed)
           } else {
               console.log("Phase2- " + myContract.address) // the contract address
           }
            // Note that the returned "myContractReturned" === "myContract",
           // so the returned "myContractReturned" object will also get the address set.
        }
        else {

          console.log("Fehler in der Methode beim Coin senden: " + err);

        }
      });
      
   
    
    console.log("Coin senden fertig.")

  } catch (err) {
    console.log("Fehler beim Coin senden: " + err);
    
  }
}  





function CoinSenden (data) {

  console.log("Coin senden: " + data.amount);

  try {

    betragInWei = web3.toWei(data.amount, 'ether');
    
  } catch (error) {
    console.log("Fehler beim Konvertieren:" +  data.amount +"/"+  + error);
    return;
  }

  try {

    //
    // Code für ändern ????
    //
    var myContract = web3.eth.contract(CoinABI);
    var myContractInstance = myContract.at(CoinContractADR);
    console.log("contract/contractinstanz:" + myContract + "/" + myContractInstance);
    console.log("contract/contractinstanz:" + myContract.address + "/" + myContractInstance.address);
    console.log("para:" + betragInWei + "/" + "adr:" + data.adressat);
    
    myContractInstance.send(
      data.adressat,betragInWei,
      {from : ContainerAccount5, value: betragInWei, gas: 3000000, gasPriceInWei : 1000}, 
      function(err, myContract){
        if(!err) {
           // NOTE: The callback will fire twice!
           // Once the contract has the transactionHash property set and once its deployed on an address.
            // e.g. check tx hash on the first call (transaction send)
           if(!myContract.address) {
               console.log("Phase1- " + myContract.transactionHash) // The hash of the transaction, which deploys the contract
           
           // check address on the second call (contract deployed)
           } else {
               console.log("Phase2- " + myContract.address) // the contract address
           }
            // Note that the returned "myContractReturned" === "myContract",
           // so the returned "myContractReturned" object will also get the address set.
        }
        else {

          console.log("Fehler in der Methode beim Coin senden: " + err);

        }
      });
  
   
    
    console.log("Coin senden fertig.")

  } catch (err) {

    console.log("Fehler beim Coin senden: " + err);
    
  }

}  



function CoinErzeugen (data) {

  console.log("Coin erzeugen: " + betragInWei + "/" + data.adressat);

  try {

    //
    // Code für ändern ????
    //
    var myContract = web3.eth.contract(CoinABI);
    var myContractInstance = myContract.at(CoinContractADR);
    console.log("contract/contractinstanz:" + myContract + "/" + myContractInstance);
    console.log("contract/contractinstanz:" + myContract.address + "/" + myContractInstance.address);
    console.log("parameter:" + betragInWei + "/" + "adr:" + data.adressat);
    myContractInstance.mint(
      data. minter,betragInWei,
      {from : data.minter, value: betragInWei, gas: 2500000}, 
      function(err, myContract){
        if(!err) {
           // NOTE: The callback will fire twice!
           // Once the contract has the transactionHash property set and once its deployed on an address.
            // e.g. check tx hash on the first call (transaction send)
           if(!myContract.address) {
               console.log("Phase1- " + myContract.transactionHash) // The hash of the transaction, which deploys the contract
           
           // check address on the second call (contract deployed)
           } else {
               console.log("Phase2- " + myContract.address) // the contract address
           }
            // Note that the returned "myContractReturned" === "myContract",
           // so the returned "myContractReturned" object will also get the address set.
        }
        else {

          console.log("Fehler in der Methode beim coin erzeugen: " + err);

        }
      });
      
   
    
    console.log("Coin erzeugen fertig.")


  } catch (error) {

    console.log("Fehler beim Coin erzeugen: " + error);
    
  }



}  

function eingabenPruefen (data) {

  var adressat;

  //
  // Welcher Adressat ?
  //
  switch (data.picked) {
    case "Account1":
        data.adressat = ContainerAccount1;
      break;
      case "Account2": 
        data.adressat = ContainerAccount2;      
      break;
      case "Account3":
          data.adressat = ContainerAccount3;      
      break;
      case "Account4": 
      data.adressat = ContainerAccount2;      
      break;
    default:
        return 1;
      break;
  }

  //
  // Wieviel ?
  //
  try {

    betragInEth = data.amount;
    betragInWei = web3.toWei(data.amount, 'ether');
    console.log("Konvertieren erfolgreich : von " +  data.amount +" nach "+  betragInWei);
    
  } catch (error) {
      console.log("Fehler beim Konvertieren:" +  data.amount +"/"+  + error);
    return 2;
  }

  //
  // alles gut
  //
  return 0;

}



/*************************************************************************
 * 
 * 
 * 1Container-Management
 * 
 *************************************************************************/
function ContainerLesen (data) {

  console.log("Container lesen: " + data);


}


 function ContainerAnzeigen(data) {

    console.log("Container lesen: " + Container);
    try {
      data.container = Container.address;

      data.string1=".";
      Container.STRING1((error, value) => {
        if (error) { console.error(error); }
        data.string1 = value;
      });

      data.bool3=".";
      Container.BOOL3((error, value) => {
        if (error) { console.error(error); }
        data.bool3 = value;
      });
      
      Container.gibArrayLaenge((error, value) => {
        if (error) { console.error(error); }
        data.array5 = value;
      });

      Container.gibInt((error, value) => {
        if (error) { console.error(error); }
        data.int2 = value;
      });

      //bool public BOOL3;
      //address private ADDRESS4;
  
      console.log("Container lesen fertig.")
  

    } catch (error) {

      console.log("Fehler beim Container lesen: " + error);
      
    }
  
}  


function ContainerErzeugen(data) {



  console.log("Neuen Container anlegen..." + data);

  try {

    //
    // Code für anlegen ???
    //
    var param1 = "EinNeuerContainer";
      var mySenderAddress = '0xb20ea9B80B348027211Ab86A3680F690522F8312';
      /* geht nicht:
        account aus metamask : "0x6d8C98f8eb01F8f7ee55D25Bf01e30Fa64333940";
        contactadresse
      */  
    var bytecode = Containerbytecode;
    var gasEstimate = web3.eth.defaultGas;
    MyContract = web3.eth.contract(ContainerABI);
 
    // Deploy contract syncronous: The address will be added as soon as the contract is mined.
    // Additionally you can watch the transaction by using the "transactionHash" property
    var myContractInstance = MyContract.new(param1, {data: Containerbytecode, gas: 300000, from: mySenderAddress});
    myContractInstance.transactionHash // The hash of the transaction, which created the contract
    myContractInstance.address // undefined at start, but will be auto-filled later

    
    console.log("Container anlegen fertig.")

  } catch (error) {

    console.log("Fehler beim Container anlegen: " + error);
    
  }
  
}



function ContainerAnlegen(data) {



  console.log("Neuen Container anlegen..." + data);

  try {

    //
    // Code für anlegen ???
    //
    var param1 = "EinNeuerContainer";
      var mySenderAddress = '0xb20ea9B80B348027211Ab86A3680F690522F8312';
      /* geht nicht:
        account aus metamask : "0x6d8C98f8eb01F8f7ee55D25Bf01e30Fa64333940";
        contactadresse
      */  
    var bytecode = Containerbytecode;
    var gasEstimate = web3.eth.defaultGas;
    MyContract = web3.eth.contract(ContainerABI);
    var myContractReturned = MyContract.new(param1,  {
      from:mySenderAddress,
      data:bytecode,
      gas:gasEstimate}, function(err, myContract){
       if(!err) {
          // NOTE: The callback will fire twice!
          // Once the contract has the transactionHash property set and once its deployed on an address.
           // e.g. check tx hash on the first call (transaction send)
          if(!myContract.address) {
              console.log(myContract.transactionHash) // The hash of the transaction, which deploys the contract
          
          // check address on the second call (contract deployed)
          } else {
              console.log(myContract.address) // the contract address
          }
           // Note that the returned "myContractReturned" === "myContract",
          // so the returned "myContractReturned" object will also get the address set.
       }
     });


    
    console.log("Container anlegen fertig.")

  } catch (error) {

    console.log("Fehler beim Container anlegen: " + error);
    
  }
  //web3: new web3.eth.Contract(jsonInterface, address, options)
  /* web3
  (param1, param2, {
    from:mySenderAddress,
    data:bytecode,
    gas:gasEstimate}, function(err, myContract){
     if(!err) {
        // NOTE: The callback will fire twice!
        // Once the contract has the transactionHash property set and once its deployed on an address.
         // e.g. check tx hash on the first call (transaction send)
        if(!myContract.address) {
            console.log(myContract.transactionHash) // The hash of the transaction, which deploys the contract
        
        // check address on the second call (contract deployed)
        } else {
            console.log(myContract.address) // the contract address
        }
         // Note that the returned "myContractReturned" === "myContract",
        // so the returned "myContractReturned" object will also get the address set.
     }
   });
  */
  //training solidity
    /* function versicherungsvertragAnlegen(versicherungsnehmer, versicherungsid) {
    const contractDesc = web3.eth.contract(versicherungsvertragAbi);
    contractDesc.new(versicherungsnehmer, versicherungsid, {
      data: versicherungscontractByteCode,
      gas: 1000000
    }, function(error, contract) {
      console.log(contract)
    });*/
  
}



function ContainerAendern(data) {

  const n  = "NeuerContainerName";
  console.log("Container (" + Container.address + ") ändern - neuer Wert:" +  n);

  try {

    //
    // Code für ändern ????
    //
    var param1="Geaendert"
    var myContract = web3.eth.contract(ContainerABI);
    var myContractInstance = myContract.at(ContainerContractADR);
    console.log("contract/contractinstanz:" + myContract + "/" + myContractInstance);
    console.log("contract/contractinstanz:" + myContract.address + "/" + myContractInstance.address);
    console
    myContractInstance.aendereString(
      param1,
      {from : web3.eth.defaultAccount, value: 200, gas: 250100}, 
      function(err, myContract){
        if(!err) {
           // NOTE: The callback will fire twice!
           // Once the contract has the transactionHash property set and once its deployed on an address.
            // e.g. check tx hash on the first call (transaction send)
           if(!myContract.address) {
               console.log("Phase1- " + myContract.transactionHash) // The hash of the transaction, which deploys the contract
           
           // check address on the second call (contract deployed)
           } else {
               console.log("Phase2- " + myContract.address) // the contract address
           }
            // Note that the returned "myContractReturned" === "myContract",
           // so the returned "myContractReturned" object will also get the address set.
        }
        else {

          console.log("Fehler in der Methode beim Container aendern: " + error);

        }
      });
      
   
    
    console.log("Container aendern fertig.")


  } catch (error) {

    console.log("Fehler beim Container aendern: " + error);
    
  }

}  


function initGlobals(data) {
  var step=99;
  console.log("Globale Parameter initialisieren...");


  try {


    //
    // Provider auslesen oder erzeugen
    //
    step=0;
    if (typeof web3 !== 'undefined') 
    {
      web3 = new Web3(web3.currentProvider);
    } 
    else 
    {
      // set the provider you want from Web3.providers
      web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
    };
    console.log(step);
    console.log("Web3 belegt!");

    //
    // Accounts ermitteln
    //
    step=1;
    data.accounts = "...";
    try {
  
      web3.eth.personal.getAccounts(function(error, result){
        if(!error) {
            console.log("Accounts gefunden");
            data.accounts = result.toString();

        }
        else {
          console.error("Fehler beim Accounts suchen" + error);
        }
      });
    } catch (error) {

      console.log("Fehler bei getaccounts" +  error);

    }
    console.log(step);

    //web3.eth.defaultAccount="0x6d8C98f8eb01F8f7ee55D25Bf01e30Fa64333940";
    step=step+1;
    data.account1=ContainerAccount1;
    data.account2=ContainerAccount2;
    data.account3=ContainerAccount3;
    data.account4=ContainerAccount4;
    data.account5=ContainerAccount5;


 

    step=step+1;
    ContainerOptions = {
      defaultAccount: ContainerAccount1 ,
      defaultBlock: 'latest',
      defaultGas: 1,
      defaultGasPrice: 100,
      transactionBlockTimeout: 50,
      transactionConfirmationBlocks: 24,
      transactionPollingTimeout: 480,
      //transactionSigner: new CustomTransactionSigner()
    }
    console.log(step);


    step=3;
    data.options = ContainerOptions.toString();
    //
    // Transaktiobjekt erstellen
    //
    step=4;
    var gasLimit = ContainerGgasLimit;
    var gasPriceInWei = ContainerGasPrice;
    ContainerTransaktion = {
        from: ContainerAccount1,
        gas: gasLimit,
        gasPrice: gasPriceInWei
      };
    data.transaktion = ContainerTransaktion.toString();
    console.log(step);

    //
    // ContainerContract ermitteln
    //
    step=5;
    data.abi = ContainerABI;
    ContainerContract = web3.eth.contract(ContainerABI);
    try {
        data.containercontract = "(obj/adr/data):" + ContainerContract + "/" + ContainerContract.address + "/" + ContainerContract.data ;
      
    } catch (error) {
        console.log(error + ContainerContract );    
    }

    data.container = "." ; 
    Container = ContainerContract.at(ContainerContractADR);
    try {
      data.container = "(obj/adr/data):" + Container + "/" + Container.address + "/" + Container.data ;
    
    } catch (error) {
        console.log(error + Container);    
    }
    console.log(step);
    
    data.ContainerContractADR = ContainerContractADR;
    data.Containerbytecode = Containerbytecode ;
    data.ContainerdeployedBytecode =ContainerdeployedBytecode ;




    //
    // Kontostand ermitteln
    //
    step=6;

    data.saldo3 = "...";
    web3.eth.getBalance(ContainerAccount3,function(error, result){
      if(!error) {
          data.saldo3 = result.toString(10); // toString(10) converts it to a number string
          //data.balance = JSON.stringify(result);
          console.log("Saldo3 gefunden");
      }
      else {
        //balance = new BigNumber('131242344353464564564574574567456');
        //balance.plus(21).toString(10); // toString(10) converts it to a number string
        console.error(error);
      }
    });

    data.saldo1 = "...";
    web3.eth.getBalance(ContainerAccount1,function(error, result){
    if(!error) {
         data.saldo1 = result.toString(10); // toString(10) converts it to a number string
         //data.balance = JSON.stringify(result);
         console.log("Saldo1 gefunden");
         //data.iban1 = web3.eth.Iban.toIban(ContainerAccount1);
     }
     else {
       //balance = new BigNumber('131242344353464564564574574567456');
       //balance.plus(21).toString(10); // toString(10) converts it to a number string
       console.error(error);
     }

    });

    data.saldo2 = "...";
    web3.eth.getBalance(ContainerAccount2,function(error, result){
    if(!error) {
         data.saldo2 = result.toString(10); // toString(10) converts it to a number string
         //data.balance = JSON.stringify(result);
         console.log("Saldo2 gefunden");
     }
     else {
       //balance = new BigNumber('131242344353464564564574574567456');
       //balance.plus(21).toString(10); // toString(10) converts it to a number string
       console.error(error);
     }

    });


    data.saldo4 = "...";
    web3.eth.getBalance(ContainerAccount4,function(error, result){
    if(!error) {
         data.saldo4 = result.toString(10); // toString(10) converts it to a number string
         //data.balance = JSON.stringify(result);
         console.log("Saldo2 gefunden");
     }
     else {
       //balance = new BigNumber('131242344353464564564574574567456');
       //balance.plus(21).toString(10); // toString(10) converts it to a number string
       console.error(error);
     }

    });

    data.saldo5 = "...";
    web3.eth.getBalance(ContainerAccount5,function(error, result){
    if(!error) {
         data.saldo5 = result.toString(10); // toString(10) converts it to a number string
         //data.balance = JSON.stringify(result);
         console.log("Saldo2 gefunden");
     }
     else {
       //balance = new BigNumber('131242344353464564564574574567456');
       //balance.plus(21).toString(10); // toString(10) converts it to a number string
       console.error(error);
     }

    });

    console.log(step);


    //
    // Variablen festlegen
    //
    step=10;
    /*data.amount = Betrag.toString(10);
    console.log("Nach Ether konvertieren: " + betragInWei + "/" + data.amount);
    web3.fromWei(betragInWei, 'ether',function(error, result) {
      if(!error) {
        data.amount=result;
       }
       else {
         console.error(error);
       };
    });

    console.log("Nach Ether konvertiert: " + betragInWei + "/" + data.amount);*/
    data.amount=betragInEth;
    console.log(step);



    //
    // IBAN ermitteln
    //
    step=11
    /*
    data.iban1=".";
    var adr=ContainerAccount1;
    console.log("Adresse:  " + adr + " die Iban suchen !");
    web3.eth.iban.fromAddress(ContainerAccount1,function(error, result){
      if(!error) {
        console.log("Adresse:  " + adr + " hat Iban :" + i);
        data.iban1 = result; // 'XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS
           //data.balance = result.plus(21).toString(10); // toString(10) converts it to a number string
           //data.balance = JSON.stringify(result);
       }
       else {
         //balance = new BigNumber('131242344353464564564574574567456');
         //balance.plus(21).toString(10); // toString(10) converts it to a number string
         console.error(error);
         console.log("Adresse:  " + adr + " hat keine Iban !");

       };
    });
    console.log(step);*/


    
    



    console.log("Globale Parameter initialisiert.");


    }  

 

catch(error) {

  console.log("Fehler bei Schritt " + step + " globale Parameter initialisierten: " + error);

}

}



async function initVue() {
 
  await ethereum.enable();
 
  const data = {
    /* Listen */
    containerListe : [],
    
    /* Coin-Parameter */
    coin : "coin",
    coinabi : "coinabi",
    coincontract : "coincontract",
    CoinContractADR : "",
    Coinbytecode : "",
    CoindeployedBytecode : "",

    minter : "minter",
    amount : "amount",
 
    /* Suchparameter */
    version : "version",
    netzwerk : "netzwerk",
    provider : "provider",
    peers : "peers",
    block : "block",
    blocknumber : "blocknumber",
    gasprice : "gasprice",
    account1 : "account1",
    account2 : "account2",
    account3 : "account3",
    account4 : "account4",
    account5 : "account5",
    accounts : "accounts",

    saldo1 : "saldo1",
    saldo2 : "saldo2",
    saldo3 : "saldo3",
    saldo4 : "saldo4",
    saldo5 : "saldo5",

    picked : "picked",

    adressat : "adressat",

    iban : "iban",
    iban1 : "iban1",
    transaktion : "transaktion",
    options : "options",
    balance : "balance",
    verbindung : "verbindung",
    nodes : "nodes",
    abi : "abi",
    containercontract : "containercontract",
    container : "container",
    json0 : "json",
    string1 : "string",
    int2 : "int",
    bool3 : "bool",
    array5 : "array",

    ContainerContractADR : "",
    Containerbytecode : "",
    ContainerdeployedBytecode : "",




  };

  new Vue({


    el: '#app',
    data: data,
    methods: {


      ContainerLesen() {
        ContainerLesen(data);
      },

      ContainerAendern() {
        ContainerAendern(data);
      },

      ContainerAnzeigen() {
        ContainerAnzeigen(data);
      },

      ContainerErzeugen(){
        ContainerErzeugen(data);
      },

      ContainerAnlegen(){
        var rc;
        rc=eingabenPruefen(data);
        if (rc==0)
          {CoinSenden (data);}
        else
          {console.log("Falsche Parameter: " + rc )}  
        ContainerAnlegen(data);
      },

      CoinVerschenken() {
        CoinVerschenken(data,ContainerAccount3);
      },

      CoinSenden(){
        var rc;
        rc=eingabenPruefen(data);
        if (rc==0)
          {CoinSenden (data);}
        else
          {console.log("Falsche Parameter: " + rc )}  
      },

      CoinErzeugen(){
        
        var rc;
        rc=eingabenPruefen(data);
        if (rc==0)
          {CoinErzeugen (data);}
        else
          {console.log("Falsche Parameter: " + rc )}  
      },
      
      CoinAnzeigen(){
        CoinAnzeigen (data);
      }

    }
  });
   
  console.log("Web3-Daten ermitteln...");

  
  try {
    

    initGlobals(data);


    //
    // Netzwerkinformationen auslesen
    //
    data.version = web3.version.api;
    // + "/" +  web3.version.ethereum;
    web3.version.getNetwork((err, netId) => {
      data.netzwerk = netId;
      switch (netId) {
        case "1":
          console.log('This is mainnet')
          break
        case "2":
          console.log('This is the deprecated Morden test network.')
          break
        case "3":
          console.log('This is the ropsten test network.')
          break
        case "4":
          console.log('This is the Rinkeby test network.')
          break
        case "42":
          console.log('This is the Kovan test network.')
          break
        default:
          console.log('This is an unknown network.')
      }
    });
    if(!web3.isConnected()) {
 
      // show some dialog to ask the user to start a node
      data.verbindung = "nicht verbunden";
    } else {
    
      // start web3 filters, calls, etc
      data.verbindung = "verbunden";
     
    }
    //web3.eth.getBalance(web3.eth.defaultAccount,function(error, result){
     /*web3.eth.getCoinbase(callback(error, result){ ... })
    web3.net.peerCount((error, result) {
      if (error){console.log(error)};
      data.peers = result;
    });*/
   
     ///
     // Provider auslesen
     //
    //data.provider = web3.eth.coinbase;
    //data.provider = web3.eth.getCoinbase();

    /*data.block = web3.eth.defaultBlock;
    web3.eth.blockNumber(function(error, result){
      if(!error)
          data.blocknumber = JSON.stringify(result);
      else
          console.error(error);
    });

    /*
    web3.eth.getBlock(48, function(error, result){
      if(!error)
          console.log(JSON.stringify(result));
      else
          console.error(error);
    })*/

    web3.eth.defaultGasPrice =100;
    data.gasprice = web3.eth.defaultGasPrice;

    //data.gas = web3.eth.gasPrice.toString(10);
      //console.log(gasPrice.toString(10)); // "10000000000000"




  } catch (error) {
    
    console.log("Fehler beim init:" + error);
  }
  

  console.log("init abgeschlossen");
  
}

