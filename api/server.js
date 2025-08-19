require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./src/router');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

const PORT = process.env.PORT || 3100;

app.use(cors());
app.use(express.json());
app.use(routes);

// Rota de Health Check
app.get('/health', async (req, res) => {
  try {
    await prisma.$connect();
    res.status(200).json({ status: 'API funcionando', db: 'Conectada' });
  } catch (error) {
    res.status(500).json({ status: 'Erro ao conectar com o DB', error: error.message });
  } finally {
    await prisma.$disconnect();
  }
});

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
