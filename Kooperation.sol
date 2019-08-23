pragma solidity >=0.4.21 <0.6.0;
import "./Versicherungsvertrag.sol";

contract Kooperation {

    event KooperationErstellt (address adr, uint nr);

    uint public nr;
    string public name;
    string public details;
    string public beschreibung;
    string constant branchenV = "Versicherung";


     uint dnaDigits = 16;
     uint dnaModulus = 10 ** dnaDigits;

     //enum kategorieTyp {A,B,C};

     //agency structure
     struct Versicherung {
          uint nr;
          string name;
          string branche;
          string kategorie;
          string tarife;
          uint saldo;
     }

     Versicherung[] public versicherungen;
     string[] public speditionen;
     address[] public versicherungsvertraege;

     //mapping (uint => address) public agencyToOwner;

     constructor (uint p, string memory n, string memory d) public {

       nr = p;
       name = n;
       details = d;
       beschreibung = "";

     emit KooperationErstellt(address(this),nr);
     }

    function gibName () public view returns (string memory)   {
         return name;
    }

    function gibNr () public view returns (uint)  {
         return nr;
    }
    function gibDetails () public view returns (string memory)   {
         return details;
    }

    function gibBeschreibung () public view returns (string memory)   {
         return beschreibung;
    }

     function gibSpeditionAnzahl () public view returns (uint) {
          return speditionen.length;
     }

    function gibVersicherungAnzahl () public view returns (uint) {
          return versicherungen.length;
     }

    function gibVersicherungsvertragAnzahl () public view returns (uint) {
          return versicherungsvertraege.length;
     }

    function gibVersicherungsvertrag (uint index) public view returns (address) {

          return versicherungsvertraege[index];
     }


    function gibSpedition (uint index) public view returns (string memory) {
          return speditionen[index];
     }


    function gibVersicherungID (uint index) public view returns (uint) {
         return (versicherungen[index].nr);
     }



    function gibVersicherungName (uint index) public view returns (string memory) {
         return (versicherungen[index].name);
     }


    function gibVersicherungDetails (uint index) public view returns (string memory,string memory,string memory) {
         return (versicherungen[index].name,versicherungen[index].tarife,versicherungen[index].kategorie);
     }

     function gibKooperation() public view returns (string memory, string memory, string memory) {
          return (name, details, beschreibung);
     }

     /*
     function gibVersicherungsvertragAlle () public view returns (Kooperation[] memory) {
          return versicherungsvertraege;
     }*/

    /*function getUser(uint index) public constant returns(uint, string, string, uint) {
        return (users[index].salaryId, users[index].name, users[index].userAddress, users[index].salary);
    }
          uint nr;
          string name;
          string branche;
          string kategorie;
          string tarife;
          uint saldo;
          address konto;
          function gibTeilnehmerDetails (uint index) public view returns (string[] memory) {
         string[] memory detaills;

         return detaills;
     }*/


//
// Attribute ändern
//
     function aendereName (string calldata p) external payable    {
         name = p;

    }


    function aendereBeschreibung (string calldata p) external payable   {
         beschreibung = p;
    }

    function aendereDetails (string memory p) public   {
         details = p;
    }

    function aendereKooperation (string memory n, string memory d, string memory b) public payable   {
         name = n;
         details = d;
         beschreibung = b;
    }





//
// Listen ändern
//

     /*
     function ergaenzeTeilnehmer (string memory n, string memory b ) public returns (uint) {

          //uint id = agencies.push(Agency(_name, _dna)) - 1;
          uint i = generiereZufallszahl();
          teilnehmer.push(Teilnehmer(i,n, b));
          return i;
     }*/

     function ergaenzeVersicherung (string memory n,string memory t) public returns (uint) {


          //uint id = agencies.push(Agency(_name, _dna)) - 1;
          uint i = generiereZufallszahl();
          versicherungen.push(Versicherung(i,n,"Versicherung","A",t, 0));
          return i;
     }


     function ergaenzeSpedition (string memory n) public {

          speditionen.push(n);
          return;
     }


     function ergaenzeVersicherungsvertrag (address vv) public {

          versicherungsvertraege.push(vv);
          return;
     }

     function generiereZufallszahl () private view returns (uint) {

          uint random_number = block.number;
          return random_number;

     }


}



