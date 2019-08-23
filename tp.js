/*************************************************
 * 
 * 0Konstanten managen
 * 
 ***************************************************/
const dasJahr = "2018"

//const transportbytecode = "0x60806040526000600460006101000a81548160ff0219169083600281111561002357fe5b021790555034801561003457600080fd5b506040516020806105c38339810180604052602081101561005457600080fd5b81019080805190602001909291905050508060018190555060008060018154018082558091505090600182039060005260206000200160006040805190810160405280600581526020017f5374617274000000000000000000000000000000000000000000000000000000815250909190915090805190602001906100da9291906100ea565b505060006002819055505061018f565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061012b57805160ff1916838001178555610159565b82800160010185558215610159579182015b8281111561015857825182559160200191906001019061013d565b5b509050610166919061016a565b5090565b61018c91905b80821115610188576000816000905550600101610170565b5090565b90565b6104258061019e6000396000f3fe60806040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063083424cb1461007257806316fd8dcb146101265780637d9699b614610161578063af640d0f1461018c578063c1e03707146101b7575b600080fd5b34801561007e57600080fd5b506100ab6004803603602081101561009557600080fd5b810190808035906020019092919050505061023d565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100eb5780820151818401526020810190506100d0565b50505050905090810190601f1680156101185780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561013257600080fd5b5061015f6004803603602081101561014957600080fd5b81019080803590602001909291905050506102f8565b005b34801561016d57600080fd5b50610176610302565b6040518082815260200191505060405180910390f35b34801561019857600080fd5b506101a1610308565b6040518082815260200191505060405180910390f35b3480156101c357600080fd5b5061023b600480360360208110156101da57600080fd5b81019080803590602001906401000000008111156101f757600080fd5b82018360208201111561020957600080fd5b8035906020019184600183028401116401000000008311171561022b57600080fd5b909192939192939050505061030e565b005b60008181548110151561024c57fe5b906000526020600020016000915090508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102f05780601f106102c5576101008083540402835291602001916102f0565b820191906000526020600020905b8154815290600101906020018083116102d357829003601f168201915b505050505081565b8060028190555050565b60025481565b60015481565b600082829091806001815401808255809150509060018203906000526020600020016000909192939091929390919290919250919061034e929190610354565b50505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061039557803560ff19168380011785556103c3565b828001600101855582156103c3579182015b828111156103c25782358255916020019190600101906103a7565b5b5090506103d091906103d4565b5090565b6103f691905b808211156103f25760008160009055506001016103da565b5090565b9056fea165627a7a723058200d641fe6db9c22f27f4201d4cb019c23347f7f8970057ab86ada673134bf36f60029";
const transportABI = [

  {
    "constant": true,
    "inputs": [],
    "name": "einheit",
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
    "name": "AnName",
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
    "name": "AnDatum",
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
    "name": "VonName",
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
    "name": "art",
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
    "name": "spedition",
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
    "name": "warenwert",
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
    "name": "menge",
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
    "name": "VonDatum",
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
    "name": "id",
    "outputs": [
      {
        "name": "",
        "type": "bytes8"
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
    "name": "uebergaben",
    "outputs": [
      {
        "name": "datum",
        "type": "string"
      },
      {
        "name": "ort",
        "type": "string"
      },
      {
        "name": "menge",
        "type": "string"
      },
      {
        "name": "frachtfuehrer",
        "type": "string"
      },
      {
        "name": "schaden",
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
    "name": "AnOrt",
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
    "name": "VonOrt",
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
        "name": "vd",
        "type": "string"
      },
      {
        "name": "va",
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
    "name": "gibDetails",
    "outputs": [
      {
        "name": "",
        "type": "bytes8"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "bytes10"
      },
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
        "name": "sp",
        "type": "string"
      }
    ],
    "name": "ergaenzeSpedition",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "an",
        "type": "string"
      },
      {
        "name": "ad",
        "type": "string"
      },
      {
        "name": "ao",
        "type": "string"
      }
    ],
    "name": "ergaenzeAdresssat",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "mg",
        "type": "uint256"
      },
      {
        "name": "eh",
        "type": "string"
      },
      {
        "name": "ar",
        "type": "string"
      }
    ],
    "name": "ergaenzeDetails",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "dt",
        "type": "string"
      },
      {
        "name": "ot",
        "type": "string"
      },
      {
        "name": "mg",
        "type": "string"
      },
      {
        "name": "ff",
        "type": "string"
      },
      {
        "name": "sd",
        "type": "int256"
      }
    ],
    "name": "ergaenzeUebergabe",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "gibUebergabe",
    "outputs": [
      {
        "name": "dt",
        "type": "string"
      },
      {
        "name": "ot",
        "type": "string"
      },
      {
        "name": "mg",
        "type": "string"
      },
      {
        "name": "ff",
        "type": "string"
      },
      {
        "name": "sd",
        "type": "int256"
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
        "name": "wert",
        "type": "uint256"
      }
    ],
    "name": "aendereWarenwert",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "gibStartdatum",
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
    "name": "gibRoutenAnzahl",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }


];

