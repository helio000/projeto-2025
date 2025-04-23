const express = require('express');
const router = express.Router();

const Aluno = require('./controllers/aluno');
const Telefone = require('./controllers/telefone');
const Matricula = require('./controllers/matricula');

router.get('/',(req, res)=>{
    res.json({titulo:'tcc senai API'});
});

router.post('/alunos',Aluno.create);
router.get('/alunos',Aluno.read);
router.get('/alunos/:id',Aluno.readOne);
router.patch('/alunos/:id',Aluno.update);
router.delete('/alunos/:id',Aluno.remove);

router.post('/telefones',Telefone.create);
router.get('/telefones',Telefone.read);
router.get('/telefones/:id',Telefone.readOne);
router.patch('/telefones/:id',Telefone.update);
router.delete('/telefones/:id',Telefone.remove);

router.post('/matriculas',Matricula.create);
router.get('/matriculas',Matricula.read);
router.get('/matriculas/:id',Matricula.readOne);
router.patch('/matriculas/:id',Matricula.update);
router.delete('/matriculas/:id',Matricula.remove);

module.exports = router;