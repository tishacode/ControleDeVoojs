class Aeronave {
  // CONSTRUTOR DA CLASSE AERONAVE
  constructor(prefixoAeronave, tipoDeAeronave, velocidadeDeCruzeiro, autonomia, dadosEspecificos = {}) {
      // ATRIBUTOS DA CLASSE
      this.prefixoAeronave = prefixoAeronave; // PREFIXO DA AERONAVE
      this.tipoDeAeronave = tipoDeAeronave; // TIPO DA AERONAVE
      this.velocidadeDeCruzeiro = velocidadeDeCruzeiro; // VELOCIDADE DE CRUZEIRO DA AERONAVE
      this.autonomia = autonomia; // AUTONOMIA DA AERONAVE
      this.dadosEspecificos = dadosEspecificos; // DADOS ESPECIFICOS DA AERONAVE
  }

  // METODO STATIC PARA OBTER UMA AERONAVE POR PREFIXO NA LISTA DE AERONAVES
  static obterAeronavePorPrefixo(listaAeronaves, prefixoAeronave) {
      return listaAeronaves.find(aeronave => aeronave.prefixoAeronave === prefixoAeronave);
  }

  // METODO PARA VERIFICAR RESTRICOES DE HORARIO PARA AERONAVES
  verificarRestricoesHorario(horario) {
      if (this.tipoDeAeronave === "Particular") {
          return true; // NAO HA RESTRICOES DE HORARIO PARA AERONAVES PARTICULARES
      } else if (this.tipoDeAeronave === "Comercial de Passageiros") {
          // RESTRIÇÕES DE HORARIO PARA AERONAVES COMERCIAIS DE PASSAGEIROS
          if (horario >= 0 && horario < 6) {
              return false; // RESTRITO ENTRE 00:00 E 6:00
          }
      } else if (this.tipoDeAeronave === "Comercial de Carga") {
          // RESTRICOES DE HORARIO PARA AERONAVES COMERCIAIS DE CARGA
          if (horario >= 0 && horario < 6) {
              return false; // RESTRITO ENTRE 00:00 E 6:00
          }
      }
      return true; // SEM RESTRICOES DE HORARIO PARA OUTROS TIPOS DE AERONAVES
  }
}

// EXPORTA A CLASSE AERONAVE PARA QUE POSSA SER UTILIZADA EM OUTROS ARQUIVOS
module.exports = Aeronave;
