/* Transferir os discos da torre A para a torre B */

/* Regras de negócio:
      1. Somente pode mudar um disco por vez;
      2. Nenhum disco de valor menor pode ficar embaixo de um disco de valor maior em qualquer uma das torres;
      3. Pode ser usada as 03 torres durante as transferências
*/

const tempoEspera = 10000;   // Guarda na memoria o valor do tempo de espera entre as mudanças
const disco_00 = 0;         // Valor atribuido ao disco 0 (não está presente na torre)
const disco_01 = 1;         // Valor atribuido ao disco 1
const disco_02 = 2;         // Valor atribuido ao disco 2
const disco_03 = 3;         // Valor atribuido ao disco 3
const disco_04 = 4;         // Valor atribuido ao disco 4
const disco_05 = 5;         // Valor atribuido ao disco 5

let hanoi = [                       // abertura de uma variável contendo todos os dados das Torres - Tipo Array
    torre = {                       // Dados da Torre A (indice 0)
        nome: "Torre A",
        discos: [ 1, 2, 3, 4, 5]
    },
    torre = {
        nome: "Torre B",            // Dados da Torre B (indice 1)
        discos: [ 0, 0, 0, 0, 0]
    },
    torre = {
        nome: "Torre C",            // Dados da Torre C (indice 2)
        discos: [ 0, 0, 0, 0, 0]
    }
];

console.log(hanoi);        // mostra no terminal todos os conteudos de todas as Torres constantes na variavel 'hanoi'
console.log(hanoi[0]);     // mostra todos os dados do primeiro registro da variavel 'hanoi' (indice 0)
console.log(hanoi[1]);     // mostra todos os dados do segundo registro da variavel 'hanoi' (indice 1)
console.log(hanoi[2]);     // mostra todos os dados do terceiro registro da variavel 'hanoi' (indice 2)

let torre1 = hanoi[0];     // coloca na variavel torreA todos os dados da primeira torre da variavel hanoi
let torre2 = hanoi[1];     // coloca na variavel torreA todos os dados da segunda torre da variavel hanoi
let torre3 = hanoi[2];     // coloca na variavel torreA todos os dados da terceira torre da variavel hanoi

function syncDelay(milliseconds){           // Criando uma função de tempo para poder mostrar cada mudança efetuada
    var start = new Date().getTime();
    var end=0;
    while( (end-start) < milliseconds){
        end = new Date().getTime();
    }
}

syncDelay(tempoEspera);           // Chamando a função tempo de espera - apresentar mudanca 01

hanoi[0].discos[0] = disco_00;    // Mudança nas Torres A e B - Nova Situação da Torre A - posição 0 (topo) está sem o disco 1
hanoi[1].discos[4] = disco_01;    //                            Nova Situação da Torre B - posição 4 (mais baixo) está com o disco 1

console.log();
console.log(hanoi[0]);            // mostra todos os dados do primeiro registro da variavel 'hanoi' (indice 0)
console.log();
console.log(hanoi[1]);            // mostra todos os dados do segundo registro da variavel 'hanoi' (indice 1)
console.log();
console.log(hanoi[2]);            // mostra todos os dados do terceiro registro da variavel 'hanoi' (indice 2)
console.log();

syncDelay(tempoEspera);           // Chamando a função tempo de espera - apresentar mudanca 02

hanoi[0].discos[1] = disco_00;    // Mudança nas Torres A e C - Nova Situação da Torre A - posição 1 está sem o disco 2 
hanoi[2].discos[4] = disco_02;    //                            Nova Situação da Torre C - posição 4 (mais baixo) está com o disco 2

console.log();
console.log(hanoi[0]);            // mostra todos os dados do primeiro registro da variavel 'hanoi' (indice 0)
console.log();
console.log(hanoi[1]);            // mostra todos os dados do segundo registro da variavel 'hanoi' (indice 1)
console.log();
console.log(hanoi[2]);            // mostra todos os dados do terceiro registro da variavel 'hanoi' (indice 2)
console.log();

