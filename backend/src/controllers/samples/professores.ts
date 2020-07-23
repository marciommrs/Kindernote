export interface Professor {
  id: number,
  nome: string,
  turmas_id: number[]
}

const professores = <Professor[]>[
  {
    id: 1,
    nome: 'Sabrina',
    turmas_id: [1]
  },
  {
    id: 2,
    nome: 'Cintia',
    turmas_id: [2]
  }
  
];

export default professores;