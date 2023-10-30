const alunos = [
  {
    nome: "Mathias",
    notas: [
      { cadeira: "DW2", nota: 10 },
      { cadeira: "BD2", nota: 7 },
    ],
  },
  {
    nome: "Luiza",
    notas: [
      { cadeira: "DW2", nota: 8 },
      { cadeira: "BD2", nota: 8 },
    ],
  },
  {
    nome: "Pedro",
    notas: [
      { cadeira: "DW2", nota: 10 },
      { cadeira: "BD2", nota: 10 },
    ],
  },
];

const alunosComMediaGeral = alunos.map((aluno) => {
  const totalNotas = aluno.notas.reduce(
    (acumulador, nota) => acumulador + nota.nota,
    0
  );
  const mediaGeral = totalNotas / aluno.notas.length;

  return {
    ...aluno,
    mediaGeral: mediaGeral,
  };
});

console.log(JSON.stringify(alunosComMediaGeral, undefined, 1));
