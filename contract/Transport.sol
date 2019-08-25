pragma solidity >=0.4.21 <0.6.0;

contract Transport {

/* offene Themen: modifiere payable */

    enum gefahrenklasse {A,B,C}

    //Identifizierung
    bytes8 public id;
    string public spedition;
    string erstellungsdatum;

    //Informationen zum Absender
    string public VonName;
    string public VonDatum;
    string public VonOrt;

    //Informationen zum Adressaten
    string public AnName;
    string public AnOrt;
    string public AnDatum;

    //Informationen zum Verlauf
    string status;
    uebergabe[] public uebergaben;

    //Transportgut
    uint public menge;
    string public einheit;
    string public art;
    gefahrenklasse gefahrgutklasse;

    //Versicherung
    uint public warenwert;
    uint public schadenhoehe;

    struct  uebergabe {
        string datum;
        string ort;
        string menge;
        string frachtfuehrer;
        uint128 schaden;
    }


    function gibDetails() public view returns (bytes8,string memory,string memory,string memory, string memory,uint) {
        return (id,spedition,VonName,VonOrt,status,warenwert);
    }

    /*uint public datum;
    int interneVariabel;
    Gefahrgut gefahrgut=Gefahrgut.A;*/
   /* nur intern zu sehen
      constructor (int nr) public {
        id = nr;
        datum = block.timestamp;
        //strecke[0]="Start"; geht nicht;
        strecke.push("Start");
        warenwert = 0;

    }*/

    constructor (string memory vn,string memory vd, string memory va)  public {
            id = "todo";
            VonName = vn;
            VonDatum = vd;
            VonOrt = va;
            status = "geplant";
            erstellungsdatum = "01.01.2018";
            schadenhoehe = 0;
            warenwert = 0;

    }

    function ergaenzeSpedition (string memory sp) public  {
          spedition = sp;
    }



    function ergaenzeAdresssat (string memory an, string memory ad,string memory ao) public  {
            AnName = an;
            AnDatum = ad;
            AnOrt = ao;
    }

    function ergaenzeDetails (uint mg, string memory eh, string memory ar) public {
        menge = mg;
        einheit = eh;
        art = ar;
    }

/*
    function addStrecke (string calldata ort) external returns (uint) {
        uebergaben.push(ort);
        return uebergaben.length;
    }*/

    function ergaenzeUebergabe (string memory dt, string memory ot, string memory mg,string memory ff,uint128  sd) public {
        uebergabe memory eineUebergabe;
        eineUebergabe.datum = dt;
        eineUebergabe.ort = ot;
        eineUebergabe.menge = mg;
        eineUebergabe.frachtfuehrer = ff;
        eineUebergabe.schaden = sd;
        uebergaben.push(eineUebergabe);
    }

    function gibUebergabe (uint index) public view returns (string memory dt, string memory ot, string memory mg,string memory ff,int  sd) {
        uebergabe memory eineUebergabe;
        eineUebergabe = uebergaben[index];
        return (eineUebergabe.datum, eineUebergabe.ort,eineUebergabe.menge,eineUebergabe.frachtfuehrer,eineUebergabe.schaden);
    }

    function aendereWarenwert (uint wert) external payable {
            warenwert = wert;
    }

    function starteTransport () external payable returns (string memory) {
            status = "laufend";
            return status;
    }

    function beendeTransport () external payable returns (string memory) {
            schadenhoehe = this.gibTransportSchaden();
            status = "fertig";
            return status;
    }

//
// Auslesen von Informationen
//
    function gibStartdatum () public view returns (string memory) {
        return erstellungsdatum;
    }

    function gibRoutenAnzahl () public view returns (uint) {
        return uebergaben.length;
    }

    function gibTransportSchaden () public view returns (uint) {
        uint gesamt = 0;
        uint schaden = 0;
        uint256 index = 0;
        uint256 anzahl = uebergaben.length;
        for (index = 0; index < anzahl ; index++) {
            uebergabe memory u = uebergaben[index];
            schaden = u.schaden;
            gesamt = schaden + gesamt;
        }
        return gesamt;
    }

    function gibSchadenhoehe () public view returns (uint) {
        return schadenhoehe;
    }

    /*
    function ergaenzeGefahrgutklasse (uint gg) {
        gefahrgutklasse =  gg;
    } */

}
