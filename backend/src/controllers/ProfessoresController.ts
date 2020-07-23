import { Request, Response } from 'express';
import itens from './samples/professores';

let indice = 2;

class ProfessoresController {

  static findItem(id: number) {
    return itens.find(item => item.id == id);
  }

  async list(request: Request, response: Response) {
    return response.json(itens);
  }

  async find(request: Request, response: Response) {
    const { id } = request.params;
    const loaded = itens.find(item => item.id == Number(id));
    return response.json(loaded);
  }

  async insert(request: Request, response: Response) {
    const data = request.body;
    const item = {
      id: ++indice,
      nome: data.nome,
      turmas_id: data.turma_id
    };
    itens.push(item);
    return response.json(item);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    var index = itens.findIndex(item => item.id == Number(id));
    itens.splice(index, 1);
    return response.json("professor excluído com sucesso.");
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { nome, turmas_id } = request.body;

    let loaded = itens.find(item => item.id == Number(id));
    if (loaded) {
      loaded.nome = nome;
      return response.json({
        mensagem: "Professor alterado com sucesso.",
        livro: loaded
      });
    }
    return response.json("Professor não encontrado.");
  }
}

export default ProfessoresController;