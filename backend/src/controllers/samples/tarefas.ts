export interface Tarefa {
  id: number,
  professor_id: number,
  turma_id: number,
  data: Date,
  materia_id: number,
  tema: string,
  descricao: string
  [others: string]: any
}

const tarefas = <Tarefa[]>[
  {
    id: 1,
    professor_id: 1,
    turma_id: 1,
    data: new Date(2020,7,22),
    materia_id: 1,
    tema: 'Vogais',
    descricao: 'Exercícios das páginas 31 e 31.'
  },
  {
    id: 2,
    professor_id: 2,
    turma_id: 2,
    data: new Date(2020,7,22),
    materia_id: 2,
    tema: 'Números até 10',
    descricao: 'Folha de tarefas enviada na pasta.'
  }
  
];

export default tarefas;