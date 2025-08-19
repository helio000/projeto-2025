const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const create = async (req, res) => {
  try {
    const aluno = await prisma.aluno.create({
      data: req.body,
    });
    res.status(201).json(aluno);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const read = async (req, res) => {
  try {
    const alunos = await prisma.aluno.findMany();
    res.status(200).json(alunos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const readOne = async (req, res) => {
  const { id } = req.params;
  try {
    const aluno = await prisma.aluno.findUnique({
      where: { id: parseInt(id) },
    });
    if (!aluno) return res.status(404).json({ error: 'Aluno não encontrado' });
    res.status(200).json(aluno);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  try {
    const aluno = await prisma.aluno.update({
      where: { id: parseInt(id) },
      data: req.body,
    });
    res.status(200).json(aluno);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.aluno.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json({ message: 'Aluno removido com sucesso' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { create, read, readOne, update, remove };
