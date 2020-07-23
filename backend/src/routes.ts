import express from 'express';
import ComunicadosController from './controllers/ComunicadosController';
import AvisosController from './controllers/AvisosController';
import TarefasController from './controllers/TarefasController';
import TurmasController from './controllers/TurmasController';
import ProfessoresController from './controllers/ProfessoresController';
import MateriasController from './controllers/MateriasController';

const routes = express.Router();

const comunicadosController = new ComunicadosController();
routes.get('/comunicados', comunicadosController.list);
routes.get('/comunicados/:id', comunicadosController.find);
routes.post('/comunicados', comunicadosController.insert);
routes.delete('/comunicados/:id', comunicadosController.delete);
routes.put('/comunicados/:id', comunicadosController.update);

const avisosController = new AvisosController();
routes.get('/avisos', avisosController.list);
routes.get('/avisos/:id', avisosController.find);
routes.post('/avisos', avisosController.insert);
routes.delete('/avisos/:id', avisosController.delete);
routes.put('/avisos/:id', avisosController.update);

const tarefasController = new TarefasController();
routes.get('/tarefas', tarefasController.list);
routes.get('/tarefas/:id', tarefasController.find);
routes.post('/tarefas', tarefasController.insert);
routes.delete('/tarefas/:id', tarefasController.delete);
routes.put('/tarefas/:id', tarefasController.update);

const turmasController = new TurmasController();
routes.get('/turmas', turmasController.list);

const professoresController = new ProfessoresController();
routes.get('/professores', professoresController.list);

const materiasController = new MateriasController();
routes.get('/materias', materiasController.list);

export default routes;