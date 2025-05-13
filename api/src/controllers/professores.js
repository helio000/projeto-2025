const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const professor = await prisma.professor.create({
            data: {
                nome: req.body.nome,
                disciplina: req.body.disciplina,
                telefone: {
                    connect: { id: req.body.telefoneID }
                }
            }
        });
        return res.status(201).json(professor);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const read = async (req, res) => {
    const professores = await prisma.professor.findMany();
    return res.json(professores);
}

const readOne = async (req, res) => {
    const professor = await prisma.professor.findUnique({
        where: {
            id: Number(req.params.id)
        },
        include: {
            telefone: true
        }
    });
    return res.json(professor);
};

const update = async (req, res) => {
    try {
        const professor = await prisma.professor.update({
            where: {
                id: Number(req.params.id)
            },
            data: req.body
        });
        return res.status(202).json(professor);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const remove = async (req, res) => {
    try {
        const professor = await prisma.professor.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        return res.status(204).send();
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
}

module.exports = {
    create,
    read,
    readOne,
    update,
    remove
}
