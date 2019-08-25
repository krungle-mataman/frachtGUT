pragma solidity >=0.4.21 <0.6.0;
import "./Transport.sol";

contract Versicherungsvertrag {

/* offene Themen:
modifiere
payable
*/

    //Audit
    int public nr;
    bytes8 public id;
    string public erstellungsdatum;

    //Beteiligte
    address kooperation;
    string public versicherungsnehmer;
    string public versicherer;

    //Informationen
    int public summe;
    string public tarif;

    //Zeitinformationen
    string public status;
    string public laufzeit;
    string public beginn;
    string public ende;

    //Transporte
    Transport[] public transporte;
    uint schaden;


    //eigene Versionsführung
    int constant version = 1;

    /* nur intern zu sehen */
    constructor (address kp, string memory vn, string memory vu, string memory tar, int vnr, int sum ) public {
            //todorequire(kp != null,"Kooperation muss angegeben werden");
            //  require(msg.sender == chairperson,"Only chairperson can give right to vote."

         //parameter übernehmen
        kooperation = kp;
        versicherer = vu;
        versicherungsnehmer = vn;
        tarif = tar;
        nr = vnr;
        summe = sum;
        schaden = 0;

        //Defaultwerte erzeugen
        id = "todo"; //adress;
        erstellungsdatum = "1.1.2019"; //block.timestamp();
        status = "geplant";

        //In der Kooperation vermerken
        //kp.ergaenzeVersicherung(this);

    }

    function gibTransportAnzahl() external view returns (uint) {
        return transporte.length;
    }

    function ergaenzeTransport (Transport transport) public  {
            transporte.push(transport);
    }


    function ermittleSchadenshoehe () external view returns (uint) {
        uint index;
        uint schadenhoehe = 0;
        for (index = 0; index < transporte.length; index++) {
            Transport transport;
            transport = transporte[index];
            schadenhoehe = schadenhoehe + transport.gibSchadenhoehe();
        }
        return schadenhoehe;
    }

    function aendereLaufzeit (string calldata lz, string calldata bg, string calldata ed) external payable {
        laufzeit = lz;
        beginn = bg;
        ende = ed;
    }

    function beendeVertrag () external {
        status = "beendet";
    }

    function starteVertrag () external {
        status = "aktiv";
    }

    function gibSchadenDetails() public view returns (uint) {
        return schaden;
    }

    function gibID() public view returns (bytes8) {
        return id;
    }

    function gibDetails () public view returns (bytes8, string memory,string memory, string memory, int,string memory,string memory) {
         return (id,versicherer, versicherungsnehmer,tarif,summe,beginn,status);
     }


    function gibTransport (uint index) public view returns (address) {
        Transport tp = transporte[index];
        return address(tp);
    }


    /* nur intern zu sehen */
    function aendereVertrag (string memory vn, string memory vu, string memory tar, int vnr, int sum ) public payable {

         //parameter übernehmen
        versicherer = vu;
        versicherungsnehmer = vn;
        tarif = tar;
        nr = vnr;
        summe = sum;
        schaden = 0;
    }
}
