const contractAddress = "0xd1d74Bb6F22BE771600A7D7890fa99365738f822"; // neues deployment...neue Adresse und ABI !!!!!
const versicherungscontractByteCode = "0x608060405234801561001057600080fd5b50604051610ca9380380610ca98339810180604052604081101561003357600080fd5b81019080805164010000000081111561004b57600080fd5b8281019050602081018481111561006157600080fd5b815185600182028301116401000000008211171561007e57600080fd5b505092919060200180519060200190929190505050806001819055504260008190555081600290805190602001906100b79291906100c7565b506000600381905550505061016c565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061010857805160ff1916838001178555610136565b82800160010185558215610136579182015b8281111561013557825182559160200191906001019061011a565b5b5090506101439190610147565b5090565b61016991905b8082111561016557600081600090555060010161014d565b5090565b90565b610b2e8061017b6000396000f3fe60806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630e253b1b146100935780632412d4fe1461010e5780634e47a3fe14610149578063536e0adc1461017457806389c81f5d1461019f57806390926f33146101f0578063af640d0f1461022b578063f7f7bd9214610256575b600080fd5b34801561009f57600080fd5b506100cc600480360360208110156100b657600080fd5b81019080803590602001909291905050506102e6565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561011a57600080fd5b506101476004803603602081101561013157600080fd5b8101908080359060200190929190505050610324565b005b34801561015557600080fd5b5061015e6103c2565b6040518082815260200191505060405180910390f35b34801561018057600080fd5b506101896103c8565b6040518082815260200191505060405180910390f35b3480156101ab57600080fd5b506101ee600480360360208110156101c257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506103d5565b005b3480156101fc57600080fd5b506102296004803603602081101561021357600080fd5b810190808035906020019092919050505061043e565b005b34801561023757600080fd5b50610240610448565b6040518082815260200191505060405180910390f35b34801561026257600080fd5b5061026b61044e565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102ab578082015181840152602081019050610290565b50505050905090810190601f1680156102d85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6004818154811015156102f557fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008161032f6104ec565b80828152602001915050604051809103906000f080158015610355573d6000803e3d6000fd5b50905060048190806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b60005481565b6000600480549050905090565b60048190806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b8060038190555050565b60015481565b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104e45780601f106104b9576101008083540402835291602001916104e4565b820191906000526020600020905b8154815290600101906020018083116104c757829003601f168201915b505050505081565b604051610606806104fd8339019056fe60806040526000600560006101000a81548160ff0219169083600281111561002357fe5b021790555034801561003457600080fd5b506040516020806106068339810180604052602081101561005457600080fd5b8101908080519060200190929190505050806002819055504260008190555060018060018154018082558091505090600182039060005260206000200160006040805190810160405280600581526020017f5374617274000000000000000000000000000000000000000000000000000000815250909190915090805190602001906100e19291906100f1565b5050600060038190555050610196565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061013257805160ff1916838001178555610160565b82800160010185558215610160579182015b8281111561015f578251825591602001919060010190610144565b5b50905061016d9190610171565b5090565b61019391905b8082111561018f576000816000905550600101610177565b5090565b90565b610461806101a56000396000f3fe608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063083424cb1461007d57806316fd8dcb146101315780634e47a3fe1461016c5780637d9699b614610197578063af640d0f146101c2578063c1e03707146101ed575b600080fd5b34801561008957600080fd5b506100b6600480360360208110156100a057600080fd5b8101908080359060200190929190505050610273565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100f65780820151818401526020810190506100db565b50505050905090810190601f1680156101235780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561013d57600080fd5b5061016a6004803603602081101561015457600080fd5b810190808035906020019092919050505061032e565b005b34801561017857600080fd5b50610181610338565b6040518082815260200191505060405180910390f35b3480156101a357600080fd5b506101ac61033e565b6040518082815260200191505060405180910390f35b3480156101ce57600080fd5b506101d7610344565b6040518082815260200191505060405180910390f35b3480156101f957600080fd5b506102716004803603602081101561021057600080fd5b810190808035906020019064010000000081111561022d57600080fd5b82018360208201111561023f57600080fd5b8035906020019184600183028401116401000000008311171561026157600080fd5b909192939192939050505061034a565b005b60018181548110151561028257fe5b906000526020600020016000915090508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103265780601f106102fb57610100808354040283529160200191610326565b820191906000526020600020905b81548152906001019060200180831161030957829003601f168201915b505050505081565b8060038190555050565b60005481565b60035481565b60025481565b600182829091806001815401808255809150509060018203906000526020600020016000909192939091929390919290919250919061038a929190610390565b50505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106103d157803560ff19168380011785556103ff565b828001600101855582156103ff579182015b828111156103fe5782358255916020019190600101906103e3565b5b50905061040c9190610410565b5090565b61043291905b8082111561042e576000816000905550600101610416565b5090565b9056fea165627a7a72305820f328340cc8c2c75e5c11d2ae7b9d23e18eea27d65757ef22003de5018b15986b0029a165627a7a72305820f48ada52efe943b3a4166ba2de63199b87c028c67d8d5755e6458494e353a2dc0029";

