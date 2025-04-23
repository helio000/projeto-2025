const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const matricula = await prisma.matricula.create({
            data: {
                aluno: {
                    connect: { id: req.body.alunoID}
                }
            }
        });
        return res.status(201).json(matricula);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}


const read = async (req, res) => {
    const matriculas = await prisma.matricula.findMany();
    return res.json(matriculas);
}

const readOne = async (req, res) => {
    const matricula = await prisma.matricula.findUnique({
        where: {
            id: Number(req.params.id)
        },
        include: {
            aluno: true
        }
    });
    return res.json(matricula);
};

const update = async (req, res) => {
    try {
        const matricula = await prisma.matricula.update({
            where: {
                id: Number(req.params.id)
            },
            data: req.body
        });
        return res.status(202).json(matricula);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const remove = async (req, res) => {
    try {
        const matricula = await prisma.matricula.delete({
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