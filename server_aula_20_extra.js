const express = require('express');
const app = express();
const port = 3000;

const sala = [
    {
        nome: "Tiago dos Santos",
        disciplina: "Matemática",
        notas: [ 6.5, 4.3, 7.1, 5.0]
    },
    {
        nome: "Alex Carneiro",
        disciplina: "Matemática",
        notas: [ 7.5, 8.3, 9.1, 10.0]
    },
    {
        nome: "Tiago da Costa",
        disciplina: "Poruguês",
        notas: [ 6.5, 4.3, 7.1, 5.0]
    },
    {
        nome: "Alexandre Silva",
        disciplina: "Matemática",
        notas: [ 7.5, 8.3, 9.1, 10.0]
    }
];

app.get('/sala/:numeroAluno', (requisicao, resposta) => {
    const aluno = sala[requisicao.params.numeroAluno - 1];
    resposta.send(aluno);
});

app.get('/busca', (requisicao, resposta) => {
    const termoBusca = requisicao.query.nome.toLowerCase();
    let resultados = [];

    for (let indice = 0; indice < sala.length; indice++) {
        if (sala[indice].nome.toLowerCase().includes(termoBusca)) {
            resultados.push(sala[indice]);
        }
    }

    if (resultados.length == 0) {
        resposta.status(404).send('Nenhum aluno encontrado');
    }

    return resposta.send(resultados);
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});