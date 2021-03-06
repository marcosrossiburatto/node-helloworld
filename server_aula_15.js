/* Calcule a média de nota de cada aluno e imprima o seguinte resultado:
       Aluno: Tiago dos Santos - Matemática - Média Final: 5.9 - Status: Reprovado
       Aluno: Alex Carneiro - Matemática - Média Final: 9.9 - Status: Aprovado 
*/

/* Regras de negócio:
      1. Para calcular a média final, some as 4 notas e divida por 4 (média ponderada).
      2. Para preencher o Status, utilize a seguinte regra:
         Se Média Final < 7, Status = Reprovado, senão, Status = Aprovado
*/

/* Rotina Tiago na aula 17 */

const sala = [
    aluno = {
        nome: "Tiago dos Santos",
        disciplina: "Matemática",
        notas: [ 6.5, 4.3, 7.1, 5.0]
    },
    aluno = {
        nome: "Alex Carneiro",
        disciplina: "Matemática",
        notas: [ 7.5, 8.3, 9.1, 10.0]
    }
];

for (let index = 0; index < sala.length; index++) {
    // var aprovado = false;
    var aluno = sala[index];
    var somaDasNotas = 0;

    for (let indexNota = 0; indexNota < aluno.notas.length; indexNota++) {
        somaDasNotas += aluno.notas[indexNota];
    }
    var mediaAluno = somaDasNotas / 4;

    //aprovado = mediaAluno >= 6;      // pode ser tb var statusAluno = mediaAluno >= 6 ? "Aprovado" : "Reprovado"

    console.log(`Aluno: ${aluno.nome} - ${aluno.disciplina} - Média final: ${mediaAluno} - Status: ${mediaAluno >= 6 ? "Aprovado" : "Reprovado"}`); 
}


/* Rotina Marcos

const classe = [
    aluno = {
        nome: "Tiago dos Santos",
        disciplina: "Matemática",
        notas: [ 6.5, 4.3, 6.1, 7.0]
    },
    aluno = {
        nome: "Alex Carneiro",
        disciplina: "Matemática",
        notas: [ 7.5, 8.3, 9.1, 10.0]
    },
    aluno = {
        nome: "Marcos Buratto",
        disciplina: "Matemática",
        notas: [ 7.0, 8.1, 9.5, 9.0]
    },
];

for (let i = 0; i < classe.length; i++){
    let soma = 0;
    let media = 0;
    let notas;
    for (let a = 0; a < classe[i].notas.length; a++) {
        notas = classe[i].notas[a];
        soma += notas;
        media = (soma / classe[i].notas.length).toFixed(2);
    }

    if (media >= 6) {
        console.log(`Aluno: ${classe[i].nome} - ${classe[i].disciplina} - Média final: ${media} - Status: Aprovado`); 
    } else {
        console.log(`Aluno: ${classe[i].nome} - ${classe[i].disciplina} - Média final: ${media} - Status: Reprovado`); 
    }
}*/


/* Rotina feita durante a aula 15 

const media = 7;                         // Guarda na memoria o valor limite da aprovacao - utilizado a variavel constante, devido o valor ser fixo

const sala = [                           // abertura de uma variável contendo todos os dados dos alunos - Tipo Array
    aluno = {                            // Dados do aluno 01 (indice 0)
        nome: "Tiago dos Santos",
        disciplina: "Matemática",
        notas: [ 6.5, 4.3, 7.1, 9.0]
    },
    aluno = {
        nome: "Alex Carneiro",           // Dados do aluno 02 (indice 1)
        disciplina: "Matemática",
        notas: [ 7.5, 8.3, 9.1, 10.0]
    }
];

console.log('Média: ' + media);          // mostra no terminal o conteudo da variavel media (constante de corte e não dos alunos)

console.log(sala);                       // mostra no terminal todos os conteudos de todos os alunos constantes na variavel 'sala'
console.log(sala[0]);                    // mostra todos os dados do primeiro registro da variavel 'sala' (indice 0)
console.log(sala[1]);                    // mostra todos os dados do segundo registro da variavel 'sala' (indice 1)
console.log(sala[2]);                    // solicitando que mostre o conteudo de uma variavel que não existe (indice 2) e ver que o resultado será "undefined"

const aluno1 = sala[0];                  // coloca na variavel aluno1 todos os dados do primeiro aluno da sala
const aluno2 = sala[1];                  // coloca na variavel aluno2 todos os dados do segundo aluno da sala


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


/* Rotina do aluno Thalles Diógenes - Funciona para N Alunos e N notas

const listaAlunos = [  
        {
        nome: "Tiago dos Santos",
        disciplina: "Matemática",
        notas: [ 6.5, 4.3, 7.1, 9.0]
    },
    {
        nome: "Alex Carneiro",
        disciplina: "Matemática",
        notas: [ 7.5, 8.3, 9.1, 10.0]
    }
];

for (let i = 0; i < listaAlunos.length; i++){
    let soma = 0;
    let media;
    for (let j = 0; j < listaAlunos[i].notas.length; j++) {
        let nota = listaAlunos[i].notas[j];
        soma += nota;
        media = soma / listaAlunos[i].notas.length;
    }

    if (media >= 6) {
        console.log(`Aluno: ${listaAlunos[i].nome} - ${listaAlunos[i].disciplina} - Média final: ${media} - Status: Aprovado!`); 
    } else {
        console.log(`Aluno: ${listaAlunos[i].nome} - ${listaAlunos[i].disciplina} - Média final: ${media} - Status: Reprovado!`); 
    }
} */


/* Rotina do aluno Carlos Funciona para N Alunos e 4 notas

var sala = [  
        aluno = {
                nome: "Tiago dos Santos",
                disciplina: "Matemática",
                notas: [ 6.5, 4.3, 7.1, 4.0]
                },
        aluno = {
                nome: "Alex Carneiro",
                disciplina: "Matemática",
                notas: [ 7.5, 8.3, 9.1, 10.0]
                }
           ];

for (let i = 0; i < sala.length; i++){
        let media = (sala[i].notas[0] + sala[i].notas[1] + sala[i].notas[2] + sala[i].notas[3])/4;

        //let status = media<6 ? "Reprovado" : "Aprovado";
        console.log(`Aluno: ${sala[i].nome} - ${sala[i].disciplina} - Média final: ${media} - Status: ${media < 6 ? "Reprovado" : "Aprovado!"}`); 
        media = 0;
    } 
    */


/* Rotina do aluno Leopoldo Barbato - Funciona para N Alunos e N notas

const mediaDeCorte = 6;

const herois = [  
    aluno = {
        nome: "Tiago dos Santos",
        disciplina: "Matemática",
        notas: [6.5, 4.3, 6.1, 6.0]
    },
    aluno = {
        nome: "Alex Carneiro",
        disciplina: "Matemática",
        notas: [ 7.5, 8.3, 9.1, 10.0]
    }
];

for (let h = 0; h < herois.length; h++){
    let soma = 0;
    let media = 0;
    for (let n = 0; n < herois[h].notas.length; n++){
        let nota = herois[h].notas[n];
        soma += nota;
        media = soma / herois[h].notas.length;
    }

    let status = "Indefinido";
    if (media < mediaDeCorte) {
        status = "Reprovado"
    } else {
        status = "Aprovado"
    }
    console.log(`--------- \r\nAluno: ${herois[h].nome} - Disciplina: ${herois[h].disciplina} - Média Final: ${media} - Condição: ${status}\r\n---------`)
}
*/
