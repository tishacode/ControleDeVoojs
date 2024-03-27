class PlanoDeVoo {
constructor(idPlanoDeVoo, matricPiloto, prefixoAeronave, idAerovia, dataDoVoo, horarioDoVoo, altitude, slots, statusVoo) {
  this.idPlanoDeVoo = idPlanoDeVoo;
  this.matricPiloto = matricPiloto;
  this.prefixoAeronave = prefixoAeronave;
  this.idAerovia = idAerovia;
  this.dataDoVoo = dataDoVoo;
  this.horarioDoVoo = horarioDoVoo;
  this.altitude = altitude;
  this.slots = slots;
  this.statusVoo = statusVoo;
}

  apresentarPlanoDeVoo() {
        console.log(
          `Id Plano de Voo: ${this.idPlanoDeVoo}, 
          Matricula Piloto: ${this.matricPiloto},
          Prefixo Aeronave: ${this.prefixoAeronave},
          Id Aerovia: ${this.idAerovia}, 
          Data do Voo: ${this.dataDoVoo}, 
          Horario do Voo: ${this.horarioDoVoo},
          Altitude: ${this.altitude}, 
          Slots: ${this.slots},
          Status Voo: ${this.statusVoo}
          `);
      }
    }

  module.exports = PlanoDeVoo;