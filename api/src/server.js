const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
  try {
    let { nome, email, telefone, datanasc, arteMarcial } = req.body;

    // Validação mínima
    if (!nome || !email || !telefone || !datanasc || !arteMarcial) {
      return res.status(400).json({ error: "Todos os campos são obrigatórios." });
    }

    // Valida a data de nascimento
    const dataValida = new Date(datanasc);
    if (isNaN(dataValida.getTime())) {
      return res.status(400).json({ error: "Data de nascimento inválida." });
    }

    // Verifica se já existe aluno com o mesmo e-mail
    const existingAluno = await prisma.aluno.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (existingAluno) {
      return res.status(400).json({ error: "Já existe um aluno cadastrado com este e-mail." });
    }

    const aluno = await prisma.aluno.create({
      data: {
        nome: nome.trim(),
        email: email.toLowerCase(),
        telefone: telefone.trim(),
        datanasc: dataValida, // envia como Date válida
        arteMarcial: arteMarcial.trim(),
      },
    });

    res.status(201).json(aluno);
  } catch (error) {
    console.error("Erro em create aluno:", error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

const read = async (req, res) => {
  try {
    const alunos = await prisma.aluno.findMany();
    res.status(200).json(alunos);
  } catch (error) {
    console.error("Erro em read alunos:", error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

const readOne = async (req, res) => {
  const { id } = req.params;
  try {
    const aluno = await prisma.aluno.findUnique({ where: { id: parseInt(id) } });
    if (!aluno) return res.status(404).json({ error: 'Aluno não encontrado' });
    res.status(200).json(aluno);
  } catch (error) {
    console.error("Erro em readOne aluno:", error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  try {
    let { nome, email, telefone, datanasc, arteMarcial } = req.body;

    const dataValida = datanasc ? new Date(datanasc) : undefined;
    if (datanasc && isNaN(dataValida.getTime())) {
      return res.status(400).json({ error: "Data de nascimento inválida." });
    }

    const aluno = await prisma.aluno.update({
      where: { id: parseInt(id) },
      data: {
        nome: nome?.trim(),
        email: email?.toLowerCase(),
        telefone: telefone?.trim(),
        datanasc: dataValida,
        arteMarcial: arteMarcial?.trim(),
      },
    });

    res.status(200).json(aluno);
  } catch (error) {
    console.error("Erro em update aluno:", error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.aluno.delete({ where: { id: parseInt(id) } });
    res.status(200).json({ message: 'Aluno removido com sucesso' });
  } catch (error) {
    console.error("Erro em remove aluno:", error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

const login = async (req, res) => {
  const { nome, email } = req.body;

  if (!nome || !email) {
    return res.status(400).json({ error: "Nome e e-mail são obrigatórios" });
  }

  try {
    const aluno = await prisma.aluno.findFirst({
      where: { nome: nome.trim(), email: email.toLowerCase() },
    });

    if (!aluno) {
      return res.status(401).json({ error: "Nome ou e-mail incorretos" });
    }

    res.status(200).json({ message: "Login realizado com sucesso!", aluno });
  } catch (error) {
    console.error("Erro em login aluno:", error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

module.exports = { create, read, readOne, update, remove, login };
