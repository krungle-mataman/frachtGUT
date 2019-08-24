
/*************************************************
 * 
 * 
 * 0Blockchain managen
 * 
 * 
 ***************************************************/
function blockchainAktualisieren (data){

  console.log("Blockchain abfragen...." + data);

  data.bcName="...";
  data.bcId="...";
  data.bcDashboardLink="";
  


  data.bcVersion = "version: " + web3.version.api;
  web3.version.getNetwork((err, netId) => {
    data.bcId = "netzid: " + netId;
    switch (netId) {
      case "1":
        data.bcNetzwerk = 'This is mainnet';
        data.bcDashboardLink = "https://ethstats.io/";
        break
      case "2":
        data.bcNetzwerk = 'Morden test network.';
        break
      case "3":
        data.bcNetzwerk = 'Ropsten test network.';
        break
      case "4":
        data.bcNetzwerk = 'Rinkeby test network.';
        break
      case "42":
        data.bcNetzwerk = 'Kovan test network.';
        break
      case "508674158":
        data.bcNetzwerk = 'Evan-Network';
        data.bcDashboardLink = "https://teststatus.evan.network";
        break;
      case "4000":
        data.bcNetzwerk = 'Lokales Netzwerk';
        break;
      default:
        data.bcNetzwerk = 'Unbekanntes Netzwerk';
    }
  });


  if(!web3.isConnected()) {

    // show some dialog to ask the user to start a node
    data.bcVerbindung = "nicht verbunden";
  } else {
  
    // start web3 filters, calls, etc
    data.bcVerbindung = "verbunden";
    
  }

  //Felder initialisieren
  data.bcInfo1="hashrate: ";
  data.bcInfo2="blocknr: ";
  data.bcInfo3="gasprice: ";
  data.bcInfo4="def-account: ";
  data.bcInfo5="accounts: ";
  data.bcInfo6="gas: ";
  data.bcInfo7="peers: ";
  data.bcInfo8="chainid: ";
  data.bcInfo9="nodeid: ";

try {
  
  web3.eth.getHashrate((err,value) => {
    if (err) { console.log(err); }
    if (!err) { 
      data.bcInfo1 = data.bcInfo1 + value;
    }
  });


  web3.eth.getBlockNumber((err,value) => {
    if (err) { console.log("fehler:" + err); }
    if (!err) {
      data.bcInfo2 = data.bcInfo2 + value;
    }
  });

  
  web3.eth.getGasPrice((err,value) => {
    if (err) { console.log("fehler:" + err); }
    if (!err) {
      console.log("kein fehler: " + value);
      data.bcInfo3 = data.bcInfo3 + value;
  
    }
  });

  web3.eth.getAccounts((err,value) => {
    if (err) { console.log("fehler:" + err); }
    if (!err) {
      console.log("kein fehler: " + value);
      data.bcInfo4 = "def-account: " + value[0];
      data.bcInfo5= "accounts: " + value.length;
  
    }
  });

  


  
  /*
  web3.eth.defaultGas((err,value) => {
    if (err) { console.log("fehler:" + err); }
    if (!err) {
      data.bcInfo6 = data.bcInfo6 + value;
  
    }
  });*/

  /*
  web3.eth.net.getPeerCount((err,value) => {
    if (err) { console.log("fehler:" + err); }
    if (!err) {
      data.bcInfo7 = data.bcInfo7 + value;
  
    }
  });

  web3.eth.getChainId((err,value) => {
    if (err) { console.log("fehler:" + err); }
    if (!err) {
      data.bcInfo8 = data.bcInfo8 + value;
      }
  });


  
  web3.eth.getNodeInfo((err,value) => {
    if (err) { console.log("fehler:" + err); }
    if (!err) {
      data.bcInfo9 = data.bcInfo9 + value;
      }
  });*/

  var s=">>>> Blockchaininformationen aktualisiert."
  data.Systeminfo=s;
  console.log( s + data);

} catch (error) {

  var s=">>>> Fehler bei Blockchaininformationen aktualisieren. <<<<";
  data.Systeminfo=s;
  console.log( s + error);
  
  
}
  


}


/*************************************************
 * 
 * 
 * 1Konten managen
 * 
 * 
 ***************************************************/
