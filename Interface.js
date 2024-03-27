const readline = require('readline');
const ServicoPlanoDeVoo = require('./ServicoPlanoDeVoo');

class Interface {
    constructor() {
        this.servicoPlanoDeVoo = new ServicoPlanoDeVoo();
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    iniciar() {
        console.log('Bem-vindo ao sistema de controle de plano de voo.');

        this.menuPrincipal();
    }

    menuPrincipal() {
        console.log('Selecione uma opção:');
        console.log('1. Cadastrar Plano de Voo');
        console.log('2. Outra Opção');
        console.log('3. Sair');

        this.rl.question('Opção: ', (opcao) => {
            switch (opcao) {
                case '1':
                    this.cadastrarPlanoDeVoo();
                    break;
                case '2':
                    // Implemente outras opções do menu aqui
                    break;
                case '3':
                    this.sair();
                    break;
                default:
                    console.log('Opção inválida.');
                    this.menuPrincipal();
            }
        });
    }

    cadastrarPlanoDeVoo() {
        console.log('--- CADASTRAR PLANO DE VOO ---');
        this.rl.question('Matrícula do Piloto: ', (matriculaPiloto) => {
            this.rl.question('Prefixo da Aeronave: ', (prefixoAeronave) => {
                
                const planoDeVoo = {
                    matriculaPiloto: matriculaPiloto,
                    prefixoAeronave: prefixoAeronave,
                    
                };
                this.servicoPlanoDeVoo.cadastrarPlanoDeVoo(planoDeVoo);
                console.log('Plano de voo cadastrado com sucesso.');
                this.menuPrincipal();
            });
        });
    }

    sair() {
        console.log('Saindo do sistema. Até logo!');
        this.rl.close();
    }
}

module.exports = Interface;
