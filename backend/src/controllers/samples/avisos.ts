export interface Aviso {
  id: number,
  tipo: string,
  descricao: string,
  professor: string
}

const avisos = <Aviso[]>[
  {
    id: 1,
    tipo: 'Reunião',
    descricao: 'Na próxima quinta-feira, dia 15, haverá a reunião mensal de pais e professores.',
    professor: 'Prof. Sabrina'
  },
  {
    id: 2,
    tipo: 'Apresentação',
    descricao: 'Senhores pais, sábado (26/06) teremos a apresentação do grupo de quadrilha.',
    professor: 'Prof. Cintia'
  }
  
];

export default avisos;