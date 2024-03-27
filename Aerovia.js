class Aerovia {
  // CONSTRUTOR DA CLASSE AEROVIA
  constructor(idAerovia, aeroportoOrigem, aeroportoDestino, tamanho) {
    // ATRIBUTOS DA CLASSE
    this.idAerovia = idAerovia; // IDENTIFICADOR DA AEROVIA
    this.aeroportoOrigem = aeroportoOrigem; // AEROPORTO DE ORIGEM DA AEROVIA
    this.aeroportoDestino = aeroportoDestino; // AEROPORTO DE DESTINO DA AEROVIA
    this.tamanho = tamanho; // TAMANHO DA AEROVIA
    this.altitudesOcupadas = {}; // DIC DE ALTITUDES OCUPADAS NA AEROVIA
  }

  registrarAltitudeOcupada(altitude, idPlanoDeVoo) {
      if (!this.altitudesOcupadas[altitude]) {
          this.altitudesOcupadas[altitude] = []; 
      }
      this.altitudesOcupadas[altitude].push(idPlanoDeVoo); 
  }
  
  static obterOrigemPorId(listaAerovias, idAerovia) {
      const aerovia = listaAerovias.find(aerovia => aerovia.idAerovia === idAerovia);
      return aerovia ? aerovia.aeroportoOrigem : null;
  }

  static obterDestinoPorId(listaAerovias, idAerovia) {
      const aerovia = listaAerovias.find(aerovia => aerovia.idAerovia === idAerovia);
      return aerovia ? aerovia.aeroportoDestino : null;
  }
}

// EXPORTA A CLASSE AEROVIA PARA QUE POSSA SER UTILIZADA EM OUTROS ARQUIVOS
module.exports = Aerovia;