const versicherungsvertragABI = [
 
  {
    "constant": true,
    "inputs": [],
    "name": "laufzeit",
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
    "name": "status",
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
    "name": "versicherer",
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
    "name": "erstellungsdatum",
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
    "name": "beginn",
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
    "name": "summe",
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
    "name": "tarif",
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
    "name": "id",
    "outputs": [
      {
        "name": "",
        "type": "bytes8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "nr",
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
    "name": "ende",
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
        "name": "kp",
        "type": "address"
      },
      {
        "name": "vn",
        "type": "string"
      },
      {
        "name": "vu",
        "type": "string"
      },
      {
        "name": "tar",
        "type": "string"
      },
      {
        "name": "vnr",
        "type": "int256"
      },
      {
        "name": "sum",
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
    "name": "gibTransportAnzahl",
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
    "name": "ergaenzeTransport",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "erhoeheSchaden",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "lz",
        "type": "string"
      },
      {
        "name": "bg",
        "type": "string"
      },
      {
        "name": "ed",
        "type": "string"
      }
    ],
    "name": "aendereLaufzeit",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "beendeVertrag",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "gibSchadenDetails",
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
    "name": "gibID",
    "outputs": [
      {
        "name": "",
        "type": "bytes8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "gibDetails",
    "outputs": [
      {
        "name": "",
        "type": "bytes8"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "int256"
      },
      {
        "name": "",
        "type": "string"
      },
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
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "gibTransport",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }


];



function anzeigenRouten(data,contract){

  console.log("Routen lesen... " + data );

  var anzahl = contract.uebergaben.length;

    t="0";
    console.log("Adresse: " + contract.address); 

    try {

      t="2";

      /*contract.gibRoutenAnzahl((error, value) => {
        if (error) { console.error(error); }
        data.anzahlRouten = value;
        anzahl = value;
      });
      console.log("step" + t);*/

      for (let index = 0; index < anzahl; index++) {

        var uebergabe =  contract.gibUebergabe (index);
        data.rtAbfahrt = uebergabe[0];
        data.rtAdresse = uebergabe[1];
        data.rtMenge = uebergabe[2];
        data.rtVon = uebergabe[3];
        data.rtSchaden = uebergabe[4];

/*
        public view returns (string memory dt, string memory ot, string memory mg,string memory ff,int  sd) {
          uebergabe memory eineUebergabe;
          eineUebergabe = uebergaben[index];
          return (eineUebergabe.datum, eineUebergabe.ort,eineUebergabe.menge,eineUebergabe.frachtfuehrer,eineUebergabe.schaden);
      }*/
        
      }
    }
  catch (error){
      console.log("Fehler bei der Route: " + i + "-" + error);
    }
}



/*************************************************
 * 
 * 
 * 0Versicherungsvertrag managen
 * 
 * 
 ***************************************************/
function sucheVersicherungsvertrag(data)  {

  console.log("Versicherungsvertrag suchen ..." + data.derVersicherungsvertragAdresse);

  //Anhang der Adresse den Kooperationsvertrag suchen
  var myContract = web3.eth.contract(versicherungsvertragABI);
  var contract = myContract.at(data.derVersicherungsvertragAdresse);
  data.derVersicherungsvertrag = contract;

  contract.id((error, value) => {
    if (error) { console.error("fehlerchen: " + error); }
    if (!error) {
      data.derVersicherungsvertragName = value;
    }
  });

  contract.gibTransportAnzahl((error, value) => {
    if (error) {console.error(error);}
    data.anzahlTransporte=value;
  });
  console.log("Versicherungsvertrag (noch nicht?) gefunden!");

}




/*************************************************
 * 
 * 
 * 1Transporte managen
 * 
 * 
 ***************************************************/
function sucheTransporte(data) {

  console.log("Transporte finden..." + data.derVersicherungsvertrag);

 

  try {

    //parameter übernehmen
    data.transport=new Array();
    anzahl=data.anzahlTransporte;
    

    for (let i = 0; i < anzahl; i++) {
         console.log(i + ". Transport von " + anzahl);

      //vertrag holen
      data.derVersicherungsvertrag.gibTransport(i,(error,value) => {
        if (error) {console.error("Fehler beim " + i + "Transport:" + error);}
        if (!error) {
  
          console.log("Transportadresse:" + value);
          var contractDesc = web3.eth.contract(transportABI);
          var contract = contractDesc.at(value); // "Cast"

          //Daten holen
          contract.gibDetails((error, value) => {
            if (error) {console.error("Fehler beim " + i + "Transport:" + error);}
            else {
    
              try {
                
                console.log("Details: " + value);  

                //liste aktualisieren
                data.transporte.push (
                    {id : value[0],
                    spedition : value[1],
                    absender : value[2],
                    von : value[3],
                    status : value[4],
                    warenwert : value[5],
                    adresse: contract.address}
                    );

              } catch (error) {

                console.log("Fehler bei Details: " + i);
              }
                          };
          });
        }
      });
    }

  }
  catch (error)
  {
    console.log("Fehler beim Lesen der Transporte : " + error);
  }

}



function anzeigenTransport(data){

  console.log("Transport anzeigen... " + data.tpAdresse );

    var anzahl=0;

    //web3 = new Web3(web3.currentProvider);
    //var contractDesc = web3.eth.contract(kooperationABI);
    //var contract = contractDesc.at(kooperationContractADR); // "Cast"

    var contractDesc = web3.eth.contract(transportABI);
    var contract = contractDesc.at(data.tpAdresse); 


    t="0";
    data.derTransport = contract;
    data.derTransportAdresse = contract.address;
    //data.tpAdresse = contract.address; 

    //kooperationContractADR;
    //data.Systeminfo= kooperationABI + "/" + kooperationContractADR + "/" + contractDesc.adresse + "/"+ contract.adresse;
    console.log("step:" + t );


    
    try {

      t="a";
      contract.spedition((error, value) => {
        if (error) { console.error(error); }
        data.tpSpedition = value;
      });
      console.log("step:" + t);

      t="b";
      contract.id((error, value) => {
        if (error) { console.error(error); }
        data.tpIdentifikation = value;
      });
      console.log("step:" + t);

      t="c";
      contract.warenwert((error, value) => {
        if (error) { console.error(error); }
        data.tpWarenwert = value;
      });
      console.log("step:" + t);

      t="1";
      contract.VonName((error, value) => {
        if (error) { console.error(error); }
        data.tpAbsenderName= value;
      });
      console.log("step:" + t);

      t="2";
      contract.VonDatum((error, value) => {
        if (error) { console.error(error); }
        data.tpAbsenderDatum = value;
      });
      console.log("step:" + t);


      t="3";
      contract.VonOrt((error, value) => {
        if (error) { console.error(error); }
        data.tpAbsenderOrt = value;
      });
      console.log("step:" + t);
 
      
      t="4";
      contract.AnName((error, value) => {
        if (error) { console.error(error); }
        data.tpAdressatName = value;
      });
      console.log("step:" + t);

      t="5";
      contract.AnDatum((error, value) => {
        if (error) { console.error(error); }
        data.tpAdressatDatum = value;
      });
      console.log("step:" + t);

      t="6";
      contract.AnOrt((error, value) => {
        if (error) { console.error(error); }
        data.tpAdressatOrt = value;
      });
      console.log("step:" + t);
 
      t="7";
      contract.menge((error, value) => {
        if (error) { console.error(error); }
        data.tpMenge = value.toString();
      });
      console.log("step:" + t);

      
      t="8";
      contract.einheit((error, value) => {
        if (error) { console.error(error); }
        data.tpEinheit = value;
      });
      console.log("step:" + t);

      t="9";
      contract.art((error, value) => {
        if (error) { console.error(error); }
        data.tpArt = value;
      });
      console.log("step" + t);

      t="20";
      contract.gibRoutenAnzahl((error, value) => {
        if (error) { console.error(error); }
        data.anzahlRouten = value;
      });
      console.log("step" + t);

      t="21";
      //anzeigenRouten(data,contract);
      var anzahlRouten = contract.uebergaben.length;
      for (let index = 0; index < anzahlRouten; index++) {

        var uebergabe =  contract.gibUebergabe (index);
        data.rtAbfahrt = uebergabe[0];
        data.rtAdresse = uebergabe[1];
        data.rtMenge = uebergabe[2];
        data.rtVon = uebergabe[3];
        data.rtSchaden = uebergabe[4];
        
      }


    } catch (error) {

      console.log("Fehler beim Transport lesen:" + error);


    }


    //
    // Konto und -stand des Masters ermitteln
    //

    console.log("Transprt gelesen bis Schritt : " + t );

}


function transportSpeichern(id) {

  console.log("transport speichern... " + id );

    const contractDesc = web3.eth.contract(transportABI);
    contractDesc.new(id, {
      data: transportbytecode,
      gas: 1000000
    }, function(error, contract) {
      console.log(contract)
    });

    console.log("transport gespeichert : " + contractDesc );

  }

  /*
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
}*/


function transportAnlegen (data) {

  console.log("bin beim transport anlegen: ");
  console.log(data);

  //Vorbedingungen prüfen
  var vorbedingungen=0;
  if (data.tpAbsender=="") {vorbedingungen=1}
  if (data.tpSpedition=="") {vorbedingungen=2}
  if  (data.tpVertrag==null) {vorbedingungen=3}
  if (vorbedingungen>0) {
    data.Systeminfo="Fehler " + vorbedingungen + " Transport anlegen";
    return;
  }

  else {

  //Werte initialisieren
  var eineNummer = Math.round(Math.random() * (3000 - 1)) + 1;
  var id = "T-" + eineNummer.toString();
  var einTag = Math.round(Math.random() * (24 - 1)) + 1;
  var einMonat = Math.round(Math.random() * (12 - 1)) + 1;
  var dasDatum = einTag+"."+einMonat+"."+dasJahr; 

  //Transport in die Liste schreiben
  data.transporte.push({
    spedition : data.tpSpedition,
    absender: data.tpAbsender,
    id : id ,
    warenwert: data.tpWarenwert,
    datum: data.tpDatum,
    ziel: data.tpZiel, 
    schaeden : 0,
    routen : new Array(),
    adresse: data.addr}); 

  data.anzahlTransporte=data.transporte.length; //data.versicherungsvertraege.length;
  data.derTransport = data.transporte[data.anzahlTransporte-1];
  console.log("Transport transient angelegt : " + data);

  transportSpeichern(eineNummer);

  //
  // und im Vertrag ergänzen 
  //
  var index = data.tpVertrag.transporte.length;
  data.tpVertrag.transporte[index] = data.derTransport;
  console.log("Transport in den Vertrag geschrieben : " + data); 
}





function transporteFinden(data){

  console.log("Transport zum Vertrag finden...: " );

  //vertrag suchen
  var control=0;
  var max=0;

  max = data.versicherungsvertraege.length;


  for (i = 0; i < max; i++) { 
    console.log("Vertrag suchen : " + data);
    if (data.TransporteFindenID==data.versicherungsvertraege[i].id) {

        data.derVersicherungsvertrag = data.versicherungsvertraege[i] ;
        data.Systeminfo="Vertrag gefunden";
        control=1;
        console.log("Vertrag gefunden: " + data);
    }
  }

  if (control==1){
  
    console.log("Transporte suchen...." + data.derVersicherungsvertrag.id);

    //transporte auslesen
    var max=data.derVersicherungsvertrag.transporte.length;
    if (max==0)
      data.Systeminfo="Vertrag ohne Transport gefunden";
    else
      data.Systeminfo="Vertrag mit " + max + " Transporten gefunden";

    var vertragstransport;
    data.transporte=new Array();
    for (i = 0; i < max; i++) { 
      vertragstransport = data.derVersicherungsvertrag.transporte[i];
      //console.log("Transport des Vertrags gefunden : " + vertragstransport.id);

      data.transporte.push({
        vertrag : vertragstransport.vertrag,
        spedition :  vertragstransport.spedition,
        absender : vertragstransport.absender,
        id : vertragstransport.id,
        warenwert : vertragstransport.warenwert,
        datum : vertragstransport.datum,
        ziel : vertragstransport.ziel,
        schaden : vertragstransport.schaden,
        adresse : " t"
      });
    }
    //console.log(max + " Transporte gefunden.");
    
  } else {
    data.transporte=new Array();
    //data.TransporteFindenADR = "vertrag existiert nicht"
    data.Systeminfo = "Vertrag existiert nicht";
  }


}


/*************************************************
 * 
 * 
 * 2Routen managen
 * 
 * 
 ***************************************************/
function aktualisiereTransportschaeden (data,id, schadenhoehe ) {

  //Transport suchen
  for (i = 0; i < data.transporte.length; i++) { 
    if (data.transporte[i].id == id) {
      var bisher  = data.transporte[i].schaeden;
      var neu = Number(bisher) + Number(schadenhoehe);
      //console.log("aktualisiere schäden:" + bisher + "+" + schadenhoehe + "=" + neu );
      data.transporte[i].schaeden=neu;
      

    }
  }
  

}



 
}

function sucheRouten (data) {

  console.log("Routen zum Transport finden...: " );

  //parameter initialisieren 
  var control=0;
  var max=0;

  //falls überhaupt keine transporte vorhanden - dann abbruch
  try {
    max = data.anzeigenRouten;
  } catch (error) {
    control =0;
    max=0;
    data.routen=new Array();
  }
 



  // die routen suchen
  if (control==0){
  
    console.log("Routen suchen...." + data.derTransportAdresse);

    //transporte auslesen
    var anzahl=data.anzahlRouten;
    if (anzahl==0) {
      data.Systeminfo="Transport ohne Routen gefunden";
      return;
    }
    else {
      data.Systeminfo="Transport mit " + anzahl + " Routen gefunden";
    }

    var transportroute;
    data.routen=new Array();
    for (i = 0; i < anzahl; i++) { 
      
      data.derTransport.gibUebergabe(i,(error, value) => {
        if (error) { console.error(error); }
        if (!error) {

          //return (eineUebergabe.datum, eineUebergabe.ort,eineUebergabe.menge,eineUebergabe.frachtfuehrer,eineUebergabe.schaden);
          var index = data.routen.length;
          transportroute = value;
          data.routen.push({
            nr : index+1,
            datum : value[0],
            ort : value[1],
            menge : value[2],
            frachtfuehrer : value[3],
            schaden : value[4],
            adresse : transportroute.adresse
        
          });
        }

      });


      console.log("Transportroute eingefügt : " + data.routen);

    }
    //console.log(max + " Transporte gefunden.");
    
  } else {
    data.routen=new Array();
    //data.TransporteFindenADR = "vertrag existiert nicht"
    data.Systeminfo = "Transport existiert nicht";
  }


  

 
}



function routeAnlegen (data) {

  console.log("bin beim route anlegen... ");
  console.log(data);


  //Werte initialisieren
  var eineNummer = Math.round(Math.random() * (3000 - 1)) + 1;
  var nr = "T-" + eineNummer.toString();
  var index ;
  var max;

  try {
    index = data.routen.length;
    
  } catch (error) {
    index = 0;
  }

  //route in die Liste schreiben
  console.log("route in liste aufnehmen... ");
  data.routen.push({
    id : nr,
    transport: data.rtTransport,
    von: data.rtVon,
    nach: data.rtNach,
    abfahrt: data.rtAbfahrt ,
    ankunft: data.rtAnkunft,
    schaden : data.rtSchaden,
    adresse : nr + "0xd1d74Bb6F22BE771600A7D7890fa99365738f822"
    })
  
  //route in den Transport schreiben
  console.log("route in transport  aufnehmen... ");
  try {
    max = data.rtTransport.routen.length;
    data.rttransport.routen[max]=data.routen[index]; 
    data.Systeminfo="in routen des transports eingefügt!" 
  } catch (error) {
    data.rtTransport.routen = new Array(data.routen[index]);
    //data.rttransport.routen[0]=;
    data.Systeminfo="routen des transports erzeugt und eingefügt!" 
  }
 

  console.log("route angelegt: " + data.routen);    

  //var schadenhoehe = data.rtSchaden;
  //aktualisiereTransportschaeden(data,data.rttransport,data.rtSchaden);
  //data.derTransport.schaeden="iii",

}



/*************************************************
 * 
 * 
 * 5Testdaten managen
 * 
 * 
 ***************************************************/
function ErzeugeTestdaten (data) {

  
  data.dieVersicherung="ruv";
  data.derVersicherungsvertrag="K19";
  data.dieSpedition="sturm gmbh";  


  //transport erstellen
  data.tpSpedition=data.vvVersicherungsnehmer;
  data.tpAbsender=data.absender[index];
  data.tpIdentifikation = "T" + index +"-" + index *67432;
  data.tpWarenwert= index * 1000 + "Euro";
  data.tpZiel = data.staedte[10-index];
  transportAnlegen (data);
  console.log ("Transport 1 angelegt : " + data);

  //transport erstellen
  data.tpSpedition=data.vvVersicherungsnehmer;
  data.tpAbsender=data.absender[index+1];
  data.tpIdentifikation = "T" + index +"-" + index * 5689;
  data.tpWarenwert= index * 5000 + "Euro";
  data.tpZiel = data.staedte[9-index];
  transportAnlegen (data);
  console.log ("Transport 2 angelegt : " + data);

  //routen erstellen
  data.rttransport = data.tpIdentifikation;
  var einTag = Math.round(Math.random() * (24 - 1)) + 1;
  var einMonat = Math.round(Math.random() * (12 - 1)) + 1;
  maxRouten  = Math.round(Math.random() * (5 - 1)) + 1;


  for (i=1;i<maxRouten;i++) {
    console.log ("Route : " + i + "/" + maxRouten  );

    j = i+1;
    k = i+2;
    data.rtVon = data.staedte[i];
    data.rtNach = data.staedte[j];
    data.rtAbfahrt = einTag + i + "." + einMonat + "." + dasJahr ;
    data.rtAnkunft = einTag + i + "." + einMonat + "." + dasJahr ;
    data.rtAdresse = data.staedte[k];

    
    
    if (i >= 4)
      schaden =  Math.round(Math.random() * (5 - 0)) + 0;

    else
      schaden = 0;


    data.rtSchaden = schaden;
    routeAnlegen (data);
    console.log ("Route angelegt : " + i + " " + data);

  } 
  

}

function InitDaten(data){

  /*
  /** Speditionen anlegen
   * 
   */
  data.speditionen[0]="Trucker frank",
  data.speditionen[1]="Trucker thomas",
  data.speditionen[2]="Trucker mischok",
  data.speditionen[3]="Frachtzentrum Linksaußen KG",
  data.speditionen[4]="Frachtzentrum Rechtsaußen KG",
  data.speditionen[5]="Frachtzentrum Mittelstürmer KG",
  data.speditionen[6]="LKW-Verleih Rechtsverteidiger ltm.",
  data.speditionen[7]="LKW-Verleih Linksverteidiger Lmt.",
  data.speditionen[8]="LKW-Verleih Libero KG",
  data.speditionen[9]="LKW-Verleih Torwart KG"
  
  data.absender[0]="Florian Mülller",
  data.absender[1]="Stefan Bell",
  data.absender[2]="Daniel Brosinski",
  data.absender[3]="Alexander Hack",
  data.absender[4]="M Kunde",
  data.absender[5]="Riedle Baku",
  data.absender[6]="Daniel Latza",
  data.absender[7]="Karim Osinowo",
  data.absender[8]="Mateta",
  data.absender[9]="Antony Ujah",

  data.staedte[0]="Kiel",
  data.staedte[1]="ST. Pauli",
  data.staedte[2]="Wolfsburg",
  data.staedte[3]="Hannover",
  data.staedte[4]="Dortmund",
  data.staedte[5]="Mainz",
  data.staedte[6]="Hoffenheim",
  data.staedte[7]="München",
  data.staedte[8]="Wien",
  data.staedte[9]="Mailand"



  console.log("3KD - Transporte erfolgreich")



  /*
  * Routen anlegen
  */
  derTag = "9.";
  derMonat ="10.";
  dasDatum = derTag+derMonat+dasJahr;
  data.derTransport.routen=new Array();
  data.derTransport.routen[0]=data.routen[0];

  data.routen.push (
      {
      id : "R0-8ABEDAA8990" ,  
      transport: data.derTransport,
      //von: data.staedte[1],
      //nach: data.staedte[2],
      von : "Bremen",
      nach : "Göttingen",
      abfahrt: "9.10.2018" ,
      ankunft: "10.10.2018" ,
      schaden : 0,
      adresse : "0x6d8C98f8eb01F8f7ee55D25Bf01e30Fa64333940",
      }
  )


  data.routen.push (
    {
    id : "R1-8EAHGRAAA8990" ,  
    transport: data.derTransport,
    von : "Göttingen",
    nach : "Fulda",
    abfahrt: "10.10.2018" ,
    ankunft: "12.10.2018" ,
    schaden : 0,
    adresse : "0x6d8C98f8eb01F8f7ee55D25Bf01e30Fa64333940",
    }
  )
  data.derTransport.routen[1]=data.routen[1];
  data.routen.push (
      {
      id : "R2-235TZEAAWSE" ,  
      transport: data.derTransport,
      von : "Fulda",
      nach : "Limburg",
      abfahrt: "14.10.2018",
      ankunft: "15.10.2018",
      schaden : 1,
      adresse : "0x6d8C98f8eb01F8f7ee55D25Bf01e30Fa64333940",
      }
  )

  data.derTransport.routen[2]=data.routen[2];
//counter erhöhen
data.anzahlRouten=data.routen.length; 
data.dieRoute=data.routen[1];
console.log("4KD - Routen erfolgreich")


console.log("Konfigurationsdaten erzeugt");
}


function InitTestparameter(data) {


  console.log("Parameter erzeugen");
  var step=0;
  var max;
  max=1000000;
  i = Math.round(Math.random() * (max - 1)) + 1;
 
  try {

    /*
      max=20000; 
      i = Math.round(Math.random() * (max - 1)) + 1;
      data.dieSpedition=data.versicherungsnehmer[i];*/
      data.dieSpedition="sturm gmbh";
    
      /*
      /* parameter für transporte vorbelegen
      */
      step=1;
      max = data.speditionen.length-1;
      i = Math.round(Math.random() * (max - 1)) + 1;
      data.tpSpedition=data.speditionen[i];
      
      max =data.absender.length;
      i = Math.round(Math.random() * (max - 1)) + 1;
      data.tpAbsender=data.absender[i];

      max = data.staedte.length;
      i = Math.round(Math.random() * (max - 1)) + 1;
      data.tpZiel = data.staedte[10-i];
      
      data.tpWarenwert= i * 1000 + " Euro";

      i = Math.round(Math.random() * (30 - 1)) + 1;
      data.tpDatum = i + ".6.2018";
      

      //routen parameter
      step=2;
      max = data.transporte.length-1;
      i = Math.round(Math.random() * (max - 1)) + 1;
      data.rtTransport=data.transporte[i];

      max = data.staedte.length;
      i = Math.round(Math.random() * (max - 1)) + 1;
      data.rtVon = data.staedte[i];
      max = data.staedte.length;
      i = Math.round(Math.random() * (max - 1)) + 1;
      data.rtNach = data.staedte[i];
      i = Math.round(Math.random() * (22 - 1)) + 1;
      data.rtAbfahrt = i + ".9.2018";
      i=i+3;
      data.rtAnkunft = i + ".9.2018";
      max = data.staedte.length-1;
      i = Math.round(Math.random() * (max - 1)) + 1;
      data.rtVon = data.staedte[i];
      i = Math.round(Math.random() * (max - 1)) + 1;
      data.rtNach = data.staedte[i];

      i = Math.round(Math.random() * (3 - 1)) + 1;
      data.rtSchaden =  i;

      /*if (i == 3)
        schaden ="ja";
      else
        schaden = "nein";*/

      console.log("Parameter vorbelegen erfolgreich." + step);
  

    
  } catch (error) {

    console.log("Parameter vorbelegen mit Fehler: " + error);


  }
 

  
  console.log("Parameter erzeugen abgeschlossen: " + data);
}

function InitTransaktion (data) {

  data.trInfo1="Gaslimit: " + fgDefaultGaslimit;
  data.trInfo2="Gasprice: " + fgDefaultGasprice;
  data.trInfo3="Gas: " + fgDefaultGas;
  data.trInfo4="Manager: " + bcManager;


}



/*************************************************
 * 
 * 
 * Startseite aufrufen
 * 
 * 
 ***************************************************/
function initVue() {
  const data = {

    /* Listen */
    
    versicherungsvertraege: [],
    anzahlVertraege: "0",

    speditionen: [],
    anzahlSpeditionen: "0",

    transporte: [],
    anzahlTransporte: "0",

    routen: [],
    anzahlRouten: "0",

    absender: [],
    anzahlAbsender: "0",

    staedte: [],


    // system
    
    trInfo1 :"", 
    trInfo2 :"", 
    trInfo3 :"", 
    trInfo4 :"",

    
    RoutenFindenID: "transport-id",

    /* Objekte */
    spName : "name",

    tpAbsenderName : "wer",
    tpAbsenderDatum : "wann",
    tpAbsenderOrt : "wohin",

    tpAdressatName : "an",
    tpAdressatDatum : "am",
    tpAdressatOrt : "nach",

    tpSpedition : "spedition",
    tpWarenwert: "warenwert",
    tpMenge: "menge",
    tpEinheit : "einheit",
    tpArt : "was",
    tpIdentifikation: "id",
    tpAdresse : "adresse",

    tpSchaeden : "0",
    
    
    rtTransport : "",
    rtVon : "",
    rtNach : "",
    rtAbfahrt : "",
    rtAnkunft : "",
    rtSchaden : "",
    rtAdresse : "",
   

    /** aktuelle Objekte */
    dieKooperation : "",
    dieKooperationName : "",
    dieKooperationAdresse : "",
    dieVersicherung : "",
    derVersicherungsvertrag : "",
    derVersicherungsvertragAdresse : "",
    derVersicherungsvertragName : "",
    derTransport : "",
    derTransportAdresse : "",
    dieRoute : "",
    
    /* sonstiges */
    zufallszahl : 1,
    Systeminfo : "",

  };
  new Vue({
    el: '#app',
    data: data,
    methods: {


      TransportAuswaehlen(adresse) {
        data.tpAdresse=adresse;
        anzeigenTransport(data);
      },

      TransportAnzeigen() {
        anzeigenTransport(data,1);
      },

      TransportAendern() {
        anzeigenTransport(data);
      },

      TransportAnlegen() {
        transportAnlegen(data);
      },

      TransporteFinden() {
        sucheTransporte(data);
      },
      RouteAendern(){
        //routeAnlegen(data);

      }, 
      RouteAnlegen(){
        routeAnlegen(data);

      },
      RoutenSuchen() {
        sucheRouten(data);
      },

      RoutenAnzeigen() {
        sucheRouten(data);
      },

      RouteAuswaehlen(auswahl) {
        var nr=1000;
        nr = auswahl;
        data.rtVon = data.routen[nr].ort;
        data.rtNach = data.routen[nr].ort;

        //sucheRouten(data);
      },
      TestparameterErzeugen() {
        InitTestparameter(data);
      },

      TestdatenErzeugen() {
        ErzeugeTestdaten(data);
      }

    }
  });


  data.dieKooperationAdresse=kooperationContractADR;
  data.dieKooperationName=kooperationName;
  data.derVersicherungsvertragAdresse=versicherungsvertragContractADR;
  data.derVersicherungsvertragName=versicherungsvertragName;
  sucheVersicherungsvertrag(data);
  //InitTransaktion(data);
  //InitDaten(data);
  
  data.TransporteFindenID="0xec7d0207ff89e6dc741231a49c5bf20c02ca8d4b";
  console.log("Initialisierung abgeschlossen");
  

}