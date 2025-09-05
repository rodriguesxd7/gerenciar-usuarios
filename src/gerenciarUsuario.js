const usuarios = ['bruno', 'tati', 'anastacia']

function retornaUsuario() {
    return usuarios;
};

function adicionaUsuario(nome) {
    usuarios.push(nome) //o push adiciona outro usuario dentro da lista
}

module.exports = {
    retornaUsuario,
    adicionaUsuario
}