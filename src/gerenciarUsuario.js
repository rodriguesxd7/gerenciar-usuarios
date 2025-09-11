const usuarios =
    [
        {
            nome: 'bruno',
            email: 'rodriguesxd7@hotmail.com'
        },
        {
            nome: 'tati',
            email: 'tati@hotmail.com'
        },
        {
            nome: 'anastacia',
            email: 'anastacia@hotmail.com'
        }
    ]

function retornaUsuario() {
    return usuarios;
};

function adicionaUsuario(usuario) {
    usuarios.push(usuario) //o push adiciona outro usuario dentro da lista
}

module.exports = {
    retornaUsuario,
    adicionaUsuario
}