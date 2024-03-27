const Piloto = require("./Piloto");
const ServicoPilotos = require("./ServicoPilotos");
const Aeronave = require("./Aeronave");
const ServicoAeronaves = require("./ServicoAeronaves");
const Aerovia = require("./Aerovia");
const ServicoAerovias = require("./ServicoAerovias");
const PlanoDeVoo = require("./PlanoDeVoo");
const ServicoPlanoDeVoo = require("./ServicoPlanoDeVoo");


const servicoPilotos = new ServicoPilotos();
const servicoAeronaves = new ServicoAeronaves();
const servicoAerovias = new ServicoAerovias();
const servicoPlanoDeVoo = new ServicoPlanoDeVoo();




console.log("INICIO DO PROGRAMA");
console.log("----");

//PILOTO
console.log("--PILOTOS--");
const piloto1 = new Piloto("NTLEO", "Sofia Leon", true);
const piloto2 = new Piloto("DKFOF", "Thais Zizon", false);
const piloto3 = new Piloto("FJNJN", "João Nunes", true);
servicoPilotos.cadastrarPiloto(piloto1);
servicoPilotos.cadastrarPiloto(piloto2);
servicoPilotos.cadastrarPiloto(piloto3);
console.log("Todos os Pilotos:");
console.log(servicoPilotos.obterTodosPilotos());
console.log("----");
console.log("----");

//BUSCA PILOTO POR MATRICULA
console.log("--PILOTO POR MATRICULA--");
const pilotoEncontrado = servicoPilotos.obterPilotoPorMatricula("NTLEO");
console.log("Piloto encontrado por matricula:");
console.log(pilotoEncontrado);
console.log("----");
console.log("----");

//UPDATE HABILITACAO
console.log("--UPDATE HABILITACAO--");
servicoPilotos.atualizarHabilitacaoPiloto("DKFOF", true);
console.log("Pilotos apos atualizacao de habilitacao:");
console.log(servicoPilotos.obterTodosPilotos());
console.log("----");
console.log("----");

//AERONAVE
console.log("--AERONAVE--");
const aeronaveParticular = new Aeronave("PP-XPTO", "Particular", 300, 1500, { empresaManutencao: "ABC Manutenção" });
const aeronaveComercialPassageiros = new Aeronave("PR-1234", "Comercial", 800, 3000, { companhiaAerea: "XPTO Airlines", capacidadePassageiros: 150 });
const aeronaveComercialCarga = new Aeronave("PP-5678", "Carga", 600, 2000, { companhiaAerea: "Transportadora ABC", pesoMaximoCarga: 20 });
servicoAeronaves.cadastrarAeronave(aeronaveParticular);
servicoAeronaves.cadastrarAeronave(aeronaveComercialPassageiros);
servicoAeronaves.cadastrarAeronave(aeronaveComercialCarga);
console.log("Lista de Aeronaves:");
console.log(servicoAeronaves.obterListaAeronaves());
console.log("----");
console.log("----");

//AERONAVE POR PREFIXO
console.log("--AERONAVE POR PREFIXO (um prefixo por vez)--");
const prefixoAeronave = "PP-XPTO";
const aeronaveEncontrada = servicoAeronaves.obterAeronavePorPrefixo(prefixoAeronave);
  if (aeronaveEncontrada) {
    console.log("Aeronave encontrada por prefixo:");
    console.log(aeronaveEncontrada);
    console.log("----");
    console.log("----");
    
    //RESTRICOES DE HORARIO
    console.log("--RESTRICOES DE HORARIO--");
    const possuiRestricoes = aeronaveEncontrada.verificarRestricoesHorario("12:00");
    console.log("Aeronave possui restricoes de horario:");
    console.log(possuiRestricoes);
    console.log("----");
    console.log("----");
} else {
    console.log(`Aeronave com prefixo ${prefixoAeronave} não encontrada.`);
}


//AEROVIA
console.log("--AEROVIAS--");
const aerovia1 = new Aerovia("AOP", "Curitiba", "Sao Paulo", 10000);
const aerovia2 = new Aerovia("CHH", "Sao Paulo", "Brasilia", 6000);
servicoAerovias.cadastrarAerovia(aerovia1);
servicoAerovias.cadastrarAerovia(aerovia2);
console.log("Lista de Aerovias:");
console.log(servicoAerovias.obterListaAerovias());
console.log("----");
console.log("----");

// AEROVIAS ENTRE AEROPORTOS
console.log("--AEROVIAS ENTRE AEROPORTOS--");
const origem = "Curitiba";
const destino = "Sao Paulo";
const aeroviasEntreAeroportos = servicoAerovias.obterAeroviasEntreAeroportos(origem, destino);
if (aeroviasEntreAeroportos.length > 0) {
    console.log(`Aerovias entre ${origem} e ${destino}:`);
    console.log(aeroviasEntreAeroportos);
} else {
    console.log(`Não foram encontradas aerovias entre ${origem} e ${destino}.`);
}
console.log("----");
console.log("----");

// PLANO DE VOO
console.log("--PLANOS DE VOO--");
const planoDeVoo1 = new PlanoDeVoo(1, "NTLEO", "PP-XPTO", "AOP", "2024-03-10", "10:00", 30000, ["10:00", "11:00"], "aprovado");
const planoDeVoo2 = new PlanoDeVoo(2, "DKFOF", "PR-1234", "CHH", "2024-03-10", "12:00", 25000, ["12:00", "13:00"], "pendente");
const planoDeVoo3 = new PlanoDeVoo(3, "NTLEO", "PP-5678", "AOP", "2024-03-10", "14:00", 35000, ["14:00", "15:00"], "aprovado"); 
servicoPlanoDeVoo.cadastrarPlanoDeVoo(planoDeVoo1);
servicoPlanoDeVoo.cadastrarPlanoDeVoo(planoDeVoo2);
servicoPlanoDeVoo.cadastrarPlanoDeVoo(planoDeVoo3);
console.log("Todos os Planos de Voo:");
console.log(servicoPlanoDeVoo.planosDeVoo);
console.log("----");
console.log("----");

// LISTAR PLANOS POR DATA
console.log("--LISTAR PLANOS POR DATA--");
const dataParaListar = "2024-03-10";
const planosPorData = servicoPlanoDeVoo.listarPlanosPorData(dataParaListar);
if (planosPorData.length > 0) {
    console.log(`Planos de Voo para ${dataParaListar}:`);
    console.log(planosPorData);
} else {
    console.log(`Não foram encontrados planos de voo para ${dataParaListar}.`);
}
console.log("----");
console.log("----");

// CANCELAR PLANO DE VOO
console.log("--CANCELAR PLANO DE VOO--");
const idPlanoVooParaCancelar = 3; // Substitua pelo ID do plano de voo que deseja cancelar
servicoPlanoDeVoo.cancelarPlanoDeVoo(idPlanoVooParaCancelar);
console.log("----");

console.log("----");

console.log("FIM DO PROGRAMA");