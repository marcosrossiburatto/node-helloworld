// aprimoramento com o express da rotina do arquivo server_aula_14

const express = require('express');
const app = express();
const port = 3000;

/*app.get('/hello/:nome/:sobrenome', (requisicao, resposta) => {
    console.log(requisicao.params);
    resposta.send(`Hello ${requisicao.params.nome} ${requisicao.params.sobrenome}!`);
});*/

app.get('/hello', (requisicao, resposta) => {
    console.log(requisicao.query);
    const nome = requisicao.query.nome;
    const sobrenome = requisicao.query.sobrenome || '';
    resposta.send(`Hello ${nome} ${sobrenome}!`);
});

app.get('/bye', (requisicao, resposta) => {
    resposta.send('Tchau');
});

app.get('', (requisicao, resposta) => {
    resposta.send('sem informação');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
