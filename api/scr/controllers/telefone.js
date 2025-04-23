const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const telefone = await prisma.telefone.create({
            data: {
                numero: req.body.numero,
                tipo: req.body.tipo,
                aluno: {
                    connect: { id: req.body.alunoID}
                }
            }
        });
        return res.status(201).json(telefone);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const read = async (req, res) => {
    const telefones = await prisma.telefone.findMany();
    return res.json(telefones);
}

const readOne = async (req, res) => {
    const telefone = await prisma.telefone.findUnique({
        where: {
            id: Number(req.params.id)
        },
        include: {
            aluno: true
        }
    });
    return res.json(telefone);
};

const update = async (req, res) => {
    try {
        const telefone = await prisma.telefone.update({
            where: {
                id: Number(req.params.id)
            },
            data: req.body
        });
        return res.status(202).json(telefone);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const remove = async (req, res) => {
    try {
        const telefone = await prisma.telefone.delete({
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