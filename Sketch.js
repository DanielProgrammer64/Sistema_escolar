let infos = {
  nome: "Daniel Sansão",
  idade: 16,
  peso: 71.3,
  altura_metros: 1.77,
};

let Curso = prompt("Insira aqui o curso");

let Resultado1 = document.getElementById("dados_aluno");

let texto = `o nome do aluno especificado é ${infos.nome}
 sua idade é ${infos.idade} 
 seu peso é ${infos.peso} 
 sua altura é de ${infos.altura_metros} Metros 
 e seu curso é ${Curso} `;

Resultado1.innerText = texto;

// array de notas

let Notas = [Number, Number, Number, Number];

Notas[0] = prompt("insira aqui a nota 1");
Notas[1] = prompt("insira aqui a nota 2");
Notas[2] = prompt("insira aqui a nota 3");
Notas[3] = prompt("insira aqui a nota 4");

console.info(Notas);

// nome dos alunos

let Nome_dos_alunos = [
  "Daniele",
  "Felipe",
  "Júlio",
  "Franco",
  "Marcos",
  "Júlia",
  "Sansão",
  "Maicon",
];

let turma = Nome_dos_alunos.join(', ');

let Resultado2 = document.getElementById("turma");
let texto2 = `A turma é composta pelos alunos: ${turma}`;
Resultado2.innerText = texto2;

console.info(window.innerHeight, window.innerWidth);
alert("esta página está em funcionamento");
