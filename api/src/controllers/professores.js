const Professor = require('../controllers/professores');

const create = async (req, res) => {
    try {
        const professor = new Professor(req.body);
        await professor.save();
        res.status(201).json(professor);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const read = async (req, res) => {
    try {
        const professores = await Professor.find();
        res.status(200).json(professores);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const readOne = async (req, res) => {
    const { id } = req.params;
    try {
        const professor = await Professor.findById(id);
        if (!professor) return res.status(404).json({ error: 'Professor não encontrado' });
        res.status(200).json(professor);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const update = async (req, res) => {
    const { id } = req.params;
    try {
        const professor = await Professor.findByIdAndUpdate(id, req.body, { new: true });
        if (!professor) return res.status(404).json({ error: 'Professor não encontrado' });
        res.status(200).json(professor);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const remove = async (req, res) => {
    const { id } = req.params;
    try {
        const professor = await Professor.findByIdAndDelete(id);
        if (!professor) return res.status(404).json({ error: 'Professor não encontrado' });
        res.status(200).json({ message: 'Professor removido com sucesso' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { create, read, readOne, update, remove };
