/* EXERCICIO 04 - RESPOSTA DE ACORDO COM AS CONDICIONAIS E CRITERIOS SELECIONADOS */

const http = require('http');   // buscando biblioteca nativa do Nodejs com funcoes de http
const url = require('url');     // buscando biblioteca nativa do Nodejs com funcoes de url

const hostname = '127.0.0.1';   // Endereço do próprio computador em uso - ou 'localhost'
const port = 3000;              // Porta usada pelo computador

const server = http.createServer((requisicao, resposta) => {       // Analisando as informacoes provenientes do endereco do site
  const urlAnalise = url.parse(requisicao.url, true);
  const parametrosConsulta = urlAnalise.query;

  console.log(requisicao.url);
  if (requisicao.url.startsWith('/bye')) {
     resposta.statusCode = 200;                                                           // Sinaliza que a resposta do servidor eh OK!
     resposta.setHeader('Content-Type', 'text/plain');                                    // estabelece o tipo de variavel
     resposta.end(`Tchau`);                                                               // mostra a resposta na tela
     return;
  }  else if (requisicao.url.startsWith('/hello')) {
     resposta.statusCode = 200;                                                           // Sinaliza que a resposta do servidor eh OK!
     resposta.setHeader('Content-Type', 'text/plain');                                    // estabelece o tipo de variavel
     resposta.end(`Hello ${parametrosConsulta.nome} ${parametrosConsulta.sobrenome}`);    // mostra a resposta na tela
     return;
 }   // Caso não encontre as consicoes das linhas IF e ELSE IF
     resposta.statusCode = 404;                                                           // Sinaliza que o site não foi encontrado
     resposta.setHeader('Content-Type', 'text/plain');                                    // estabelece o tipo de variavel
     resposta.end(`Pagina nao encontrada`);                            // mostra a resposta na tela
});

server.listen(port, hostname, () => {                                // mostra a informação no terminal
  console.log(`Server running at http://${hostname}:${port}/`);
}); 






/* EXERCICIO 03 - RESPOSTA DE ACORDO COM AS INFORMACOES NO ENDERECO DO SITE E CRITERIOS SELECIONADOS

const http = require('http');   // buscando biblioteca nativa do Nodejs com funcoes de http
const url = require('url');     // buscando biblioteca nativa do Nodejs com funcoes de url

const hostname = '127.0.0.1';   // Endereço do próprio computador em uso - ou 'localhost'
const port = 3000;              // Porta usada pelo computador

const server = http.createServer((requisicao, resposta) => {       // Analisando as informacoes provenientes do endereco do site
  const urlParse = url.parse(requisicao.url, true);
  const parametrosConsulta = urlParse.query;
  console.log(JSON.stringify(parametrosConsulta));

  resposta.statusCode = 200;                                                           // Sinaliza que a resposta do servidor eh OK!
  resposta.setHeader('Content-Type', 'text/plain');                                    // estabelece o tipo de variavel
  resposta.end(`Hello ${parametrosConsulta.nome} ${parametrosConsulta.sobrenome}`);    // mostra a resposta na tela
});

server.listen(port, hostname, () => {                                // mostra a informação no terminal
  console.log(`Server running at http://${hostname}:${port}/`);
}); */





/* EXERCICIO 02 - RESPOSTA DE ACORDO COM AS INFORMACOES NO ENDERECO DO SITE 
const http = require('http');   // buscando biblioteca nativa do Nodejs com funcoes de http
const url = require('url');     // buscando biblioteca nativa do Nodejs com funcoes de url

const hostname = '127.0.0.1';   // Endereço do próprio computador em uso
const port = 3000;              // Porta usada pelo computador

const server = http.createServer((requisicao, resposta) => {
  const parametrosConsulta = url.parse(requisicao.url, true);   // Busca todos os dados do site
  console.log(parametrosConsulta)
  
  resposta.statusCode = 200;                            // Sinaliza que a resposta do servidor eh OK!
  resposta.setHeader('Content-Type', 'text/plain');     // estabelece o tipo de variavel
  resposta.end(`Hello Teste`);                          // mostra a resposta na tela
});

server.listen(port, hostname, () => {                              // mostra a informação no terminal
  console.log(`Server running at http://${hostname}:${port}/`);
}); */

/* ANALISE DOS PARAMETROS ANALISADOS PELA URL

   protocolo: http | https
   hostname: 127.0.0.1 | localhost | gi.globo.com
   porta: 3000 | 80 (padrao http) | 443 (padrao https) | variacao de 1 a 65535
   path | rota: vem apos o endereço do site ...com.br/____/?nom...  e antes do pto de interrogacao
   search: vem após o ponto de interrogacao ....../?chave=valor&chave=valor

*/





/* EXERCICIO 01 - RESPOSTA GENÉRICA 
const http = require('http');   // buscando biblioteca nativa do Nodejs com funcoes de http

const hostname = '127.0.0.1';   // Endereço do próprio computador em uso
const port = 3000;              // Porta usada pelo computador

const server = http.createServer((req, res) => {
  res.statusCode = 200;                            // Sinaliza que a resposta do servidor eh OK!
  res.setHeader('Content-Type', 'text/plain');     // estabelece o tipo de variavel
  res.end(`Hello Teste`);                          // mostra a resposta na tela
});

server.listen(port, hostname, () => {                              // mostra a informação no terminal
  console.log(`Server running at http://${hostname}:${port}/`);
});*/

