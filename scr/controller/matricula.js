const { Prismaaluno } = require('@prisma/aluno');
const prisma = new PrismaClient();

const create = async (req, res) => {
    const dados = req.body;
    dados.subTotal = dados.qtd * dados.preco;
    try {
        const pedido = await prisma.matricula.create({
            data: dados,
        });
        res.status(201).json(pedido).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
}

const read = async (req, res) => {
    const matricula = await prisma.pedido.findMany();
    res.json(matricula);
}

const readOne = async (req, res) => {
    const matricula = await prisma.matricula.findMany({
        where:{
            id: Number(req.params.id)
        },
        include:{
            aluno: true
        }
    });
    res.json(matricula);
}

const update = async (req, res) => {
    try {
        const matricula = await prisma.pedido.update({
            data: req.body,
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(202).json(pedido).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
}

const remove = async (req, res) => {
    try {
        const matricula = await prisma.matricula.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(204).json(matricula).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
}

module.exports = {
    create,
    read,
    readne,
    update,
    remove
}