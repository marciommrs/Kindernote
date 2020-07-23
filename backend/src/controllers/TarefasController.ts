import { Request, Response } from 'express';
import tarefas from './samples/tarefas';

import ProfessoresController from '../controllers/ProfessoresController';
import TurmasController from '../controllers/TurmasController';
import MateriasController from '../controllers/MateriasController';

import DateFormater from '../util/DateFormatter';

let indice = 2;

class TarefasController {

  async list(request: Request, response: Response) {
    const tarefasFullLoaded = tarefas.map(item => {
      const professor = ProfessoresController.findItem(item.professor_id);
      const turma = TurmasController.findItem(item.turma_id);
      const materia = MateriasController.findItem(item.materia_id);
      return {
        ...item,
        professor_nome: professor?.nome,
        turma_descricao: turma?.descricao,
        materia_descricao: materia?.descricao,
        data_str: DateFormater.getFormattedDate(item.data)
      }
    })

    return response.json(tarefasFullLoaded);
  }

  async find(request: Request, response: Response) {
    const { id } = request.params;
    let loaded = tarefas.find(item => item.id == Number(id));

    if (loaded) {
      const professor = ProfessoresController.findItem(loaded.professor_id);
      const turma = TurmasController.findItem(loaded.turma_id);
      const materia = MateriasController.findItem(loaded.materia_id);
      loaded = {
        ...loaded,
        professor_nome: professor?.nome,
        turma_descricao: turma?.descricao,
        materia_descricao: materia?.descricao,
      }
    }

    return response.json(loaded);
  }

  async insert(request: Request, response: Response) {
    const data = request.body;
    const tarefa = {
      id: ++indice,
      professor_id: data.professor_id,
      turma_id: data.turma_id,
      data: data.data,
      materia_id: data.materia_id,
      tema: data
    };
    tarefas.push(tarefa);
    return response.json(tarefa);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    var index = tarefas.findIndex(item => item.id == Number(id));
    tarefas.splice(index, 1);
    return response.json("Tarefa excluída com sucesso.");
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { professor_id, turma_id, data, materia_id, tema } = request.body;

    let loaded = tarefas.find(item => item.id == Number(id));
    if (loaded) {
      loaded.professor_id = professor_id;
      loaded.turma_id = turma_id;
      loaded.data = data;
      loaded.materia_id = materia_id;
      loaded.tema = tema;
      return response.json({
        mensagem: "Tarefa alterada com sucesso.",
        livro: loaded
      });
    }
    return response.json("Tarefa não encontrado.");
  }
}

export default TarefasController;