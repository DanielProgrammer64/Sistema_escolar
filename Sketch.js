let infos = {
  nome: "Daniel Sansão",
  idade: 16,
  peso: 71.3,
  altura_metros: 1.77,
};

let Curso = prompt("Insira aqui o curso");

let Resultado = document.getElementById("resultado");

let texto = `o nome do aluno é ${infos.nome}
 sua idade é ${infos.idade} 
 seu peso é ${infos.peso} 
 sua altura é de ${infos.altura_metros} Metros 
 e seu curso é ${Curso} `;

Resultado.innerText = texto;

console.info(window.innerHeight, window.innerWidth);
alert("esta página está em funcionamento");
