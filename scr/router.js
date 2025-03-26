const express = require('express');
const router = express.Router();

const aluno = require('./controllers/aluno');
const Telefone = require('./controllers/telefone');
const matricula = require('./controllers/matricula');

router.get('/',(req, res)=>{
    res.json({titulo:'tcc senai API'});
});

router.post('/aluno',aluno.create);
router.get('/aluno',aluno.read);
router.get('/aluno/:id',aluno.readOne);
router.patch('/aluno/:id',aluno.update);
router.delete('/aluno/:id',aluno.remove);

router.post('/telefone',Telefone.create);
router.get('/telefone',Telefone.read);
router.patch('/telefone/:id',Telefone.update);
router.delete('/telefone/:id',Telefone.remove);

router.post('/matricula',matricula.create);
router.get('/matricula',matricula.read);
router.get('/matricula/:id',matricula.readOne);
router.patch('/matricula/:id',matricula.update);
router.delete('/matricula/:id',matricula.remove);

module.exports = router;