syncDelay(tempoEspera);           // Chamando a função tempo de espera - apresentar mudanca 03

hanoi[1].discos[4] = disco_00;    // Mudança nas Torres B e C - Nova Situação da Torre B - todas posicoes vazias 
hanoi[2].discos[3] = disco_01;    //                            Nova Situação da Torre C - posição 3 está com o disco 1

console.log();
console.log(hanoi[0]);            // mostra todos os dados do primeiro registro da variavel 'hanoi' (indice 0)
console.log();
console.log(hanoi[1]);            // mostra todos os dados do segundo registro da variavel 'hanoi' (indice 1)
console.log();
console.log(hanoi[2]);            // mostra todos os dados do terceiro registro da variavel 'hanoi' (indice 2)
console.log();

syncDelay(tempoEspera);           // Chamando a função tempo de espera - apresentar mudanca 04

hanoi[0].discos[2] = disco_00;    // Mudança nas Torres A e B - Nova Situação da Torre A - posicao 2 está sem o disco 3 
hanoi[1].discos[4] = disco_03;    //                            Nova Situação da Torre B - posição 4 está com o disco 3

console.log();
console.log(hanoi[0]);            // mostra todos os dados do primeiro registro da variavel 'hanoi' (indice 0)
console.log();
console.log(hanoi[1]);            // mostra todos os dados do segundo registro da variavel 'hanoi' (indice 1)
console.log();
console.log(hanoi[2]);            // mostra todos os dados do terceiro registro da variavel 'hanoi' (indice 2)
console.log();

syncDelay(tempoEspera);           // Chamando a função tempo de espera - apresentar mudanca 05

hanoi[0].discos[2] = disco_01;    // Mudança nas Torres A e c - Nova Situação da Torre A - posicao 2 está sem o disco 1  
hanoi[2].discos[3] = disco_00;    //                            Nova Situação da Torre C - posição 3 está sem disco 

console.log();
console.log(hanoi[0]);            // mostra todos os dados do primeiro registro da variavel 'hanoi' (indice 0)
console.log();
console.log(hanoi[1]);            // mostra todos os dados do segundo registro da variavel 'hanoi' (indice 1)
console.log();
console.log(hanoi[2]);            // mostra todos os dados do terceiro registro da variavel 'hanoi' (indice 2)
console.log();

syncDelay(tempoEspera);           // Chamando a função tempo de espera - apresentar mudanca 06

hanoi[1].discos[3] = disco_02;    // Mudança nas Torres B e C - Nova Situação da Torre  - posicao 3 está com o disco 2  
hanoi[2].discos[4] = disco_00;    //                            Nova Situação da Torre  - posição 4 está sem o disco 

console.log();
console.log(hanoi[0]);            // mostra todos os dados do primeiro registro da variavel 'hanoi' (indice 0)
console.log();
console.log(hanoi[1]);            // mostra todos os dados do segundo registro da variavel 'hanoi' (indice 1)
console.log();
console.log(hanoi[2]);            // mostra todos os dados do terceiro registro da variavel 'hanoi' (indice 2)
console.log();

syncDelay(tempoEspera);           // Chamando a função tempo de espera - apresentar mudanca 07

hanoi[0].discos[2] = disco_00;    // Mudança nas Torres A e B - Nova Situação da Torre A - posicao 2 está sem o disco  
hanoi[1].discos[2] = disco_01;    //                            Nova Situação da Torre B - posição 2 está com o disco 1

console.log();
console.log(hanoi[0]);            // mostra todos os dados do primeiro registro da variavel 'hanoi' (indice 0)
console.log();
console.log(hanoi[1]);            // mostra todos os dados do segundo registro da variavel 'hanoi' (indice 1)
console.log();
console.log(hanoi[2]);            // mostra todos os dados do terceiro registro da variavel 'hanoi' (indice 2)
console.log();

