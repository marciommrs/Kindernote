import { Request, Response } from 'express';
import avisos from './samples/avisos';

let indice = 2;

class AvisosController {

  async list(request: Request, response: Response) {
    return response.json(avisos);
  }

  async find(request: Request, response: Response) {
    const { id } = request.params;
    const loaded = avisos.find(aviso => aviso.id == Number(id));
    return response.json(loaded);
  }

  async insert(request: Request, response: Response) {
    const data = request.body;
    const aviso = {
      id: ++indice,
      tipo: data.tipo,
      descricao: data.descricao,
      professor: data.professor
    };
    avisos.push(aviso);
    return response.json(aviso);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    var index = avisos.findIndex(aviso => aviso.id == Number(id));
    avisos.splice(index, 1);
    return response.json("Aviso excluído com sucesso.");
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { tipo, descricao, professor } = request.body;

    let loaded = avisos.find(aviso => aviso.id == Number(id));
    if (loaded) {
      loaded.tipo = tipo;
      loaded.descricao = descricao;
      loaded.professor = professor;
      return response.json({
        mensagem: "Aviso alterado com sucesso.",
        livro: loaded
      });
    }
    return response.json("Aviso não encontrado.");
  }
}

export default AvisosController;