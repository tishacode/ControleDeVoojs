class ServicoAeronaves {
  // CONSTRUTOR DA CLASSE
  constructor() {
    // ATRIBUTO PARA ARMAZENAR AS AERONAVES
    this.aeronaves = [];
  }

  // METODO PARA CADASTRAR UMA AERONAVE
  cadastrarAeronave(aeronave) {
    this.aeronaves.push(aeronave); // ADICIONA A AERONAVE A LISTA DE AERONAVES
  }

  // METODO PARA OBTÉM A LISTA DE AERONAVES
  obterListaAeronaves() {
    return this.aeronaves; // RETORNA A LISTA DE AERONAVES
  } 

  // METODO PARA OBTER UMA AERONAVE POR PREFIXO
  obterAeronavePorPrefixo(prefixo) {
    return this.aeronaves.find(aeronave => aeronave.prefixoAeronave === prefixo); // RETORNA A AERONAVE COM O PREFIXO ESPECIFICADO
  }
}

// EXPORTA A CLASSE ServicoAeronaves PARA QUE POSSA SER UTILIZADA EM OUTROS ARQUIVOS
module.exports = ServicoAeronaves;
