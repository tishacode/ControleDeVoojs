class ServicoAerovias {
  // CONSTRUTOR DA CLASSE
  constructor() {
    // ATRIBUTO PARA ARMAZENAR AS AEROVIAS
    this.aerovias = [];
    this.arquivoAerovias = 'aerovias.json'; // Arquivo para armazenar as aerovias
  }

  // METODO PARA CADASTRAR UMA AEROVIA
  cadastrarAerovia(aerovia) {
    this.aerovias.push(aerovia); // ADICIONA A AEROVIA A LISTA DE AEROVIAS
    this.salvarAerovias(); // Após cadastrar, salvar no arquivo
  }

  salvarAerovias() {
      fs.writeFileSync(this.arquivoAerovias, JSON.stringify(this.aerovias));
  }

  carregarAerovias() {
      if (fs.existsSync(this.arquivoAerovias)) {
          const data = fs.readFileSync(this.arquivoAerovias);
          this.aerovias = JSON.parse(data);
      }
  }
  
  // METODO PARA OBTEM A LISTA DE AEROVIAS
  obterListaAerovias() {
    return this.aerovias; // RETORNA A LISTA DE AEROVIAS
  }

  // METODO PARA OBTER AEROVIAS ENTRE DOIS AEROPORTOS - Listar as aerovias existentes entre dois aeroportos.
  obterAeroviasEntreAeroportos(aeroportoOrigem, aeroportoDestino) {
    return this.aerovias.filter(aerovia => aerovia.aeroportoOrigem === aeroportoOrigem && aerovia.aeroportoDestino === aeroportoDestino); // RETORNA AS AEROVIAS QUE CONECTAM OS AEROPORTOS DE ORIGEM E DESTINO ESPECIFICADOS
  }

  // METODO PARA OBTER ALTITUDES LIVRES EM UMA AEROVIA EM UM DETERMINADO HORARIO
  obterAltitudesLivresEmAerovia(identificadorAerovia, horarioDoVoo) {
    const aerovia = this.aerovias.find(aerovia => aerovia.identificador === identificadorAerovia);
    if (aerovia) {
      const altitudesOcupadas = aerovia.voos
        .filter(voo => voo.horario === horarioDoVoo)
        .map(voo => voo.altitude);

      const altitudesDisponiveis = [];
      for (let altitude = aerovia.altitudeMinima; altitude <= aerovia.altitudeMaxima; altitude += 1000) {
        if (!altitudesOcupadas.includes(altitude)) {
          altitudesDisponiveis.push(altitude);
        }
      }
      return altitudesDisponiveis;
    } else {
      console.log(`Aerovia com identificador ${identificadorAerovia} não encontrada.`);
      return [];
    }
  }
}

// EXPORTA A CLASSE ServicoAerovias PARA QUE POSSA SER UTILIZADA EM OUTROS ARQUIVOS
module.exports = ServicoAerovias;