syncDelay(tempoEspera);           // Chamando a função tempo de espera - apresentar mudanca 08

hanoi[0].discos[3] = disco_00;    // Mudança nas Torres A e C - Nova Situação da Torre A - posicao 3 está sem o disco  
hanoi[2].discos[4] = disco_04;    //                            Nova Situação da Torre C- posição 4 está com o disco 4

console.log();
console.log(hanoi[0]);            // mostra todos os dados do primeiro registro da variavel 'hanoi' (indice 0)
console.log();
console.log(hanoi[1]);            // mostra todos os dados do segundo registro da variavel 'hanoi' (indice 1)
console.log();
console.log(hanoi[2]);            // mostra todos os dados do terceiro registro da variavel 'hanoi' (indice 2)
console.log();

syncDelay(tempoEspera);           // Chamando a função tempo de espera - apresentar mudanca 09

hanoi[1].discos[2] = disco_00;    // Mudança nas Torres B e C - Nova Situação da Torre B - posicao 2 está sem o disco  
hanoi[2].discos[3] = disco_01;    //                            Nova Situação da Torre C - posição 3 está com o disco 1

console.log();
console.log(hanoi[0]);            // mostra todos os dados do primeiro registro da variavel 'hanoi' (indice 0)
console.log();
console.log(hanoi[1]);            // mostra todos os dados do segundo registro da variavel 'hanoi' (indice 1)
console.log();
console.log(hanoi[2]);            // mostra todos os dados do terceiro registro da variavel 'hanoi' (indice 2)
console.log();

syncDelay(tempoEspera);           // Chamando a função tempo de espera - apresentar mudanca 10

hanoi[0].discos[3] = disco_02;    // Mudança nas Torres A e B - Nova Situação da Torre A - posicao 3 está sem o disco 2
hanoi[1].discos[3] = disco_00;    //                            Nova Situação da Torre B - posição 3 está sem o disco 

console.log();
console.log(hanoi[0]);            // mostra todos os dados do primeiro registro da variavel 'hanoi' (indice 0)
console.log();
console.log(hanoi[1]);            // mostra todos os dados do segundo registro da variavel 'hanoi' (indice 1)
console.log();
console.log(hanoi[2]);            // mostra todos os dados do terceiro registro da variavel 'hanoi' (indice 2)
console.log();

syncDelay(tempoEspera);           // Chamando a função tempo de espera - apresentar mudanca 11

hanoi[0].discos[2] = disco_01;    // Mudança nas Torres A e C - Nova Situação da Torre A - posicao 2 está com o disco 1
hanoi[2].discos[3] = disco_00;    //                            Nova Situação da Torre C - posição 3 está com o disco 0

console.log();
console.log(hanoi[0]);            // mostra todos os dados do primeiro registro da variavel 'hanoi' (indice 0)
console.log();
console.log(hanoi[1]);            // mostra todos os dados do segundo registro da variavel 'hanoi' (indice 1)
console.log();
console.log(hanoi[2]);            // mostra todos os dados do terceiro registro da variavel 'hanoi' (indice 2)
console.log();

syncDelay(tempoEspera);           // Chamando a função tempo de espera - apresentar mudanca 12

hanoi[1].discos[4] = disco_00;    // Mudança nas Torres B e C - Nova Situação da Torre B - posicao 4 está com o disco 0
hanoi[2].discos[3] = disco_03;    //                            Nova Situação da Torre C - posição 3 está com o disco 3

console.log();
console.log(hanoi[0]);            // mostra todos os dados do primeiro registro da variavel 'hanoi' (indice 0)
console.log();
console.log(hanoi[1]);            // mostra todos os dados do segundo registro da variavel 'hanoi' (indice 1)
console.log();
console.log(hanoi[2]);            // mostra todos os dados do terceiro registro da variavel 'hanoi' (indice 2)
console.log();

syncDelay(tempoEspera);           // Chamando a função tempo de espera - apresentar mudanca 13

