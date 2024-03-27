const ServicoPlanoDeVoo = require('./ServicoPlanoDeVoo');

describe('ServicoPlanoDeVoo', () => {
    test('Deve cadastrar um plano de voo corretamente', () => {
        // Arrange
        const servicoPlanoDeVoo = new ServicoPlanoDeVoo();
        const planosDeVoo = {
            matriculaPiloto: 'NTLEO',
            prefixoAeronave: 'A3000',
            idAerovia: 'AOP',
            dataDoVoo: '2024-03-10',
            horarioDoVoo: ['10:00', '11:00'],
            altitude: 30000
        };

        // Act
        const idPlanoDeVoo = servicoPlanoDeVoo.cadastrarPlanoDeVoo(planosDeVoo);

        // Assert
        expect(idPlanoDeVoo).toBeDefined();
        expect(servicoPlanoDeVoo.planosDeVoo).toHaveLength(1);
        expect(servicoPlanoDeVoo.planosDeVoo[0]).toEqual(expect.objectContaining(planosDeVoo));
    });
});
