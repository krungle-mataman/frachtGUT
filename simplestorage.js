const bcManager = "0x6b1010876dd0d4b74510350f82d687474FC186b1";


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
      "constant": true,
      "inputs": [],
      "name": "ermittleSchadenshoehe",
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
      "constant": false,
      "inputs": [],
      "name": "starteVertrag",
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
  
  
  const kooperationABI = [
  
    {
        "constant": true,
        "inputs": [],
        "name": "name",
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
        "name": "beschreibung",
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
        "name": "versicherungen",
        "outputs": [
          {
            "name": "nr",
            "type": "uint256"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "branche",
            "type": "string"
          },
          {
            "name": "kategorie",
            "type": "string"
          },
          {
            "name": "tarife",
            "type": "string"
          },
          {
            "name": "saldo",
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
        "name": "details",
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
        "name": "speditionen",
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
        "name": "nr",
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
        "inputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "versicherungsvertraege",
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
        "inputs": [
          {
            "name": "p",
            "type": "uint256"
          },
          {
            "name": "n",
            "type": "string"
          },
          {
            "name": "d",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "adr",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "nr",
            "type": "uint256"
          }
        ],
        "name": "KooperationErstellt",
        "type": "event"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "gibName",
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
        "name": "gibNr",
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
        "name": "gibDetails",
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
        "name": "gibBeschreibung",
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
        "name": "gibSpeditionAnzahl",
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
        "name": "gibVersicherungAnzahl",
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
        "name": "gibVersicherungsvertragAnzahl",
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
        "inputs": [
          {
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "gibVersicherungsvertrag",
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
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "gibSpedition",
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
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "gibVersicherungID",
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
        "inputs": [
          {
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "gibVersicherungName",
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
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "gibVersicherungDetails",
        "outputs": [
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
        "name": "aendereName",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
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
        "name": "aendereBeschreibung",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
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
        "name": "aendereDetails",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "n",
            "type": "string"
          },
          {
            "name": "d",
            "type": "string"
          },
          {
            "name": "b",
            "type": "string"
          }
        ],
        "name": "aendereKooperation",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "n",
            "type": "string"
          },
          {
            "name": "t",
            "type": "string"
          }
        ],
        "name": "ergaenzeVersicherung",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "n",
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
            "name": "vv",
            "type": "address"
          }
        ],
        "name": "ergaenzeVersicherungsvertrag",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }
   
  ];

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
  


function init () {

/*
var simplestorageContract = web3.eth.contract([{"constant":false,"inputs":[],"name":"getValue","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"value","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);

var simplestorage = simplestorageContract.new(

   {

     from: '0x80044B4c0f8726aB66bBfc76c0f8af273Ead7D41',

     data: '0x608060405234801561001057600080fd5b5060f58061001f6000396000f3fe6080604052600436106053576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063209652551460585780633fa4f245146080578063ee3711be1460a8575b600080fd5b348015606357600080fd5b50606a60b0565b6040518082815260200191505060405180910390f35b348015608b57600080fd5b50609260b9565b6040518082815260200191505060405180910390f35b60ae60bf565b005b60008054905090565b60005481565b600160008190555056fea165627a7a72305820a438414a3d7a50877e400e2b9d142dd0d4e2cc0a91b0e26b2542caf11c6c602e0029',

     gas: '4700000'

   }, function (e, contract){

    console.log(e, contract);

    if (typeof contract.address !== 'undefined') {

         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);

         return contract.address;

    }

})*/

var kpContract = web3.eth.contract(kooperationABI);
var kooperation = kpContract.new(

    {
 
      from: bcManager ,
 
      data: '0x60806040526010600455600454600a0a6005553480156200001f57600080fd5b506040516200251e3803806200251e833981018060405260608110156200004557600080fd5b810190808051906020019092919080516401000000008111156200006857600080fd5b828101905060208101848111156200007f57600080fd5b81518560018202830111640100000000821117156200009d57600080fd5b50509291906020018051640100000000811115620000ba57600080fd5b82810190506020810184811115620000d157600080fd5b8151856001820283011164010000000082111715620000ef57600080fd5b50509291905050508260008190555081600190805190602001906200011692919062000162565b5080600290805190602001906200012f92919062000162565b506020604051908101604052806000815250600390805190602001906200015892919062000162565b5050505062000211565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620001a557805160ff1916838001178555620001d6565b82800160010185558215620001d6579182015b82811115620001d5578251825591602001919060010190620001b8565b5b509050620001e59190620001e9565b5090565b6200020e91905b808211156200020a576000816000905550600101620001f0565b5090565b90565b6122fd80620002216000396000f3fe608060405260043610610154576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146101595780631d817c48146101e95780632e2365b7146102625780633cba2359146102f25780634243e952146104f857806342ad8fb5146105c05780634ad8ea671461074c57806350cae68d146107775780635534c4701461082b578063565974d3146108df5780637400fe621461096f57806377e809b11461099a5780637cc5114714610a2a57806380e9394014610a7b57806389a91adc14610b2f578063a7216eb014610bbf578063a8c7739614610c0e578063adee43e714610c39578063b7b01d6d14610dac578063c7a477b714610dd7578063cc41cb1714610e67578063cd94398814611050578063dde7fbba1461107b578063ea3d6820146110f6578063ebb381be146111be578063ebe91bce14611237575b600080fd5b34801561016557600080fd5b5061016e6112b2565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101ae578082015181840152602081019050610193565b50505050905090810190601f1680156101db5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610260600480360360208110156101ff57600080fd5b810190808035906020019064010000000081111561021c57600080fd5b82018360208201111561022e57600080fd5b8035906020019184600183028401116401000000008311171561025057600080fd5b9091929391929390505050611350565b005b34801561026e57600080fd5b50610277611366565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102b757808201518184015260208101905061029c565b50505050905090810190601f1680156102e45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102fe57600080fd5b5061032b6004803603602081101561031557600080fd5b8101908080359060200190929190505050611404565b604051808781526020018060200180602001806020018060200186815260200185810385528a818151815260200191508051906020019080838360005b83811015610383578082015181840152602081019050610368565b50505050905090810190601f1680156103b05780820380516001836020036101000a031916815260200191505b50858103845289818151815260200191508051906020019080838360005b838110156103e95780820151818401526020810190506103ce565b50505050905090810190601f1680156104165780820380516001836020036101000a031916815260200191505b50858103835288818151815260200191508051906020019080838360005b8381101561044f578082015181840152602081019050610434565b50505050905090810190601f16801561047c5780820380516001836020036101000a031916815260200191505b50858103825287818151815260200191508051906020019080838360005b838110156104b557808201518184015260208101905061049a565b50505050905090810190601f1680156104e25780820380516001836020036101000a031916815260200191505b509a505050505050505050505060405180910390f35b34801561050457600080fd5b506105be6004803603602081101561051b57600080fd5b810190808035906020019064010000000081111561053857600080fd5b82018360208201111561054a57600080fd5b8035906020019184600183028401116401000000008311171561056c57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506116af565b005b3480156105cc57600080fd5b506105f9600480360360208110156105e357600080fd5b81019080803590602001909291905050506116f1565b60405180806020018060200180602001848103845287818151815260200191508051906020019080838360005b83811015610641578082015181840152602081019050610626565b50505050905090810190601f16801561066e5780820380516001836020036101000a031916815260200191505b50848103835286818151815260200191508051906020019080838360005b838110156106a757808201518184015260208101905061068c565b50505050905090810190601f1680156106d45780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b8381101561070d5780820151818401526020810190506106f2565b50505050905090810190601f16801561073a5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b34801561075857600080fd5b50610761611937565b6040518082815260200191505060405180910390f35b34801561078357600080fd5b506107b06004803603602081101561079a57600080fd5b8101908080359060200190929190505050611940565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156107f05780820151818401526020810190506107d5565b50505050905090810190601f16801561081d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561083757600080fd5b506108646004803603602081101561084e57600080fd5b81019080803590602001909291905050506119fb565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156108a4578082015181840152602081019050610889565b50505050905090810190601f1680156108d15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156108eb57600080fd5b506108f4611abd565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610934578082015181840152602081019050610919565b50505050905090810190601f1680156109615780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561097b57600080fd5b50610984611b5b565b6040518082815260200191505060405180910390f35b3480156109a657600080fd5b506109af611b68565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156109ef5780820151818401526020810190506109d4565b50505050905090810190601f168015610a1c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b348015610a3657600080fd5b50610a7960048036036020811015610a4d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611c0a565b005b348015610a8757600080fd5b50610ab460048036036020811015610a9e57600080fd5b8101908080359060200190929190505050611c73565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610af4578082015181840152602081019050610ad9565b50505050905090810190601f168015610b215780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b348015610b3b57600080fd5b50610b44611d2e565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610b84578082015181840152602081019050610b69565b50505050905090810190601f168015610bb15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b348015610bcb57600080fd5b50610bf860048036036020811015610be257600080fd5b8101908080359060200190929190505050611dd0565b6040518082815260200191505060405180910390f35b348015610c1a57600080fd5b50610c23611dfa565b6040518082815260200191505060405180910390f35b348015610c4557600080fd5b50610d9660048036036040811015610c5c57600080fd5b8101908080359060200190640100000000811115610c7957600080fd5b820183602082011115610c8b57600080fd5b80359060200191846001830284011164010000000083111715610cad57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610d1057600080fd5b820183602082011115610d2257600080fd5b80359060200191846001830284011164010000000083111715610d4457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611e07565b6040518082815260200191505060405180910390f35b348015610db857600080fd5b50610dc1611f6f565b6040518082815260200191505060405180910390f35b348015610de357600080fd5b50610dec611f75565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610e2c578082015181840152602081019050610e11565b50505050905090810190601f168015610e595780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61104e60048036036060811015610e7d57600080fd5b8101908080359060200190640100000000811115610e9a57600080fd5b820183602082011115610eac57600080fd5b80359060200191846001830284011164010000000083111715610ece57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610f3157600080fd5b820183602082011115610f4357600080fd5b80359060200191846001830284011164010000000083111715610f6557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610fc857600080fd5b820183602082011115610fda57600080fd5b80359060200191846001830284011164010000000083111715610ffc57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050612017565b005b34801561105c57600080fd5b50611065612061565b6040518082815260200191505060405180910390f35b34801561108757600080fd5b506110b46004803603602081101561109e57600080fd5b810190808035906020019092919050505061206e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561110257600080fd5b506111bc6004803603602081101561111957600080fd5b810190808035906020019064010000000081111561113657600080fd5b82018360208201111561114857600080fd5b8035906020019184600183028401116401000000008311171561116a57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506120ac565b005b611235600480360360208110156111d457600080fd5b81019080803590602001906401000000008111156111f157600080fd5b82018360208201111561120357600080fd5b8035906020019184600183028401116401000000008311171561122557600080fd5b90919293919293905050506120c6565b005b34801561124357600080fd5b506112706004803603602081101561125a57600080fd5b81019080803590602001909291905050506120dc565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156113485780601f1061131d57610100808354040283529160200191611348565b820191906000526020600020905b81548152906001019060200180831161132b57829003601f168201915b505050505081565b81816001919061136192919061212c565b505050565b60038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156113fc5780601f106113d1576101008083540402835291602001916113fc565b820191906000526020600020905b8154815290600101906020018083116113df57829003601f168201915b505050505081565b60068181548110151561141357fe5b9060005260206000209060060201600091509050806000015490806001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114c55780601f1061149a576101008083540402835291602001916114c5565b820191906000526020600020905b8154815290600101906020018083116114a857829003601f168201915b505050505090806002018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156115635780601f1061153857610100808354040283529160200191611563565b820191906000526020600020905b81548152906001019060200180831161154657829003601f168201915b505050505090806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156116015780601f106115d657610100808354040283529160200191611601565b820191906000526020600020905b8154815290600101906020018083116115e457829003601f168201915b505050505090806004018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561169f5780601f106116745761010080835404028352916020019161169f565b820191906000526020600020905b81548152906001019060200180831161168257829003601f168201915b5050505050908060050154905086565b60078190806001815401808255809150509060018203906000526020600020016000909192909190915090805190602001906116ec9291906121ac565b505050565b606080606060068481548110151561170557fe5b906000526020600020906006020160010160068581548110151561172557fe5b906000526020600020906006020160040160068681548110151561174557fe5b9060005260206000209060060201600301828054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156117eb5780601f106117c0576101008083540402835291602001916117eb565b820191906000526020600020905b8154815290600101906020018083116117ce57829003601f168201915b50505050509250818054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156118875780601f1061185c57610100808354040283529160200191611887565b820191906000526020600020905b81548152906001019060200180831161186a57829003601f168201915b50505050509150808054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156119235780601f106118f857610100808354040283529160200191611923565b820191906000526020600020905b81548152906001019060200180831161190657829003601f168201915b505050505090509250925092509193909250565b60008054905090565b606060078281548110151561195157fe5b906000526020600020018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156119ef5780601f106119c4576101008083540402835291602001916119ef565b820191906000526020600020905b8154815290600101906020018083116119d257829003601f168201915b50505050509050919050565b6060600682815481101515611a0c57fe5b90600052602060002090600602016001018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611ab15780601f10611a8657610100808354040283529160200191611ab1565b820191906000526020600020905b815481529060010190602001808311611a9457829003601f168201915b50505050509050919050565b60028054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611b535780601f10611b2857610100808354040283529160200191611b53565b820191906000526020600020905b815481529060010190602001808311611b3657829003601f168201915b505050505081565b6000600780549050905090565b606060018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611c005780601f10611bd557610100808354040283529160200191611c00565b820191906000526020600020905b815481529060010190602001808311611be357829003601f168201915b5050505050905090565b60088190806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b600781815481101515611c8257fe5b906000526020600020016000915090508054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611d265780601f10611cfb57610100808354040283529160200191611d26565b820191906000526020600020905b815481529060010190602001808311611d0957829003601f168201915b505050505081565b606060038054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611dc65780601f10611d9b57610100808354040283529160200191611dc6565b820191906000526020600020905b815481529060010190602001808311611da957829003601f168201915b5050505050905090565b6000600682815481101515611de157fe5b9060005260206000209060060201600001549050919050565b6000600680549050905090565b600080611e1261211f565b9050600660c0604051908101604052808381526020018681526020016040805190810160405280600c81526020017f566572736963686572756e67000000000000000000000000000000000000000081525081526020016040805190810160405280600181526020017f41000000000000000000000000000000000000000000000000000000000000008152508152602001858152602001600081525090806001815401808255809150509060018203906000526020600020906006020160009091929091909150600082015181600001556020820151816001019080519060200190611f0092919061222c565b506040820151816002019080519060200190611f1d92919061222c565b506060820151816003019080519060200190611f3a92919061222c565b506080820151816004019080519060200190611f5792919061222c565b5060a082015181600501555050508091505092915050565b60005481565b606060028054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561200d5780601f10611fe25761010080835404028352916020019161200d565b820191906000526020600020905b815481529060010190602001808311611ff057829003601f168201915b5050505050905090565b826001908051906020019061202d9291906121ac565b5081600290805190602001906120449291906121ac565b50806003908051906020019061205b9291906121ac565b50505050565b6000600880549050905090565b60088181548110151561207d57fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b80600290805190602001906120c29291906121ac565b5050565b8181600391906120d792919061212c565b505050565b60006008828154811015156120ed57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000804390508091505090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061216d57803560ff191683800117855561219b565b8280016001018555821561219b579182015b8281111561219a57823582559160200191906001019061217f565b5b5090506121a891906122ac565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106121ed57805160ff191683800117855561221b565b8280016001018555821561221b579182015b8281111561221a5782518255916020019190600101906121ff565b5b50905061222891906122ac565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061226d57805160ff191683800117855561229b565b8280016001018555821561229b579182015b8281111561229a57825182559160200191906001019061227f565b5b5090506122a891906122ac565b5090565b6122ce91905b808211156122ca5760008160009055506001016122b2565b5090565b9056fea165627a7a723058201b6409cb4331db7dafd71ba877c722c77455b54e15609f7924afeb764eb7ff3a0029',
 
      gas: '4700000'
 
    }, function (e, contract){
 
     console.log(e, contract);
 
     if (typeof contract.address !== 'undefined') {
 
          console.log('Kooperationsvertrag erstellt! : ' + contract.address + ' transactionHash: ' + contract.transactionHash);
 

     }
 
 })

 //  let k = await deployer.deploy(Kooperation, 0,"genossenschaft1","new market place");
 p1=0;
 p2="Kooperation1";
 p3="details1";
 p4="beschreibung1";
 var kpContract1 = web3.eth.contract(kooperationABI);
var kooperation1 = kpContract1.new(p1,p2,p3,

    {
 
      from: bcManager ,
 
      data: '0x60806040526010600455600454600a0a6005553480156200001f57600080fd5b506040516200251e3803806200251e833981018060405260608110156200004557600080fd5b810190808051906020019092919080516401000000008111156200006857600080fd5b828101905060208101848111156200007f57600080fd5b81518560018202830111640100000000821117156200009d57600080fd5b50509291906020018051640100000000811115620000ba57600080fd5b82810190506020810184811115620000d157600080fd5b8151856001820283011164010000000082111715620000ef57600080fd5b50509291905050508260008190555081600190805190602001906200011692919062000162565b5080600290805190602001906200012f92919062000162565b506020604051908101604052806000815250600390805190602001906200015892919062000162565b5050505062000211565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620001a557805160ff1916838001178555620001d6565b82800160010185558215620001d6579182015b82811115620001d5578251825591602001919060010190620001b8565b5b509050620001e59190620001e9565b5090565b6200020e91905b808211156200020a576000816000905550600101620001f0565b5090565b90565b6122fd80620002216000396000f3fe608060405260043610610154576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146101595780631d817c48146101e95780632e2365b7146102625780633cba2359146102f25780634243e952146104f857806342ad8fb5146105c05780634ad8ea671461074c57806350cae68d146107775780635534c4701461082b578063565974d3146108df5780637400fe621461096f57806377e809b11461099a5780637cc5114714610a2a57806380e9394014610a7b57806389a91adc14610b2f578063a7216eb014610bbf578063a8c7739614610c0e578063adee43e714610c39578063b7b01d6d14610dac578063c7a477b714610dd7578063cc41cb1714610e67578063cd94398814611050578063dde7fbba1461107b578063ea3d6820146110f6578063ebb381be146111be578063ebe91bce14611237575b600080fd5b34801561016557600080fd5b5061016e6112b2565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101ae578082015181840152602081019050610193565b50505050905090810190601f1680156101db5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610260600480360360208110156101ff57600080fd5b810190808035906020019064010000000081111561021c57600080fd5b82018360208201111561022e57600080fd5b8035906020019184600183028401116401000000008311171561025057600080fd5b9091929391929390505050611350565b005b34801561026e57600080fd5b50610277611366565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102b757808201518184015260208101905061029c565b50505050905090810190601f1680156102e45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102fe57600080fd5b5061032b6004803603602081101561031557600080fd5b8101908080359060200190929190505050611404565b604051808781526020018060200180602001806020018060200186815260200185810385528a818151815260200191508051906020019080838360005b83811015610383578082015181840152602081019050610368565b50505050905090810190601f1680156103b05780820380516001836020036101000a031916815260200191505b50858103845289818151815260200191508051906020019080838360005b838110156103e95780820151818401526020810190506103ce565b50505050905090810190601f1680156104165780820380516001836020036101000a031916815260200191505b50858103835288818151815260200191508051906020019080838360005b8381101561044f578082015181840152602081019050610434565b50505050905090810190601f16801561047c5780820380516001836020036101000a031916815260200191505b50858103825287818151815260200191508051906020019080838360005b838110156104b557808201518184015260208101905061049a565b50505050905090810190601f1680156104e25780820380516001836020036101000a031916815260200191505b509a505050505050505050505060405180910390f35b34801561050457600080fd5b506105be6004803603602081101561051b57600080fd5b810190808035906020019064010000000081111561053857600080fd5b82018360208201111561054a57600080fd5b8035906020019184600183028401116401000000008311171561056c57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506116af565b005b3480156105cc57600080fd5b506105f9600480360360208110156105e357600080fd5b81019080803590602001909291905050506116f1565b60405180806020018060200180602001848103845287818151815260200191508051906020019080838360005b83811015610641578082015181840152602081019050610626565b50505050905090810190601f16801561066e5780820380516001836020036101000a031916815260200191505b50848103835286818151815260200191508051906020019080838360005b838110156106a757808201518184015260208101905061068c565b50505050905090810190601f1680156106d45780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b8381101561070d5780820151818401526020810190506106f2565b50505050905090810190601f16801561073a5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b34801561075857600080fd5b50610761611937565b6040518082815260200191505060405180910390f35b34801561078357600080fd5b506107b06004803603602081101561079a57600080fd5b8101908080359060200190929190505050611940565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156107f05780820151818401526020810190506107d5565b50505050905090810190601f16801561081d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561083757600080fd5b506108646004803603602081101561084e57600080fd5b81019080803590602001909291905050506119fb565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156108a4578082015181840152602081019050610889565b50505050905090810190601f1680156108d15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156108eb57600080fd5b506108f4611abd565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610934578082015181840152602081019050610919565b50505050905090810190601f1680156109615780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561097b57600080fd5b50610984611b5b565b6040518082815260200191505060405180910390f35b3480156109a657600080fd5b506109af611b68565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156109ef5780820151818401526020810190506109d4565b50505050905090810190601f168015610a1c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b348015610a3657600080fd5b50610a7960048036036020811015610a4d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611c0a565b005b348015610a8757600080fd5b50610ab460048036036020811015610a9e57600080fd5b8101908080359060200190929190505050611c73565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610af4578082015181840152602081019050610ad9565b50505050905090810190601f168015610b215780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b348015610b3b57600080fd5b50610b44611d2e565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610b84578082015181840152602081019050610b69565b50505050905090810190601f168015610bb15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b348015610bcb57600080fd5b50610bf860048036036020811015610be257600080fd5b8101908080359060200190929190505050611dd0565b6040518082815260200191505060405180910390f35b348015610c1a57600080fd5b50610c23611dfa565b6040518082815260200191505060405180910390f35b348015610c4557600080fd5b50610d9660048036036040811015610c5c57600080fd5b8101908080359060200190640100000000811115610c7957600080fd5b820183602082011115610c8b57600080fd5b80359060200191846001830284011164010000000083111715610cad57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610d1057600080fd5b820183602082011115610d2257600080fd5b80359060200191846001830284011164010000000083111715610d4457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611e07565b6040518082815260200191505060405180910390f35b348015610db857600080fd5b50610dc1611f6f565b6040518082815260200191505060405180910390f35b348015610de357600080fd5b50610dec611f75565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610e2c578082015181840152602081019050610e11565b50505050905090810190601f168015610e595780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61104e60048036036060811015610e7d57600080fd5b8101908080359060200190640100000000811115610e9a57600080fd5b820183602082011115610eac57600080fd5b80359060200191846001830284011164010000000083111715610ece57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610f3157600080fd5b820183602082011115610f4357600080fd5b80359060200191846001830284011164010000000083111715610f6557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610fc857600080fd5b820183602082011115610fda57600080fd5b80359060200191846001830284011164010000000083111715610ffc57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050612017565b005b34801561105c57600080fd5b50611065612061565b6040518082815260200191505060405180910390f35b34801561108757600080fd5b506110b46004803603602081101561109e57600080fd5b810190808035906020019092919050505061206e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561110257600080fd5b506111bc6004803603602081101561111957600080fd5b810190808035906020019064010000000081111561113657600080fd5b82018360208201111561114857600080fd5b8035906020019184600183028401116401000000008311171561116a57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506120ac565b005b611235600480360360208110156111d457600080fd5b81019080803590602001906401000000008111156111f157600080fd5b82018360208201111561120357600080fd5b8035906020019184600183028401116401000000008311171561122557600080fd5b90919293919293905050506120c6565b005b34801561124357600080fd5b506112706004803603602081101561125a57600080fd5b81019080803590602001909291905050506120dc565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156113485780601f1061131d57610100808354040283529160200191611348565b820191906000526020600020905b81548152906001019060200180831161132b57829003601f168201915b505050505081565b81816001919061136192919061212c565b505050565b60038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156113fc5780601f106113d1576101008083540402835291602001916113fc565b820191906000526020600020905b8154815290600101906020018083116113df57829003601f168201915b505050505081565b60068181548110151561141357fe5b9060005260206000209060060201600091509050806000015490806001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114c55780601f1061149a576101008083540402835291602001916114c5565b820191906000526020600020905b8154815290600101906020018083116114a857829003601f168201915b505050505090806002018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156115635780601f1061153857610100808354040283529160200191611563565b820191906000526020600020905b81548152906001019060200180831161154657829003601f168201915b505050505090806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156116015780601f106115d657610100808354040283529160200191611601565b820191906000526020600020905b8154815290600101906020018083116115e457829003601f168201915b505050505090806004018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561169f5780601f106116745761010080835404028352916020019161169f565b820191906000526020600020905b81548152906001019060200180831161168257829003601f168201915b5050505050908060050154905086565b60078190806001815401808255809150509060018203906000526020600020016000909192909190915090805190602001906116ec9291906121ac565b505050565b606080606060068481548110151561170557fe5b906000526020600020906006020160010160068581548110151561172557fe5b906000526020600020906006020160040160068681548110151561174557fe5b9060005260206000209060060201600301828054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156117eb5780601f106117c0576101008083540402835291602001916117eb565b820191906000526020600020905b8154815290600101906020018083116117ce57829003601f168201915b50505050509250818054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156118875780601f1061185c57610100808354040283529160200191611887565b820191906000526020600020905b81548152906001019060200180831161186a57829003601f168201915b50505050509150808054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156119235780601f106118f857610100808354040283529160200191611923565b820191906000526020600020905b81548152906001019060200180831161190657829003601f168201915b505050505090509250925092509193909250565b60008054905090565b606060078281548110151561195157fe5b906000526020600020018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156119ef5780601f106119c4576101008083540402835291602001916119ef565b820191906000526020600020905b8154815290600101906020018083116119d257829003601f168201915b50505050509050919050565b6060600682815481101515611a0c57fe5b90600052602060002090600602016001018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611ab15780601f10611a8657610100808354040283529160200191611ab1565b820191906000526020600020905b815481529060010190602001808311611a9457829003601f168201915b50505050509050919050565b60028054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611b535780601f10611b2857610100808354040283529160200191611b53565b820191906000526020600020905b815481529060010190602001808311611b3657829003601f168201915b505050505081565b6000600780549050905090565b606060018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611c005780601f10611bd557610100808354040283529160200191611c00565b820191906000526020600020905b815481529060010190602001808311611be357829003601f168201915b5050505050905090565b60088190806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b600781815481101515611c8257fe5b906000526020600020016000915090508054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611d265780601f10611cfb57610100808354040283529160200191611d26565b820191906000526020600020905b815481529060010190602001808311611d0957829003601f168201915b505050505081565b606060038054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611dc65780601f10611d9b57610100808354040283529160200191611dc6565b820191906000526020600020905b815481529060010190602001808311611da957829003601f168201915b5050505050905090565b6000600682815481101515611de157fe5b9060005260206000209060060201600001549050919050565b6000600680549050905090565b600080611e1261211f565b9050600660c0604051908101604052808381526020018681526020016040805190810160405280600c81526020017f566572736963686572756e67000000000000000000000000000000000000000081525081526020016040805190810160405280600181526020017f41000000000000000000000000000000000000000000000000000000000000008152508152602001858152602001600081525090806001815401808255809150509060018203906000526020600020906006020160009091929091909150600082015181600001556020820151816001019080519060200190611f0092919061222c565b506040820151816002019080519060200190611f1d92919061222c565b506060820151816003019080519060200190611f3a92919061222c565b506080820151816004019080519060200190611f5792919061222c565b5060a082015181600501555050508091505092915050565b60005481565b606060028054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561200d5780601f10611fe25761010080835404028352916020019161200d565b820191906000526020600020905b815481529060010190602001808311611ff057829003601f168201915b5050505050905090565b826001908051906020019061202d9291906121ac565b5081600290805190602001906120449291906121ac565b50806003908051906020019061205b9291906121ac565b50505050565b6000600880549050905090565b60088181548110151561207d57fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b80600290805190602001906120c29291906121ac565b5050565b8181600391906120d792919061212c565b505050565b60006008828154811015156120ed57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000804390508091505090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061216d57803560ff191683800117855561219b565b8280016001018555821561219b579182015b8281111561219a57823582559160200191906001019061217f565b5b5090506121a891906122ac565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106121ed57805160ff191683800117855561221b565b8280016001018555821561221b579182015b8281111561221a5782518255916020019190600101906121ff565b5b50905061222891906122ac565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061226d57805160ff191683800117855561229b565b8280016001018555821561229b579182015b8281111561229a57825182559160200191906001019061227f565b5b5090506122a891906122ac565b5090565b6122ce91905b808211156122ca5760008160009055506001016122b2565b5090565b9056fea165627a7a723058201b6409cb4331db7dafd71ba877c722c77455b54e15609f7924afeb764eb7ff3a0029',
 
      gas: '4700000'
 
    }, function (e, contract){
 
     console.log(e, contract);
 
     if (typeof contract.address !== 'undefined') {
 
          console.log('Kooperationsvertrag1 erstellt! : ' + contract.address + ' transactionHash: ' + contract.transactionHash);
 

     }
 
 })

 var param0 = "0xa12938423ab39b47ea413c613b788671422c046c";
 var param1 = "data.versicherungsnehmer";
 var param2 = "data.versicherer";
 var param3 = "data.tarif";
 var param4 = 1; //data.versicherungsid.toNumber();
 var param5 = 100000 ; //data.summe
 var vvContract1 = web3.eth.contract(versicherungsvertragABI);
 var versicherungsvertrag = vvContract1.new(param0,param1,param2.param3,param4,param5,
 
     {
  
       from: bcManager,
  
       data: '0x608060405234801561001057600080fd5b5060f58061001f6000396000f3fe6080604052600436106053576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063209652551460585780633fa4f245146080578063ee3711be1460a8575b600080fd5b348015606357600080fd5b50606a60b0565b6040518082815260200191505060405180910390f35b348015608b57600080fd5b50609260b9565b6040518082815260200191505060405180910390f35b60ae60bf565b005b60008054905090565b60005481565b600160008190555056fea165627a7a72305820a438414a3d7a50877e400e2b9d142dd0d4e2cc0a91b0e26b2542caf11c6c602e0029',
  
       gas: '4700000'
  
     }, function (e, contract){
  
      console.log(e, contract);
  
      if (typeof contract.address !== 'undefined') {
  
           console.log('Versicherungsvertrag1 erstellt! : ' + contract.address + ' transactionHash: ' + contract.transactionHash);
           
           var s= "na";
           console.log("vu0:" + s);
           s = contract.versicherer((error, value) => {
            if (error) { console.error(error); }
                console.log("vu1:" + s);
            });
            console.log("vu2:" + s);

  
      }
  
  })
 


 

/*
var vvContract = web3.eth.contract(versicherungsvertragABI);
var versicherungsvertrag = vvContract.new(

    {
 
      from: bcManager,
 
      data: '0x608060405234801561001057600080fd5b5060f58061001f6000396000f3fe6080604052600436106053576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063209652551460585780633fa4f245146080578063ee3711be1460a8575b600080fd5b348015606357600080fd5b50606a60b0565b6040518082815260200191505060405180910390f35b348015608b57600080fd5b50609260b9565b6040518082815260200191505060405180910390f35b60ae60bf565b005b60008054905090565b60005481565b600160008190555056fea165627a7a72305820a438414a3d7a50877e400e2b9d142dd0d4e2cc0a91b0e26b2542caf11c6c602e0029',
 
      gas: '4700000'
 
    }, function (e, contract){
 
     console.log(e, contract);
 
     if (typeof contract.address !== 'undefined') {
 
          console.log('Versicherungsvertrag erstellt! : ' + contract.address + ' transactionHash: ' + contract.transactionHash);
 
 
     }
 
 })


 

var tpContract = web3.eth.contract(transportABI);
var transport = tpContract.new(

    {
 
      from: bcManager,
 
      data: '0x60806040526010600455600454600a0a6005553480156200001f57600080fd5b506040516200258b3803806200258b833981018060405260608110156200004557600080fd5b810190808051906020019092919080516401000000008111156200006857600080fd5b828101905060208101848111156200007f57600080fd5b81518560018202830111640100000000821117156200009d57600080fd5b50509291906020018051640100000000811115620000ba57600080fd5b82810190506020810184811115620000d157600080fd5b8151856001820283011164010000000082111715620000ef57600080fd5b505092919050505082600081905550816001908051906020019062000116929190620001cf565b5080600290805190602001906200012f929190620001cf565b5060206040519081016040528060008152506003908051906020019062000158929190620001cf565b507fb233ce0773616ea2f34f944f2bda8ce87d298c4f27d29e023d6e2a22ada199cb30600054604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a15050506200027e565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200021257805160ff191683800117855562000243565b8280016001018555821562000243579182015b828111156200024257825182559160200191906001019062000225565b5b50905062000252919062000256565b5090565b6200027b91905b80821115620002775760008160009055506001016200025d565b5090565b90565b6122fd806200028e6000396000f3fe608060405260043610610154576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146101595780631d817c48146101e95780632e2365b7146102625780633cba2359146102f25780634243e952146104f857806342ad8fb5146105c05780634ad8ea671461074c57806350cae68d146107775780635534c4701461082b578063565974d3146108df5780637400fe621461096f57806377e809b11461099a5780637cc5114714610a2a57806380e9394014610a7b57806389a91adc14610b2f578063a7216eb014610bbf578063a8c7739614610c0e578063adee43e714610c39578063b7b01d6d14610dac578063c7a477b714610dd7578063cc41cb1714610e67578063cd94398814611050578063dde7fbba1461107b578063ea3d6820146110f6578063ebb381be146111be578063ebe91bce14611237575b600080fd5b34801561016557600080fd5b5061016e6112b2565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101ae578082015181840152602081019050610193565b50505050905090810190601f1680156101db5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610260600480360360208110156101ff57600080fd5b810190808035906020019064010000000081111561021c57600080fd5b82018360208201111561022e57600080fd5b8035906020019184600183028401116401000000008311171561025057600080fd5b9091929391929390505050611350565b005b34801561026e57600080fd5b50610277611366565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102b757808201518184015260208101905061029c565b50505050905090810190601f1680156102e45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102fe57600080fd5b5061032b6004803603602081101561031557600080fd5b8101908080359060200190929190505050611404565b604051808781526020018060200180602001806020018060200186815260200185810385528a818151815260200191508051906020019080838360005b83811015610383578082015181840152602081019050610368565b50505050905090810190601f1680156103b05780820380516001836020036101000a031916815260200191505b50858103845289818151815260200191508051906020019080838360005b838110156103e95780820151818401526020810190506103ce565b50505050905090810190601f1680156104165780820380516001836020036101000a031916815260200191505b50858103835288818151815260200191508051906020019080838360005b8381101561044f578082015181840152602081019050610434565b50505050905090810190601f16801561047c5780820380516001836020036101000a031916815260200191505b50858103825287818151815260200191508051906020019080838360005b838110156104b557808201518184015260208101905061049a565b50505050905090810190601f1680156104e25780820380516001836020036101000a031916815260200191505b509a505050505050505050505060405180910390f35b34801561050457600080fd5b506105be6004803603602081101561051b57600080fd5b810190808035906020019064010000000081111561053857600080fd5b82018360208201111561054a57600080fd5b8035906020019184600183028401116401000000008311171561056c57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506116af565b005b3480156105cc57600080fd5b506105f9600480360360208110156105e357600080fd5b81019080803590602001909291905050506116f1565b60405180806020018060200180602001848103845287818151815260200191508051906020019080838360005b83811015610641578082015181840152602081019050610626565b50505050905090810190601f16801561066e5780820380516001836020036101000a031916815260200191505b50848103835286818151815260200191508051906020019080838360005b838110156106a757808201518184015260208101905061068c565b50505050905090810190601f1680156106d45780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b8381101561070d5780820151818401526020810190506106f2565b50505050905090810190601f16801561073a5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b34801561075857600080fd5b50610761611937565b6040518082815260200191505060405180910390f35b34801561078357600080fd5b506107b06004803603602081101561079a57600080fd5b8101908080359060200190929190505050611940565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156107f05780820151818401526020810190506107d5565b50505050905090810190601f16801561081d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561083757600080fd5b506108646004803603602081101561084e57600080fd5b81019080803590602001909291905050506119fb565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156108a4578082015181840152602081019050610889565b50505050905090810190601f1680156108d15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156108eb57600080fd5b506108f4611abd565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610934578082015181840152602081019050610919565b50505050905090810190601f1680156109615780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561097b57600080fd5b50610984611b5b565b6040518082815260200191505060405180910390f35b3480156109a657600080fd5b506109af611b68565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156109ef5780820151818401526020810190506109d4565b50505050905090810190601f168015610a1c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b348015610a3657600080fd5b50610a7960048036036020811015610a4d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611c0a565b005b348015610a8757600080fd5b50610ab460048036036020811015610a9e57600080fd5b8101908080359060200190929190505050611c73565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610af4578082015181840152602081019050610ad9565b50505050905090810190601f168015610b215780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b348015610b3b57600080fd5b50610b44611d2e565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610b84578082015181840152602081019050610b69565b50505050905090810190601f168015610bb15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b348015610bcb57600080fd5b50610bf860048036036020811015610be257600080fd5b8101908080359060200190929190505050611dd0565b6040518082815260200191505060405180910390f35b348015610c1a57600080fd5b50610c23611dfa565b6040518082815260200191505060405180910390f35b348015610c4557600080fd5b50610d9660048036036040811015610c5c57600080fd5b8101908080359060200190640100000000811115610c7957600080fd5b820183602082011115610c8b57600080fd5b80359060200191846001830284011164010000000083111715610cad57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610d1057600080fd5b820183602082011115610d2257600080fd5b80359060200191846001830284011164010000000083111715610d4457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611e07565b6040518082815260200191505060405180910390f35b348015610db857600080fd5b50610dc1611f6f565b6040518082815260200191505060405180910390f35b348015610de357600080fd5b50610dec611f75565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610e2c578082015181840152602081019050610e11565b50505050905090810190601f168015610e595780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61104e60048036036060811015610e7d57600080fd5b8101908080359060200190640100000000811115610e9a57600080fd5b820183602082011115610eac57600080fd5b80359060200191846001830284011164010000000083111715610ece57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610f3157600080fd5b820183602082011115610f4357600080fd5b80359060200191846001830284011164010000000083111715610f6557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610fc857600080fd5b820183602082011115610fda57600080fd5b80359060200191846001830284011164010000000083111715610ffc57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050612017565b005b34801561105c57600080fd5b50611065612061565b6040518082815260200191505060405180910390f35b34801561108757600080fd5b506110b46004803603602081101561109e57600080fd5b810190808035906020019092919050505061206e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561110257600080fd5b506111bc6004803603602081101561111957600080fd5b810190808035906020019064010000000081111561113657600080fd5b82018360208201111561114857600080fd5b8035906020019184600183028401116401000000008311171561116a57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506120ac565b005b611235600480360360208110156111d457600080fd5b81019080803590602001906401000000008111156111f157600080fd5b82018360208201111561120357600080fd5b8035906020019184600183028401116401000000008311171561122557600080fd5b90919293919293905050506120c6565b005b34801561124357600080fd5b506112706004803603602081101561125a57600080fd5b81019080803590602001909291905050506120dc565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156113485780601f1061131d57610100808354040283529160200191611348565b820191906000526020600020905b81548152906001019060200180831161132b57829003601f168201915b505050505081565b81816001919061136192919061212c565b505050565b60038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156113fc5780601f106113d1576101008083540402835291602001916113fc565b820191906000526020600020905b8154815290600101906020018083116113df57829003601f168201915b505050505081565b60068181548110151561141357fe5b9060005260206000209060060201600091509050806000015490806001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114c55780601f1061149a576101008083540402835291602001916114c5565b820191906000526020600020905b8154815290600101906020018083116114a857829003601f168201915b505050505090806002018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156115635780601f1061153857610100808354040283529160200191611563565b820191906000526020600020905b81548152906001019060200180831161154657829003601f168201915b505050505090806003018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156116015780601f106115d657610100808354040283529160200191611601565b820191906000526020600020905b8154815290600101906020018083116115e457829003601f168201915b505050505090806004018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561169f5780601f106116745761010080835404028352916020019161169f565b820191906000526020600020905b81548152906001019060200180831161168257829003601f168201915b5050505050908060050154905086565b60078190806001815401808255809150509060018203906000526020600020016000909192909190915090805190602001906116ec9291906121ac565b505050565b606080606060068481548110151561170557fe5b906000526020600020906006020160010160068581548110151561172557fe5b906000526020600020906006020160040160068681548110151561174557fe5b9060005260206000209060060201600301828054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156117eb5780601f106117c0576101008083540402835291602001916117eb565b820191906000526020600020905b8154815290600101906020018083116117ce57829003601f168201915b50505050509250818054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156118875780601f1061185c57610100808354040283529160200191611887565b820191906000526020600020905b81548152906001019060200180831161186a57829003601f168201915b50505050509150808054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156119235780601f106118f857610100808354040283529160200191611923565b820191906000526020600020905b81548152906001019060200180831161190657829003601f168201915b505050505090509250925092509193909250565b60008054905090565b606060078281548110151561195157fe5b906000526020600020018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156119ef5780601f106119c4576101008083540402835291602001916119ef565b820191906000526020600020905b8154815290600101906020018083116119d257829003601f168201915b50505050509050919050565b6060600682815481101515611a0c57fe5b90600052602060002090600602016001018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611ab15780601f10611a8657610100808354040283529160200191611ab1565b820191906000526020600020905b815481529060010190602001808311611a9457829003601f168201915b50505050509050919050565b60028054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611b535780601f10611b2857610100808354040283529160200191611b53565b820191906000526020600020905b815481529060010190602001808311611b3657829003601f168201915b505050505081565b6000600780549050905090565b606060018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611c005780601f10611bd557610100808354040283529160200191611c00565b820191906000526020600020905b815481529060010190602001808311611be357829003601f168201915b5050505050905090565b60088190806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b600781815481101515611c8257fe5b906000526020600020016000915090508054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611d265780601f10611cfb57610100808354040283529160200191611d26565b820191906000526020600020905b815481529060010190602001808311611d0957829003601f168201915b505050505081565b606060038054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611dc65780601f10611d9b57610100808354040283529160200191611dc6565b820191906000526020600020905b815481529060010190602001808311611da957829003601f168201915b5050505050905090565b6000600682815481101515611de157fe5b9060005260206000209060060201600001549050919050565b6000600680549050905090565b600080611e1261211f565b9050600660c0604051908101604052808381526020018681526020016040805190810160405280600c81526020017f566572736963686572756e67000000000000000000000000000000000000000081525081526020016040805190810160405280600181526020017f41000000000000000000000000000000000000000000000000000000000000008152508152602001858152602001600081525090806001815401808255809150509060018203906000526020600020906006020160009091929091909150600082015181600001556020820151816001019080519060200190611f0092919061222c565b506040820151816002019080519060200190611f1d92919061222c565b506060820151816003019080519060200190611f3a92919061222c565b506080820151816004019080519060200190611f5792919061222c565b5060a082015181600501555050508091505092915050565b60005481565b606060028054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561200d5780601f10611fe25761010080835404028352916020019161200d565b820191906000526020600020905b815481529060010190602001808311611ff057829003601f168201915b5050505050905090565b826001908051906020019061202d9291906121ac565b5081600290805190602001906120449291906121ac565b50806003908051906020019061205b9291906121ac565b50505050565b6000600880549050905090565b60088181548110151561207d57fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b80600290805190602001906120c29291906121ac565b5050565b8181600391906120d792919061212c565b505050565b60006008828154811015156120ed57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000804390508091505090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061216d57803560ff191683800117855561219b565b8280016001018555821561219b579182015b8281111561219a57823582559160200191906001019061217f565b5b5090506121a891906122ac565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106121ed57805160ff191683800117855561221b565b8280016001018555821561221b579182015b8281111561221a5782518255916020019190600101906121ff565b5b50905061222891906122ac565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061226d57805160ff191683800117855561229b565b8280016001018555821561229b579182015b8281111561229a57825182559160200191906001019061227f565b5b5090506122a891906122ac565b5090565b6122ce91905b808211156122ca5760008160009055506001016122b2565b5090565b9056fea165627a7a72305820a49368884d0fac8d4a9a48c6875e7b3e4f79a6e0793cfcdc41edd146e33393c00029',
 
      gas: '4700000'
 
    }, function (e, contract){
 
     console.log(e, contract);
 
     if (typeof contract.address !== 'undefined') {
 
          console.log('Transportvertrag erstellt! : ' + contract.address + ' transactionHash: ' + contract.transactionHash);
 
 
     }
 
 })*/

 

};
