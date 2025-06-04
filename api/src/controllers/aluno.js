const Aluno = require('../controllers/aluno'); 
const create = async (req, res) => {
    try {
        const aluno = new Aluno(req.body);
        await aluno.save();
        res.status(201).json(aluno);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const read = async (req, res) => {
    try {
        const alunos = await Aluno.find();
        res.status(200).json(alunos);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const readOne = async (req, res) => {
    const { ra } = req.params;
    try {
        const aluno = await Aluno.findOne({ matricula: ra });
        if (!aluno) {
            return res.status(404).json({ error: 'Aluno não encontrado' });
        }
        res.status(200).json(aluno);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const update = async (req, res) => {
    const { ra } = req.params;
    try {
        const aluno = await Aluno.findOneAndUpdate({ matricula: ra }, req.body, { new: true });
        if (!aluno) {
            return res.status(404).json({ error: 'Aluno não encontrado' });
        }
        res.status(200).json(aluno);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const remove = async (req, res) => {
    const { ra } = req.params;
    try {
        const aluno = await Aluno.findOneAndDelete({ matricula: ra });
        if (!aluno) {
            return res.status(404).json({ error: 'Aluno não encontrado' });
        }
        res.status(200).json({ message: 'Aluno removido com sucesso' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { create, read, readOne, update, remove }; 