hanoi[0].discos[2] = disco_00;    // Mudança nas Torres A e B - Nova Situação da Torre A - posicao 2 está com o disco 0
hanoi[1].discos[4] = disco_01;    //                            Nova Situação da Torre B - posição 4 está com o disco 1

console.log();
console.log(hanoi[0]);            // mostra todos os dados do primeiro registro da variavel 'hanoi' (indice 0)
console.log();
console.log(hanoi[1]);            // mostra todos os dados do segundo registro da variavel 'hanoi' (indice 1)
console.log();
console.log(hanoi[2]);            // mostra todos os dados do terceiro registro da variavel 'hanoi' (indice 2)
console.log();

syncDelay(tempoEspera);           // Chamando a função tempo de espera - apresentar mudanca 14

hanoi[0].discos[3] = disco_00;    // Mudança nas Torres A e C - Nova Situação da Torre A - posicao 3 está com o disco 0
hanoi[2].discos[2] = disco_02;    //                            Nova Situação da Torre C - posição 2 está com o disco 2

console.log();
console.log(hanoi[0]);            // mostra todos os dados do primeiro registro da variavel 'hanoi' (indice 0)
console.log();
console.log(hanoi[1]);            // mostra todos os dados do segundo registro da variavel 'hanoi' (indice 1)
console.log();
console.log(hanoi[2]);            // mostra todos os dados do terceiro registro da variavel 'hanoi' (indice 2)
console.log();

syncDelay(tempoEspera);           // Chamando a função tempo de espera - apresentar mudanca 15

hanoi[1].discos[4] = disco_00;    // Mudança nas Torres B e C - Nova Situação da Torre B - posicao 4 está com o disco 0
hanoi[2].discos[1] = disco_01;    //                            Nova Situação da Torre C - posição 1 está com o disco 1

console.log();
console.log(hanoi[0]);            // mostra todos os dados do primeiro registro da variavel 'hanoi' (indice 0)
console.log();
console.log(hanoi[1]);            // mostra todos os dados do segundo registro da variavel 'hanoi' (indice 1)
console.log();
console.log(hanoi[2]);            // mostra todos os dados do terceiro registro da variavel 'hanoi' (indice 2)
console.log();

syncDelay(tempoEspera);           // Chamando a função tempo de espera - apresentar mudanca 16

hanoi[0].discos[4] = disco_00;    // Mudança nas Torres A e B - Nova Situação da Torre A - posicao 4 está com o disco 0
hanoi[1].discos[4] = disco_05;    //                            Nova Situação da Torre B - posição 4 está com o disco 5

console.log();
console.log(hanoi[0]);            // mostra todos os dados do primeiro registro da variavel 'hanoi' (indice 0)
console.log();
console.log(hanoi[1]);            // mostra todos os dados do segundo registro da variavel 'hanoi' (indice 1)
console.log();
console.log(hanoi[2]);            // mostra todos os dados do terceiro registro da variavel 'hanoi' (indice 2)
console.log();

syncDelay(tempoEspera);           // Chamando a função tempo de espera - apresentar mudanca 17

hanoi[0].discos[4] = disco_01;    // Mudança nas Torres A e C - Nova Situação da Torre A - posicao 4 está com o disco 1
hanoi[2].discos[1] = disco_00;    //                            Nova Situação da Torre C - posição 1 está com o disco 0

console.log();
console.log(hanoi[0]);            // mostra todos os dados do primeiro registro da variavel 'hanoi' (indice 0)
console.log();
console.log(hanoi[1]);            // mostra todos os dados do segundo registro da variavel 'hanoi' (indice 1)
console.log();
console.log(hanoi[2]);            // mostra todos os dados do terceiro registro da variavel 'hanoi' (indice 2)
console.log();

syncDelay(tempoEspera);           // Chamando a função tempo de espera - apresentar mudanca 18

hanoi[1].discos[3] = disco_02;    // Mudança nas Torres A e C - Nova Situação da Torre A - posicao 3 está com o disco 2
hanoi[2].discos[2] = disco_00;    //                            Nova Situação da Torre C - posição 2 está com o disco 0

