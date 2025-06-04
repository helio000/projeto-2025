const Telefone = require('../controllers/telefone');

const create = async (req, res) => {
    try {
        const telefone = new Telefone(req.body);
        await telefone.save();
        res.status(201).json(telefone);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const read = async (req, res) => {
    try {
        const telefones = await Telefone.find();
        res.status(200).json(telefones);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const readOne = async (req, res) => {
    const { id } = req.params;
    try {
        const telefone = await Telefone.findById(id);
        if (!telefone) return res.status(404).json({ error: 'Telefone não encontrado' });
        res.status(200).json(telefone);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const update = async (req, res) => {
    const { id } = req.params;
    try {
        const telefone = await Telefone.findByIdAndUpdate(id, req.body, { new: true });
        if (!telefone) return res.status(404).json({ error: 'Telefone não encontrado' });
        res.status(200).json(telefone);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const remove = async (req, res) => {
    const { id } = req.params;
    try {
        const telefone = await Telefone.findByIdAndDelete(id);
        if (!telefone) return res.status(404).json({ error: 'Telefone não encontrado' });
        res.status(200).json({ message: 'Telefone removido com sucesso' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { create, read, readOne, update, remove };
