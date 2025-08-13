const express = require('express');
const routes = express.Router();

const Aluno = require('./controllers/aluno');
const Professores = require('./controllers/professores');
const Telefone = require('./controllers/telefone');
const Turma = require('./controllers/turma');
const Matricula = require('./controllers/matricula');


routes.get('/', (req, res) => {
  return res.json({ titulo: 'TCC do helio' });
});

routes.post('/alunos', Aluno.create);
routes.get('/alunos', Aluno.read);
routes.get('/alunos/:ra', Aluno.readOne);
routes.patch('/alunos/:ra', Aluno.update);
routes.put('/alunos/:ra', Aluno.update);
routes.delete('/alunos/:ra', Aluno.remove);

routes.post('/professores', Professores.create);
routes.get('/professores', Professores.read);
routes.get('/professores/:id', Professores.readOne);

routes.patch('/professores/:id', Professores.update);
routes.put('/professores/:id', Professores.update);
routes.delete('/professores/:id', Professores.remove);

routes.post('/telefone', Telefone.create);
routes.get('/telefone', Telefone.read);
routes.get('/telefone/:id', Telefone.readOne);

routes.patch('/telefone/:id', Telefone.update);
routes.put('/telefone/:id', Telefone.update);
routes.delete('/telefone/:id', Telefone.remove);

routes.post('/turmas', Turma.create);
routes.get('/turmas', Turma.read);
routes.get('/turmas/:id', Turma.readOne);
routes.patch('/turmas/:id', Turma.update);
routes.put('/turmas/:id', Turma.update);
routes.delete('/turmas/:id', Turma.remove);


routes.post('/matricula', Matricula.create);
routes.get('/matricula', Matricula.read);
routes.get('/matricula/:id', Matricula.readOne);
routes.patch('/matricula/:id', Matricula.update);
routes.delete('/matricula/:id', Matricula.remove);

module.exports = routes;
routes.put('/matricula/:id', Matricula.update);
routes.delete('/matricula/:id', Matricula.remove);

module.exports = routes;

