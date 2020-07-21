import express from 'express';
import ComunicadosController from './controllers/ComunicadosController';
import AvisosController from './controllers/AvisosController';

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

export default routes;