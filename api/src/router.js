const express = require('express');
const routes = express.Router();

const Aluno = require('./controllers/aluno');
const Professores = require('./controllers/professor');
const Telefone = require('./controllers/telefone');
const Turma = require('./controllers/turma');
const Matricula = require('./controllers/matricula');

// Rota inicial
routes.get('/', (req, res) => {
  return res.json({ titulo: 'TCC do Helio' });
});

// Rotas de Aluno
routes.post('/alunos', Aluno.create);
routes.get('/alunos', Aluno.read);
routes.get('/alunos/:id', Aluno.readOne);
routes.put('/alunos/:id', Aluno.update);
routes.patch('/alunos/:id', Aluno.update);
routes.delete('/alunos/:id', Aluno.remove);

// Rotas de Professores
routes.post('/professores', Professores.create);
routes.get('/professores', Professores.read);
routes.get('/professores/:id', Professores.readOne);
routes.put('/professores/:id', Professores.update);
routes.patch('/professores/:id', Professores.update);
routes.delete('/professores/:id', Professores.remove);

// Rotas de Telefone
routes.post('/telefone', Telefone.create);
routes.get('/telefone', Telefone.read);
routes.get('/telefone/:id', Telefone.readOne);
routes.put('/telefone/:id', Telefone.update);
routes.patch('/telefone/:id', Telefone.update);
routes.delete('/telefone/:id', Telefone.remove);

// Rotas de Turma
routes.post('/turmas', Turma.create);
routes.get('/turmas', Turma.read);
routes.get('/turmas/:id', Turma.readOne);
routes.put('/turmas/:id', Turma.update);
routes.patch('/turmas/:id', Turma.update);
routes.delete('/turmas/:id', Turma.remove);

// Rotas de Matricula
routes.post('/matricula', Matricula.create);
routes.get('/matricula', Matricula.read);
routes.get('/matricula/:id', Matricula.readOne);
routes.put('/matricula/:id', Matricula.update);
routes.patch('/matricula/:id', Matricula.update);
routes.delete('/matricula/:id', Matricula.remove);

module.exports = routes;
