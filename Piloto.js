class Piloto {
  // CONSTRUTOR DA CLASSE PILOTO
  constructor(matricPiloto, nomePiloto, habilitacaoAtiva) {
    // ATRIBUTOS DA CLASSE
    this.matricPiloto = matricPiloto; // MATRICULA DO PILOTO
    this.nomePiloto = nomePiloto; // NOME DO PILOTO
    this.habilitacaoAtiva = habilitacaoAtiva; // HABILITACAO ATIVA DO PILOTO
  }

  // METODO ESTATICO PARA OBTER UM PILOTO POR MATRICULA
  static obterPilotoPorMatricula(listaPilotos, matricula) {
    return listaPilotos.find(piloto => piloto.matricPiloto === matricula); // RETORNA O PILOTO COM A MATRICULA ESPECIFICADA
  }

  // METODO ESTATICO PARA ATUALIZAR A HABILITACAO DE UM PILOTO
  static atualizarHabilitacaoPiloto(listaPilotos, matricula, habilitacaoAtiva) {
    const piloto = listaPilotos.find(piloto => piloto.matricPiloto === matricula); // ENCONTRA O PILOTO COM A MATRICULA ESPECIFICADA
    if (piloto) { // SE O PILOTO FOI ENCONTRADO
      piloto.habilitacaoAtiva = habilitacaoAtiva; // ATUALIZA O ESTADO DA HABILITACAO DO PILOTO
      return true; // RETORNA VERDADEIRO
    }
    return false; // SE O PILOTO NAO FOI ENCONTRADO, RETORNA FALSO
  }
}

// EXPORTA A CLASSE PILOTO PARA QUE POSSA SER UTILIZADA EM OUTROS ARQUIVOS
module.exports = Piloto;
