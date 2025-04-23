const express = require('express');
const router = express.Router();

const Aluno = require('./controllers/aluno');

router.get('/',(req, res)=>{
    res.json({titulo:'TCC SENAI API'});
});

// router.post('/alunos',Aluno.create);
// router.get('/alunos',Aluno.read);
// router.patch('/alunos/:id',Aluno.update);
// router.delete('/alunos/:id',Aluno.remove);

module.exports = router;