let infos = {
  nome: document.getElementById("nome"),
  idade: document.getElementById("idade"),
  cpf: document.getElementById("cpf"),
  dados_curso: {
    nome: document.getElementById("nome_do_curso"),
    numero_de_horas: document.getElementById("número_de_horas"),
  },
};

let dados_aluno = document.getElementById("dados_aluno");

let dados_aluno_resultado = `o nome do aluno especificado é: ${infos.nome},
 sua idade é: ${infos.idade},
 o nome do seu curso é: ${infos.dados_curso.nome},
e a quantidade de horas é: ${infos.dados_curso.numero_de_horas}.`;

dados_aluno.innerText = dados_aluno_resultado;

// array de notas

let Notas = document.getElementById("notas");

let Nota1 = document.getElementById("nota1");
let Nota2 = document.getElementById("nota2");
let Nota3 = document.getElementById("nota3");
let Nota4 = document.getElementById("nota4");

let mediaFinal =
  (Nota1.valueAsNumber +
    Nota2.valueAsNumber +
    Nota3.valueAsNumber +
    Nota4.valueAsNumber) /
  4;

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

let turma = Nome_dos_alunos.join(", ");

let Resultado2 = document.getElementById("turma");
let texto2 = `A turma é composta pelos alunos: ${turma}`;
Resultado2.innerText = texto2;
