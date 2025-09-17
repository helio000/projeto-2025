const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Função para criar um aluno
const create = async (req, res) => {
  try {
    const { nome, email, telefone, datanasc, arteMarcial } = req.body;

    // Validação dos campos obrigatórios
    if (!nome || !email || !telefone || !arteMarcial) {
      return res.status(400).json({ error: 'Nome, e-mail, telefone e arte marcial são obrigatórios.' });
    }

    // Validando formato de data, se 'datanasc' não for vazio, converte para Date
    let dataNascimento = null;
    if (datanasc) {
      dataNascimento = new Date(datanasc);
      if (isNaN(dataNascimento)) {
        return res.status(400).json({ error: 'Data de nascimento inválida.' });
      }
    }

    // Verificar se o email já existe no banco de dados
    const alunoExistente = await prisma.aluno.findUnique({
      where: { email: email.toLowerCase() }
    });
    if (alunoExistente) {
      return res.status(400).json({ error: 'Já existe um aluno cadastrado com esse e-mail.' });
    }

    // Criar o novo aluno
    const aluno = await prisma.aluno.create({
      data: {
        nome,
        email: email.toLowerCase(), // Garantir que o email esteja em minúsculas
        telefone,
        datanasc: dataNascimento,
        arteMarcial
      },
    });

    res.status(201).json(aluno);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// Função para ler todos os alunos
const read = async (req, res) => {
  try {
    const alunos = await prisma.aluno.findMany();
    res.status(200).json(alunos);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

// Função para ler um aluno específico
const readOne = async (req, res) => {
  const { id } = req.params;
  try {
    const aluno = await prisma.aluno.findUnique({
      where: { id: parseInt(id) },
    });
    if (!aluno) return res.status(404).json({ error: 'Aluno não encontrado' });
    res.status(200).json(aluno);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

// Função para atualizar um aluno
const update = async (req, res) => {
  const { id } = req.params;
  try {
    const { nome, email, telefone, datanasc, arteMarcial } = req.body;

    // Validação dos campos obrigatórios
    if (!nome || !email || !telefone || !arteMarcial) {
      return res.status(400).json({ error: 'Nome, e-mail, telefone e arte marcial são obrigatórios.' });
    }

    // Validando formato de data
    let dataNascimento = null;
    if (datanasc) {
      dataNascimento = new Date(datanasc);
      if (isNaN(dataNascimento)) {
        return res.status(400).json({ error: 'Data de nascimento inválida.' });
      }
    }

    // Verificando se o email já existe para outro aluno
    const alunoExistente = await prisma.aluno.findUnique({
      where: { email: email.toLowerCase() }
    });
    if (alunoExistente && alunoExistente.id !== parseInt(id)) {
      return res.status(400).json({ error: 'Já existe um aluno com esse e-mail.' });
    }

    // Atualizando o aluno
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
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// Função para remover um aluno
const remove = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.aluno.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json({ message: 'Aluno removido com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

// Função para realizar login
const login = async (req, res) => {
  const { nome, email } = req.body;

  // Verificando se os campos obrigatórios estão presentes
  if (!nome || !email) {
    return res.status(400).json({ error: 'Nome e e-mail são obrigatórios' });
  }

  try {
    const aluno = await prisma.aluno.findFirst({
      where: {
        nome: nome.trim(),
        email: email.trim().toLowerCase(),
      }
    });

    if (!aluno) {
      return res.status(401).json({ error: 'Nome ou e-mail incorretos' });
    }

    res.status(200).json({ message: 'Login realizado com sucesso!', aluno });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { create, read, readOne, update, remove, login };