function kontenAktualisieren(data){


  var v;
  data.bcManagerSaldo="0";
  web3.eth.getBalance(data.bcManagerDef,(err,value) => {
    if (err) { console.log(err); }
    if (!err) { 
      //var v = web3.utils.fromWei(value[0], 'ether');
      //web3.utils.fromWei(web3.utils.toBN(updatedBalance).toString() )
      var v = value / 1e18;
      data.bcManagerSaldo = v;
  
    }
  });

  data.bcVersicherungSaldo="0";
  web3.eth.getBalance(data.bcVersicherungDef,(err,value) => {
    if (err) { console.log(err); }
    if (!err) { 
      var v = value / 1e18;
      data.bcVersicherungSaldo = v;
    }
  });
  data.bcSpeditionSaldo="0";
  web3.eth.getBalance(data.bcSpeditionDef,(err,value) => {
    if (err) { console.log(err); }
    if (!err) { 
      var v = value / 1e18;
      data.bcSpeditionSaldo = v;
    }
  });
  data.bcAccountSaldo="0";
  web3.eth.getBalance(data.bcAccountDef,(err,value) => {
    if (err) { console.log(err); }
    if (!err) { 
      var v = value / 1e18;
      data.bcAccountSaldo = v;
    }
  });

  var s=">>>> Konteninformationen aktualisiert."
  data.Systeminfo=s;
  console.log( s + data);
}

/*************************************************
 * 
 * 
 * 2Parameter managen
 * 
 * 
 ***************************************************/
function parameterAktualisieren (data) {

  //fgDefaultGaslimit = web3.utils.fromWei(fgDefaultGaslimit, 'ether');
  data.trInfo1="Gaslimit: " + fgDefaultGaslimit;
  data.trInfo2="Gasprice: " + fgDefaultGasprice;
  data.trInfo3="Gas: " + fgDefaultGas;

  data.bcGebuehr0 = web3.fromWei(gebuehr0);
  data.bcGebuehr1 = web3.fromWei(gebuehr1);
  data.bcGebuehr2 = web3.fromWei(gebuehr2);
  
  var s=">>>> Parameter aktualisiert."
  data.Systeminfo=s;
  console.log( s + data);

}

function seiteDashboard(data) {
  console.log("link aufbauen");
  if (data.bcDashboardLink=="")
    data.Systeminfo="<<<< kein Dashboard vorhanden";
  else 
    window.open(data.bcDashboardLink);
}


function seiteVor(data) {
  console.log("link aufbauen");
  var link ="kp.html?";
  link=link+"bcm="+data.bcManagerDef;
  window.open(link);

}
/*************************************************
 * 
 * 
 * 9Startseite aufrufen
 * 
 * 
 ***************************************************/
function initVue() {

  const data = {


    bcManagerDef : "",
    bcManagerSaldo : "",
    bcSpeditionDef : "",
    bcSpeditionSaldo : "",
    bcVersicherungDef : "",
    bcVersicherungSaldo : "",
    bcAccountDef : "",
    bcAccountSaldo : "",

    bcWaehrung : "EVE",
    bcGebuehr1 : "",
    bcGebuehr2 : "",
    bcGebuehr0 : "",
    bcInfo1 :"",
    bcInfo2 :"",
    bcInfo3 :"",
    bcInfo4 :"",
    bcInfo5 :"",
    bcInfo6 :"",
    bcInfo7 :"",  
    bcInfo8 :"", 
    bcInfo9 :"",   
    bcDashboardLink : "",

    
    trInfo1 :".", 
    trInfo2 :".", 
    trInfo3 :".", 
    trInfo4 :"",

    bcName : "name",
    bcId : "id",
    bcAdresse : "adresse",
    bcVersion : "version",
    bcNetzwerk : "netzwerk",
    bcVerbindung : "verbindung",
    bcPrototypVersion : "",

    /* sonstiges */
    zufallszahl : 1,
    Systeminfo : "",
    picked : ""



  };
  new Vue({
    el: '#app',
    data: data,
    methods: {

            
      BlockchainAktualisieren() {
        data.Systeminfo="";
        blockchainAktualisieren(data);
      },

      BlockchainAnzeigen() {
        data.Systeminfo="";
        seiteDashboard(data);
      },


      KontenAktualisieren() {
        data.Systeminfo="";
        kontenAktualisieren(data);
      },


      TransaktionAktualisieren() {
        data.Systeminfo="";
        parameterAktualisieren(data);
      },

      NaechsteSeite() {
        seiteVor(data);
      },

     }
  
    });

    try {

      var web3 = new Web3();
      if (typeof web3 !== 'undefined') {
          web3 = new Web3(web3.currentProvider);
         } else {
          // set the provider you want from Web3.providers
          web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
      }

      // Initialwerte setzen 
      data.bcManagerDef = bcManagerDef;
      data.bcSpeditionDef = bcSpeditionDef;
      data.bcVersicherungDef = bcVersicherungDef;
      data.bcAccountDef = bcAccountDef;
      data.bcPrototypVersion = bcPrototypVersion;
      
      
    

      //Oberflächenwerte aktualisieren
      blockchainAktualisieren(data);
      parameterAktualisieren(data);
      kontenAktualisieren(data); 
      console.log("Initialisierung erfolgreich abgeschlossen");

    } catch (error) {

      console.log("Fehler bei der Initialisierung" + error);
    }

}