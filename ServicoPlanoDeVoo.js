const Aerovia = require('./Aerovia');

class ServicoPlanoDeVoo {
    constructor() {
        this.planosDeVoo = []; // Alteração no nome do array para "planosDeVoo"
        this.aerovias = []; // Alteração no nome do array para "aerovias"
    }

    cadastrarPlanoDeVoo(planoDeVoo) {
      const idPlanoDeVoo = this.planosDeVoo.length + 1; // Atribui um novo ID incremental
      planoDeVoo.idPlanoDeVoo = idPlanoDeVoo; // Atribui o ID ao plano de voo
      this.planosDeVoo.push(planoDeVoo); // Adiciona o plano de voo ao array
      return idPlanoDeVoo; // Retorna o ID do plano de voo cadastrado
    }

    obterPlanoDeVooPorId(idPlanoDeVoo) {
        const plano = this.planosDeVoo.find(plano => plano.idPlanoDeVoo === idPlanoDeVoo); // Alteração no nome da variável para "plano"
        if (plano) {
            console.log("Plano de voo encontrado:");
            console.log(plano);
        } else {
            console.log(`Plano de voo com ID ${idPlanoDeVoo} não encontrado.`);
        }
        return plano;
    }

    listarPlanosPorData(data) {
        const planosFiltrados = this.planosDeVoo.filter(plano => plano.dataDoVoo === data && plano.statusVoo === 'aprovado');
        const planosFormatados = planosFiltrados.map(plano => {
            const origem = Aerovia.obterOrigemPorId(this.aerovias, plano.idAerovia);
            const destino = Aerovia.obterDestinoPorId(this.aerovias, plano.idAerovia);
            return {
                id: plano.idPlanoDeVoo,
                origem: origem,
                destino: destino
            };
        });
        console.log(`Planos de voo para a data ${data}:`);
        console.log(planosFormatados);
        return planosFormatados;
    }

    listarOcupacaoAeroviaPorData(aerovia, data) {
        const planosFiltrados = this.planosDeVoo.filter(plano => plano.idAerovia === aerovia && plano.dataDoVoo === data && plano.statusVoo === 'aprovado');
        const planosFormatados = planosFiltrados.map(plano => ({
            id: plano.idPlanoDeVoo,
            origem: plano.origem,
            destino: plano.destino
        }));
        console.log(`Ocupação da aerovia ${aerovia} para a data ${data}:`);
        console.log(planosFormatados);
        return planosFormatados;
    }

    listarAeroviasEntreAeroportos(origem, destino) {
        return this.planosDeVoo
            .filter(plano => plano.origem === origem && plano.destino === destino)
            .map(plano => plano.aerovia);
    }

    listarAltitudesLivresNaAerovia(aerovia, horario) {
        const altitudesOcupadas = this.planosDeVoo
            .filter(plano => plano.aerovia === aerovia && plano.horarios.includes(horario))
            .map(plano => plano.altitude);

        const altitudesLivres = [];
        for (let altitude = 25000; altitude <= 35000; altitude += 1000) {
            if (!altitudesOcupadas.includes(altitude)) {
                altitudesLivres.push(altitude);
            }
        }
        return altitudesLivres;
    }

  

    cancelarPlanoDeVoo(idPlanoDeVoo) {
      const index = this.planosDeVoo.findIndex(plano => plano.idPlanoDeVoo === idPlanoDeVoo);
      if (index !== -1) {
          this.planosDeVoo[index].statusVoo = 'cancelado';
          console.log(`Plano de voo com ID ${idPlanoDeVoo} cancelado com sucesso.`);
      } else {
          console.log(`Plano de voo com ID ${idPlanoDeVoo} não encontrado.`);
      }
    }

    submeterPlanoDeVoo(planoDeVoo) { // Alteração no nome do parâmetro para "planoDeVoo"
        // Verificar se todas as propriedades necessárias estão presentes
        if (!planoDeVoo.matriculaPiloto || 
            !planoDeVoo.prefixoAeronave || 
            !planoDeVoo.dataDoVoo || 
            !planoDeVoo.horarios || 
            !planoDeVoo.aerovia || 
            !planoDeVoo.altitude) 
        {
            console.log('Por favor, forneça todas as informações necessárias para submeter o plano de voo.');
            return null;
        }

        // Verificar se a altitude é segura
        if (planoDeVoo.altitude < 25000 || planoDeVoo.altitude > 35000) {
            console.log('Altitude fora da faixa permitida.');
            return null;
        }

        // Verificar se o piloto está habilitado
        const piloto = servicoPilotos.obterPilotoPorMatricula(planoDeVoo.matriculaPiloto);
        if (!piloto || !piloto.habilitado) {
            console.log('O piloto responsável pelo voo não está habilitado.');
            return null;
        }

        // Verificar se a aeronave tem autonomia suficiente
        const aeronave = servicoAeronaves.obterAeronavePorPrefixo(planoDeVoo.prefixoAeronave);
        if (!aeronave || aeronave.autonomia < calcularDistancia(planoDeVoo.aerovia)) {
            console.log('A aeronave não tem autonomia suficiente para voar o trecho.');
            return null;
        }

        // Verificar se a aerovia está livre nos horários solicitados
        const aerovia = planoDeVoo.aerovia;
        const horarios = planoDeVoo.horarios;
        const altitudesLivres = this.listarAltitudesLivresNaAerovia(aerovia, horarios[0]); // Verifica apenas o primeiro horário
        if (altitudesLivres.length === 0) {
            console.log('Não há altitudes livres na aerovia nos horários solicitados.');
            return null;
        }
      
        // Atribuir um identificador numérico para o plano de voo
        const idPlanoDeVoo = this.planosDeVoo.length + 1;
        planoDeVoo.idPlanoDeVoo = idPlanoDeVoo;

        // Marcar a aerovia/altitude como ocupada nos horários indicados
        this.marcarAeroviaAltitudeOcupadas(planoDeVoo);

        // Cadastrar o plano de voo no sistema
       this.cadastrarPlanoDeVoo(planoDeVoo);

        console.log(`Plano de voo com ID ${idPlanoDeVoo} submetido com sucesso.`);
        return idPlanoDeVoo;
  }

}

module.exports = ServicoPlanoDeVoo;
