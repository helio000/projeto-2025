const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
  try {
    const { nome, email, telefone, datanasc, arteMarcial } = req.body;
    const dataNascimento = datanasc ? new Date(datanasc) : null;

    const aluno = await prisma.aluno.create({
      data: {
        nome,
        email: email.toLowerCase(),
        telefone,
        datanasc: dataNascimento,
        arteMarcial
      },
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
    const { nome, email, telefone, datanasc, arteMarcial } = req.body;
    const dataNascimento = datanasc ? new Date(datanasc) : null;

    const aluno = await prisma.aluno.update({
      where: { id: parseInt(id) },
      data: {
        nome,
        email: email.toLowerCase(),
        telefone,
        datanasc: dataNascimento,
        arteMarcial
      },
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

const login = async (req, res) => {
  const { nome, email } = req.body;

  if (!nome || !email) {
    return res.status(400).json({ error: "Nome e e-mail são obrigatórios" });
  }

  try {
    const aluno = await prisma.aluno.findFirst({
      where: {
        nome: nome.trim(),
        email: email.trim().toLowerCase(),
      }
    });

    if (!aluno) {
      return res.status(401).json({ error: "Nome ou e-mail incorretos" });
    }

    res.status(200).json({ message: "Login realizado com sucesso!", aluno });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { create, read, readOne, update, remove, login };