console.log();
console.log(hanoi[0]);            // mostra todos os dados do primeiro registro da variavel 'hanoi' (indice 0)
console.log();
console.log(hanoi[1]);            // mostra todos os dados do segundo registro da variavel 'hanoi' (indice 1)
console.log();
console.log(hanoi[2]);            // mostra todos os dados do terceiro registro da variavel 'hanoi' (indice 2)
console.log();

syncDelay(tempoEspera);           // Chamando a função tempo de espera - apresentar mudanca 19

hanoi[0].discos[4] = disco_00;    // Mudança nas Torres A e B - Nova Situação da Torre A - posicao 4 está com o disco 0
hanoi[1].discos[2] = disco_01;    //                            Nova Situação da Torre B - posição 2 está com o disco 1

console.log();
console.log(hanoi[0]);            // mostra todos os dados do primeiro registro da variavel 'hanoi' (indice 0)
console.log();
console.log(hanoi[1]);            // mostra todos os dados do segundo registro da variavel 'hanoi' (indice 1)
console.log();
console.log(hanoi[2]);            // mostra todos os dados do terceiro registro da variavel 'hanoi' (indice 2)
console.log();

syncDelay(tempoEspera);           // Chamando a função tempo de espera - apresentar mudanca 20

hanoi[0].discos[4] = disco_03;    // Mudança nas Torres A e C - Nova Situação da Torre A - posicao 4 está com o disco 2 
hanoi[2].discos[3] = disco_00;    //                            Nova Situação da Torre C - posição 3 está com o disco 0 

console.log();
console.log(hanoi[0]);            // mostra todos os dados do primeiro registro da variavel 'hanoi' (indice 0)
console.log();
console.log(hanoi[1]);            // mostra todos os dados do segundo registro da variavel 'hanoi' (indice 1)
console.log();
console.log(hanoi[2]);            // mostra todos os dados do terceiro registro da variavel 'hanoi' (indice 2)
console.log();

syncDelay(tempoEspera);           // Chamando a função tempo de espera - apresentar mudanca 21

hanoi[1].discos[2] = disco_00;    // Mudança nas Torres B e C - Nova Situação da Torre B - posicao 2 está com o disco 0
hanoi[2].discos[3] = disco_01;    //                            Nova Situação da Torre C - posição 3 está com o disco 1

console.log();
console.log(hanoi[0]);            // mostra todos os dados do primeiro registro da variavel 'hanoi' (indice 0)
console.log();
console.log(hanoi[1]);            // mostra todos os dados do segundo registro da variavel 'hanoi' (indice 1)
console.log();
console.log(hanoi[2]);            // mostra todos os dados do terceiro registro da variavel 'hanoi' (indice 2)
console.log();

syncDelay(tempoEspera);           // Chamando a função tempo de espera - apresentar mudanca 

/*hanoi[].discos[] = disco_0;    // Mudança nas Torres  e  - Nova Situação da Torre  - posicao  está com o disco 
hanoi[].discos[] = disco_0;    //                            Nova Situação da Torre  - posição  está com o disco 

console.log();
console.log(hanoi[0]);            // mostra todos os dados do primeiro registro da variavel 'hanoi' (indice 0)
console.log();
console.log(hanoi[1]);            // mostra todos os dados do segundo registro da variavel 'hanoi' (indice 1)
console.log();
console.log(hanoi[2]);            // mostra todos os dados do terceiro registro da variavel 'hanoi' (indice 2)
console.log();*/






console.log('A partir deste ponto, vamos mostrar as mudanças');









