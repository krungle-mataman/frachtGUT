function initVue() {
  const data = {
    vertraege: [],
    anzahlVertraege: "0",
    anzahlTransporte: "0",
    transporte: [],
    routen: [],
    anzahlRouten: "0",
    staedte: [],
    TransportFindenVAD: "aojeojeii",
    TransportFindenVNR: "4711",
    tpAbsender: "",
    tpWarenwert: "0",
    tpZiel: "Mainz",
    tpIdentifikation: "",
    vvVersicherungsnehmer: "",
    vvVersicherungsnummer: "",
    vvDeckung: "",
    transport: "",
    id: ""
  };
  new Vue({
    el: '#app',
    data: data,
    methods: {
      TransportFinden() {
        transportFinden(this.TransportFindenVAD, this.TransportFindenVNR);
      },
      TransportAnlegen() {
        transportAnlegen(data);
      },
      VertragAnlegen() {
        //console.log(data);
        vertragAnlegen(data);
      }
    }
  });
  //loadTransporte(data);
  TransporteFinden(data);
  VertraegeFinden(data);
  //InitStaedte(data);
}
