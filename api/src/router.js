const express = require('express');
const routes = express.Router();

const Aluno = require('./controllers/aluno');
//const Professor = require('./controllers/professor');
const Telefone = require('./controllers/telefone');
//const Turma = require('./controllers/turma');
const Matricula = require('./controllers/matricula');

routes.get('/', (req, res) => {
  return res.json({ titulo: 'Escola Superior PW' });
});


routes.post('/alunos', Aluno.create);
routes.get('/alunos', Aluno.read);
routes.get('/alunos/:ra', Aluno.readOne);
routes.put('/alunos/:ra', Aluno.update);
routes.delete('/alunos/:ra', Aluno.remove);

/*
routes.post('/professores', Professor.create);
routes.get('/professores', Professor.read);
routes.get('/professores/:id', Professor.readOne);
routes.put('/professores/:id', Professor.update);
routes.delete('/professores/:id', Professor.remove);
*/

routes.post('/telefone', Telefone.create);
routes.get('/telefone', Telefone.read);
routes.get('/telefone/:id', Telefone.readOne);
routes.put('/telefone/:id', Telefone.update);
routes.delete('/telefone/:id', Telefone.remove);
/*
routes.post('/turmas', Turma.create);
routes.get('/turmas', Turma.read);
routes.get('/turmas/:id', Turma.readOne);
routes.put('/turmas/:id', Turma.update);
routes.delete('/turmas/:id', Turma.remove);
*/

routes.post('/matricula', Matricula.create);
routes.get('/matricula', Matricula.read);
routes.get('/matricula/:id', Matricula.readOne);
routes.put('/matricula/:id', Matricula.update);
routes.delete('/matricula/:id', Matricula.remove);

module.exports = routes;
