class ServicoPilotos {
  // CONSTRUTOR DA CLASSE
  constructor() {
    // ATRIBUTO PARA ARMAZENAR OS PILOTOS
    this.pilotos = [];
    this.arquivoPilotos = 'pilotos.json';
  }

  // METODO PARA CADASTRAR UM PILOTO
  cadastrarPiloto(piloto) {
    this.pilotos.push(piloto); // ADICIONA O PILOTO A LISTA DE PILOTOS
    this.salvarPilotos(); // SALVA A LISTA DE PILOTOS NO ARQUIVO
  }

  salvarPilotos(){
    fs.writeFileSync(this.arquivoPilotos, JSON.stringify(this.pilotos));
  }

  carregarPilotos(){
    if (fs.existsSync(this.arquivoPilotos)){
        const data = fs.readFileSync(this.arquivoPilotos);
        this.pilotos = JSON.parse(data);
    }
  }

  // METODO PARA OBTEM TODOS OS PILOTOS
  obterTodosPilotos() {
    return this.pilotos; // RETORNA A LISTA DE TODOS OS PILOTOS
  }

  // METODO PARA OBTEM UM PILOTO POR MATRICULA
  obterPilotoPorMatricula(matricula) {
    return this.pilotos.find(piloto => piloto.matricPiloto === matricula); // RETORNA O PILOTO COM A MATRICULA ESPECIFICADA
  }

  // METODO PARA OBTEM OS PILOTOS HABILITADOS
  obterPilotosHabilitados() {
    return this.pilotos.filter(piloto => piloto.habilitacaoAtiva); // RETORNA OS PILOTOS COM HABILITACAO ATIVA
  }

  // METODO PARA ATUALIZAR A HABILITACAO DE UM PILOTO POR MATRICULA
  atualizarHabilitacaoPiloto(matricula, habilitacaoAtiva) {
    const piloto = this.obterPilotoPorMatricula(matricula); // OBTEM O PILOTO COM A MATRICULA ESPECIFICADA
    if (piloto) {
      piloto.habilitacaoAtiva = habilitacaoAtiva; // ATUALIZA O ESTADO DE HABILITACAO DO PILOTO
      console.log(`Habilitação do piloto ${matricula} atualizada para ${habilitacaoAtiva}`);
    } else {
      console.log(`Piloto com matrícula ${matricula} não encontrado.`); // EXIBE UMA MENSAGEM DE ERRO CASO O PILOTO NAO SEJA ENCONTRADO
    }
  }
}

// EXPORTA A CLASSE ServicoPilotos PARA QUE POSSA SER UTILIZADA EM OUTROS ARQUIVOS
module.exports = ServicoPilotos;