/*

// Fazendo os cálculos para o Aluno 1
console.log(aluno1.nome);                // mostra o valor da variavel nome do aluno1
console.log(aluno1.disciplina);          // mostra o valor da variavel disciplina do aluno1
console.log(aluno1.notas);               // mostra o valor da variavel nota do aluno1

console.log(aluno1.notas[0]);            // mostra o valor da variavel primeira nota do aluno1
console.log(aluno1.notas[1]);            // mostra o valor da variavel segunda nota do aluno1
console.log(aluno1.notas[2]);            // mostra o valor da variavel terceira nota do aluno1
console.log(aluno1.notas[3]);            // mostra o valor da variavel quarta nota do aluno1

const somaNotasAluno1 = aluno1.notas[0] + aluno1.notas[1] + aluno1.notas[2] + aluno1.notas[3]      // coloca na variavel somaNotasAluno1 a soma das notas do aluno 1
console.log(somaNotasAluno1);                                                                      // mostra o valor da variavel somaNotasAluno1 a soma das notas do aluno 1

const mediaAluno1 = somaNotasAluno1 / 4            // coloca na variavel mediaAluno1 a soma das notas do aluno 1 dividido por 4 notas
console.log('Média aluno 1: ' + mediaAluno1);      // mostra o valor da variavel mediaAluno1 referente ao aluno 1

var statusAluno1 = '????';             // Cria uma variavel com o nome statusAluno1 e valor arbitrario (???)

if (mediaAluno1 < media) {             // Faz o teste se a média é maior ou igual a 7
    statusAluno1 = 'Reprovado';        // Se não for, reprova
} else {
    statusAluno1 = 'Aprovado';         // Se for, aprova.
};

console.log(statusAluno1);             // Mostra a situação do Aluno1 no terminal


// Fazendo os cálculos para o Aluno 2
console.log(aluno2.nome);                // mostra o valor da variavel nome do aluno2
console.log(aluno2.disciplina);          // mostra o valor da variavel disciplina do aluno2
console.log(aluno2.notas);               // mostra o valor da variavel nota do aluno2

console.log(aluno2.notas[0]);            // mostra o valor da variavel primeira nota do aluno2
console.log(aluno2.notas[1]);            // mostra o valor da variavel segunda nota do aluno2
console.log(aluno2.notas[2]);            // mostra o valor da variavel terceira nota do aluno2
console.log(aluno2.notas[3]);            // mostra o valor da variavel quarta nota do aluno2

const somaNotasAluno2 = aluno2.notas[0] + aluno2.notas[1] + aluno2.notas[2] + aluno2.notas[3]      // coloca na variavel somaNotasAluno2 a soma das notas do aluno 2
console.log(somaNotasAluno2);                                                                      // mostra o valor da variavel somaNotasAluno2 a soma das notas do aluno 2

const mediaAluno2 = somaNotasAluno2 / 4            // coloca na variavel mediaAluno1 a soma das notas do aluno 2 dividido por 4 notas
console.log('Média aluno 2: ' + mediaAluno2);      // mostra o valor da variavel mediaAluno2 referente ao aluno 2

var statusAluno2 = '????';             // Cria uma variavel com o nome statusAluno2 e valor arbitrario (???)

if (mediaAluno2 < media) {             // Faz o teste se a média é maior ou igual a 7
    statusAluno2 = 'Reprovado';        // Se não for, reprova
} else {
    statusAluno2 = 'Aprovado';         // Se for, aprova.
};

console.log(statusAluno2);             // Mostra a situação do Aluno2 no terminal


// Mostrando a situação dos alunos
console.log()                                                                                                                       // Linha vazia
console.log(`Aluno: ${aluno1.nome} - Disciplina: ${aluno1.disciplina} - Média Final: ${mediaAluno1} - Status: ${statusAluno1}`);    // Mostra a situação do Aluno2 no terminal com os dados
console.log()                                                                                                                       // Linha vazia
console.log(`Aluno: ${aluno2.nome} - Disciplina: ${aluno2.disciplina} - Média Final: ${mediaAluno2} - Status: ${statusAluno2}`);    // Mostra a situação do Aluno2 no terminal com os dados
console.log()                                                                                                                       // Linha vazia
*/