const versicherungsvertragAbi =[
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "transporte",
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
      "inputs": [],
      "name": "datum",
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
      "name": "id",
      "outputs": [
        {
          "name": "",
          "type": "int256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "versicherungsnehmer",
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
      "inputs": [
        {
          "name": "vn",
          "type": "string"
        },
        {
          "name": "nr",
          "type": "int256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getTransporteLength",
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
          "name": "transport",
          "type": "address"
        }
      ],
      "name": "associateTransport",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "nr",
          "type": "int256"
        }
      ],
      "name": "addTransport",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "wert",
          "type": "int256"
        }
      ],
      "name": "changeDeckung",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

const transportAbi = [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "strecke",
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
      "name": "datum",
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
      "name": "warenwert",
      "outputs": [
        {
          "name": "",
          "type": "int256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "id",
      "outputs": [
        {
          "name": "",
          "type": "int256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "nr",
          "type": "int256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "streckenpunkt",
          "type": "string"
        }
      ],
      "name": "addStrecke",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "wert",
          "type": "int256"
        }
      ],
      "name": "changeWarenwert",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];



function loadTransporte(data) {
  const contractDesc = web3.eth.contract(versicherungsvertragAbi);
  const transportContractDesc = web3.eth.contract(transportAbi);
  const contract = contractDesc.at(contractAddress); // "Cast"
  contract.getTransporteLength((error, value) => {
      if (error) { console.error(error); }
      data.tmp = value.toString();
      const anzTransporte = value.toNumber();
      for (let i = 0; i < anzTransporte; i++) {
          contract.transporte(i, (error, transport) => {
              const transportContract = transportContractDesc.at(transport);
              transportContract.id((error, value) => {
                  data.transporte.push({id: value.toNumber(), address: transport, index: i});
              });
          });
      }
  });
}

function transportAnlegen(transportId) {
  const contractDesc = web3.eth.contract(versicherungsvertragAbi);
  const versicherungsContract = contractDesc.at(contractAddress);
  versicherungsContract.addTransport(transportId, {value: 0, gas: 1000000}, (error, transactionHash) => {
    console.log(transactionHash);
  });
}

function versicherungsvertragAnlegen(versicherungsnehmer, versicherungsnummer) {
  const contractDesc = web3.eth.contract(versicherungsvertragAbi);
  contractDesc.new(versicherungsnehmer, versicherungsnummer, {
    data: versicherungscontractByteCode,
    gas: 1000000
  }, function(error, contract) {
    console.log(contract)
  });
}

function initVue() {
    const data = {
        transporte: [],
        TransportFindenVAD: "aojeojeii",
        TransportFindenVNR: "4711",
        tpAbsender : "",
        tpWarenwert : "0",
        tpZiel : "Mainz",
        tpIdentifikation : "",
        vvVersicherungsnehmer : "",
        vvVersicherungsnummer : "",
        vvDeckung : "",
        transport : "",
        id : ""
    }

    new Vue({
        el: '#app',
        data: data,
        methods: {
          TransportFinden() {
            transportFinden(this.TransportFindenVAD, this.TransportFindenVNR);
          },
          neuerTransport() {
            transportAnlegen(this.neuerTransportName);
          },
          neuerVersicherungsvertrag() {
            versicherungsvertragAnlegen(this.neuerVersicherungsnehmer, this.neueVersicherugsnummer)
          }
        }
    });

    //loadTransporte(data);
    TransportFinden(data);
}

function TransportFinden(data){
  //data.transporte.push({id: "id1", address: "add1", index: 1});
  //data.transporte.push({id: "id2", address: "add2", index: 2});
  data.transporte.push({spedition: "spedition frei", absender: "andro chwarz", id: "T877ae",
    warenwert: "1000 Euro", datum: "15.05.2011", ziel: "Mainz", 
    adresse: "0exleeahhhe"});
    data.transporte.push({spedition: "frachtunternehmung frei", absender: "hristian treisch", id: "T452877ae",
    warenwert: "1000455 Euro", datum: "15.05.2012", ziel: "Freiburg", 
    adresse: "0exleeahhhe"});  

    data.transporte.push({spedition: "lkw4uber frei", absender: "ieter ecking", id: "T117854",
    warenwert: "500000 Euro", datum: "15.05.2013", ziel: "Mönchengladbach", 
    adresse: "0exleeahhhe"});  
  //data.transporte.push({id: vnr, address: vad, index: 2});
}

