const Matricula = require('../controllers/matricula');

const create = async (req, res) => {
    try {
        const matricula = new Matricula(req.body);
        await matricula.save();
        res.status(201).json(matricula);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const read = async (req, res) => {
    try {
        const matriculas = await Matricula.find();
        res.status(200).json(matriculas);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const readOne = async (req, res) => {
    const { id } = req.params;
    try {
        const matricula = await Matricula.findById(id);
        if (!matricula) return res.status(404).json({ error: 'Matrícula não encontrada' });
        res.status(200).json(matricula);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const update = async (req, res) => {
    const { id } = req.params;
    try {
        const matricula = await Matricula.findByIdAndUpdate(id, req.body, { new: true });
        if (!matricula) return res.status(404).json({ error: 'Matrícula não encontrada' });
        res.status(200).json(matricula);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const remove = async (req, res) => {
    const { id } = req.params;
    try {
        const matricula = await Matricula.findByIdAndDelete(id);
        if (!matricula) return res.status(404).json({ error: 'Matrícula não encontrada' });
        res.status(200).json({ message: 'Matrícula removida com sucesso' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { create, read, readOne, update, remove };
