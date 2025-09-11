//npx mocha = roda os testes
//npm init -y = inicia um projeto node
//npm i + nome da biblioteca = instala a nova biblioteca
//npm i + nome da biblioteca@versao - instala a nova biblioteca com uma versao especifica

const { retornaUsuario, adicionaUsuario } = require('../src/gerenciarUsuario.js')
const { expect } = require('chai')

describe("Testar as funcoes de gerenciamento de usuarios", function () {
    it('Validar que posso adicionar um novo nome de usuario na lista', function () {
        // 1 - adicionar novo nome, ou seja, chamar a funcao de adicionar
        adicionaUsuario(
            {
                nome: 'Thanos',
                email: 'thanos@hotmail.com'
            }
        );

        // 2 - validar que o nome foi adicionado, chamando a lista.
        const listaUsuarios = retornaUsuario();

        // 3 - validar que o novo nome esta no fim da lista de usuarios
       // expect(listaUsuarios.at(-1).nome).to.equal('Thanos') //o at[-1] retorna o ultimo item da lista
        expect(listaUsuarios.at(-1).nome).to.equal('Thanos')
    })
})