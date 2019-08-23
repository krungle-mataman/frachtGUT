/*************************************************
 * 
 * 
 * 0Konstanten managen
 * 
 * 
 ***************************************************/




/*************************************************
 * 
 * 
 * 0Unternehmen managen
 * 
 * 
 ***************************************************/

function InitKonten(data){

  data.bcSpeditionDef = bcSpeditionDef;
  data.bcVersicherungDef = bcVersicherungDef;
  data.bcAccountDef = bcAccountDef;


  var v;
  data.bcManagerSaldo="0";
  web3.eth.getBalance(data.bcManagerDef,(err,value) => {
    if (err) { console.log(err); }
    if (!err) { 
      //v = web3.utils.fromWei(value.toNumber, 'ether');
      data.bcManagerSaldo = value;
    }
  });

  data.bcVersicherungSaldo="0";
  web3.eth.getBalance(data.bcVersicherungDef,(err,value) => {
    if (err) { console.log(err); }
    if (!err) { 
      data.bcVersicherungSaldo = value;
    }
  });
  data.bcSpeditionSaldo="0";
  web3.eth.getBalance(data.bcSpeditionDef,(err,value) => {
    if (err) { console.log(err); }
    if (!err) { 
      data.bcSpeditionSaldo = value;
    }
  });
  data.bcAccountSaldo="0";
  web3.eth.getBalance(data.bcAccountDef,(err,value) => {
    if (err) { console.log(err); }
    if (!err) { 
      data.bcAccountSaldo = value;
    }
  });

 


console.log("Konten und Salden aktualisiert");
}


function InitTestparameter(data) {


  console.log("Parameter erzeugen");

}

  
function InitBlockchain (data){

  console.log("Blockchain abfragen...." + data);

  data.bcName="...";
  data.bcId="...";
  


  data.bcVersion = "version: " + web3.version.api;
  web3.version.getNetwork((err, netId) => {
    data.bcId = "netzid: " + netId;
    switch (netId) {
      case "1":
        data.bcNetzwerk = 'This is mainnet';
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
      default:
        data.bcNetzwerk = 'Spezielles Netzwerk'
    }
  });


  if(!web3.isConnected()) {

    // show some dialog to ask the user to start a node
    data.bcVerbindung = "nicht verbunden";
  } else {
  
    // start web3 filters, calls, etc
    data.bcVerbindung = "verbunden";
    
  }

  data.bcInfo1="hashrate: ";
  web3.eth.getHashrate((err,value) => {
    if (err) { console.log(err); }
    if (!err) { 
      data.bcInfo1 = data.bcInfo1 + value;
    }
  });

  data.bcInfo3="na";
  web3.eth.getBlockNumber((err,value) => {
    if (err) { console.log("fehler:" + err); }
    if (!err) {
      data.bcInfo3 = "blocknr: " + value;
    }
  });

  data.bcInfo7="na";
  web3.eth.getGasPrice((err,value) => {
    if (err) { console.log("fehler:" + err); }
    if (!err) {
      console.log("kein fehler: " + value);
      data.bcInfo7 ="gasprice: " + value;
  
    }
  });

  web3.eth.getAccounts((err,value) => {
    if (err) { console.log("fehler:" + err); }
    if (!err) {
      console.log("kein fehler: " + value);
      data.bcInfo4 = "Default-Accounts: " + value[0];
      data.bcManagerDef = value[0];
  
    }
  });

  


  
  data.bcInfo7="gas: ";
  web3.eth.defaultGas((err,value) => {
    if (err) { console.log("fehler:" + err); }
    if (!err) {
      data.bcInfo7 = data.bcInfo7 + value;
  
    }
  });

  data.bcInfo3="peers: ";
  web3.eth.getPeerCount()((err,value) => {
    if (err) { console.log("fehler:" + err); }
    if (!err) {
      data.bcInfo3 = data.bcInfo3 + value.toString();
  
    }
  });

  data.bcInfo8="chainid: ";
  web3.eth.getChainId((err,value) => {
    if (err) { console.log("fehler:" + err); }
    if (!err) {
      data.bcInfo8bcId = data.bcInfo8 + value;
      }
  });
  console.log("Blockchaininformationen ausgelesen." + data);
  
}

function InitTransaktion (data) {


  data.trInfo1="Gaslimit: " + fgDefaultGaslimit;
  data.trInfo2="Gasprice: " + fgDefaultGasprice;
  data.trInfo3="Gas: " + fgDefaultGas;
  data.trInfo4="Manager: " + bcManagerDef;
  
  console.log("Transaktionsparameter abgeschlossen" + data.trInfo1);

}


function NaechsteSeite(data) {
  console.log("link aufbauen");
  var link ="kp.html?";
  link=link+"bcm="+data.bcManagerDef;
    //link=link+"','Beispiel'";
  console.log(link);
  //data.link=link;
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
    bcManagerSaldo : "master-saldo",
    bcSpeditionDef : "",
    bcSpeditionSaldo : "master-saldo",
    bcVersicherungDef : "",
    bcVersicherungSaldo : "master-saldo",
    bcAccountDef : "",
    bcAccountSaldo : "account-saldo",

    bcWaehrung : "ETH",
    bcInfo1 :"",
    bcInfo2 :"",
    bcInfo3 :"",
    bcInfo4 :"",
    bcInfo5 :"",
    bcInfo6 :"",
    bcInfo7 :"",  
    bcInfo8 :"", 
    bcInfo9 :"",   

    
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

    /* sonstiges */
    zufallszahl : 1,
    Systeminfo : "",
    picked : ""



  };
  new Vue({
    el: '#app',
    data: data,
    methods: {

      NaechsteSeite() {
        NaechsteSeite(data);
      },

      KontenAktualisieren() {
        InitKonten(data);
      },

      BlockchainAktualisieren() {
        InitBlockchain(data);
      }
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

      

      InitBlockchain(data);
      InitTransaktion(data);
      InitKonten(data); 
      console.log("Initialisierung erfolgreich abgeschlossen");

    } catch (error) {

      console.log("Fehler bei der Initialisierung" + error);
    }





  
  

}