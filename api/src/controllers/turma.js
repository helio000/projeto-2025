const Turma = require('../controllers/turma');

const create = async (req, res) => {
    try {
        const turma = new Turma(req.body);
        await turma.save();
        res.status(201).json(turma);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const read = async (req, res) => {
    try {
        const turmas = await Turma.find();
        res.status(200).json(turmas);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const readOne = async (req, res) => {
    const { id } = req.params;
    try {
        const turma = await Turma.findById(id);
        if (!turma) return res.status(404).json({ error: 'Turma não encontrada' });
        res.status(200).json(turma);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const update = async (req, res) => {
    const { id } = req.params;
    try {
        const turma = await Turma.findByIdAndUpdate(id, req.body, { new: true });
        if (!turma) return res.status(404).json({ error: 'Turma não encontrada' });
        res.status(200).json(turma);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const remove = async (req, res) => {
    const { id } = req.params;
    try {
        const turma = await Turma.findByIdAndDelete(id);
        if (!turma) return res.status(404).json({ error: 'Turma não encontrada' });
        res.status(200).json({ message: 'Turma removida com sucesso' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { create, read, readOne, update, remove };
