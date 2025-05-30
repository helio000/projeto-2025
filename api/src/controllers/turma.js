const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const turma = await prisma.turma.create({
            data: {
                nome: req.body.nome,
                professor: {
                    connect: { id: req.body.professorID }
                }
            }
        });
        return res.status(201).json(turma);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const read = async (req, res) => {
    const turmas = await prisma.turma.findMany({
        include: {
            professor: true
        }
    });
    return res.json(turmas);
};

const readOne = async (req, res) => {
    const turma = await prisma.turma.findUnique({
        where: {
            id: Number(req.params.id)
        },
        include: {
            professor: true
        }
    });
    return res.json(turma);
};

const update = async (req, res) => {
    try {
        const turma = await prisma.turma.update({
            where: {
                id: Number(req.params.id)
            },
            data: req.body
        });
        return res.status(202).json(turma);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const remove = async (req, res) => {
    try {
        await prisma.turma.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        return res.status(204).send();
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

module.exports = {
    create,
    read,
    readOne,
    update,
    remove
};
