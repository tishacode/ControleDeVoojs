const ServicoPlanoDeVoo = require('./ServicoPlanoDeVoo');
const Interface = require('./Interface');

const servicoPlanoDeVoo = new ServicoPlanoDeVoo();
const interface = new Interface(servicoPlanoDeVoo);

interface.iniciar();