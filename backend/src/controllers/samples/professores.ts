export interface Professor {
  id: number,
  nome: string,
  tratamento: string,
  turmas_id: number[],
  [others: string]: any
}

const professores = <Professor[]>[
  {
    id: 1,
    nome: 'Sabrina',
    tratamento: 'Profª.',
    turmas_id: [1]
  },
  {
    id: 2,
    nome: 'Cintia',
    tratamento: 'Profª.',
    turmas_id: [2]
  }
  
];

export default professores;