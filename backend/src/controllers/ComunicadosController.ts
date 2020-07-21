import { Request, Response } from 'express';
import comunicados from './samples/comunicados';

let indice = 2;

class ComunicadosController {

  async list(request: Request, response: Response) {
    return response.json(comunicados);
  }

  async find(request: Request, response: Response) {
    const { id } = request.params;
    const comunicadoLoaded = comunicados.find(comunicado => comunicado.id == Number(id));
    return response.json(comunicadoLoaded);
  }

  async insert(request: Request, response: Response) {
    const data = request.body;
    const comunicado = {
      id: ++indice,
      assunto: data.assunto,
      descricao: data.descricao
    };
    comunicados.push(comunicado);
    return response.json(comunicado);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    var index = comunicados.findIndex(comunicado => comunicado.id == Number(id));
    comunicados.splice(index, 1);
    return response.json("Comunicado excluído com sucesso.");
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { assunto, descricao } = request.body;

    let comunicadoLoaded = comunicados.find(comunicado => comunicado.id == Number(id));
    if (comunicadoLoaded) {
      comunicadoLoaded.assunto = assunto;
      comunicadoLoaded.descricao = descricao;
      return response.json({
        mensagem: "Comunicado alterado com sucesso.",
        livro: comunicadoLoaded
      });
    }
    return response.json("Comunicado não encontrado.");
  }
}

export default ComunicadosController;