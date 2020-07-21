export interface Comunicado {
  id: number,
  assunto: string,
  descricao: string
}

const comunicados = <Comunicado[]>[
  {
    id: 1,
    assunto: 'Dia dos Pais',
    descricao: `Comunicamos aos pais e/ou responsáveis que a celebração do dia dos pais será realizada no próximo domingo.`
  },
  {
    id: 2,
    assunto: 'Matrículas para acampamento de férias',
    descricao: `Comunicamos aos pais e/ou responsáveis que as matrículas para o acampamento de férias estão abertas.`
  }
  
];

export default comunicados;