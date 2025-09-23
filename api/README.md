README.md
api/
  prisma/
    schema.prisma
  src/
    controllers/
      aluno.js
      telefone.js
      matricula.js
      professor.js
      turma.js
    router/
    server.js
package.json
README.md

 ## ⚙️ Configuração e Instalação

 1. Clone o repositório: git clone https://github.com/helio000/projeto-2025.git

 2. Acesse a pasta do projeto: ```cd api```

3.  Instale as dependências: ```npm install```

4. Configure o banco no arquivo prisma/schema.prisma.
Exemplo com SQLite:

datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

5. Rode as migrations para criar as tabelas: ```npx prisma migrate dev --name init```

▶️ Executando o servidor
```npx nodemon```

Servidor roda em: http://localhost:3100

📌 Rotas disponíveis
👤 Alunos

POST /alunos → Criar aluno

GET /alunos → Listar alunos

GET /alunos/:id → Buscar aluno por ID

PUT /alunos/:id → Atualizar aluno

DELETE /alunos/:id → Deletar aluno

POST /login → Login de aluno

📞 Telefones

POST /telefones → Criar telefone

GET /telefones → Listar telefones

GET /telefones/:id → Buscar telefone por ID

PUT /telefones/:id → Atualizar telefone

DELETE /telefones/:id → Remover telefone

📚 Matrículas

POST /matriculas → Criar matrícula

GET /matriculas → Listar matrículas

GET /matriculas/:id → Buscar matrícula por ID

PUT /matriculas/:id → Atualizar matrícula

DELETE /matriculas/:id → Remover matrícula

👨‍🏫 Professores

POST /professores → Criar professor

GET /professores → Listar professores

GET /professores/:id → Buscar professor por ID

PUT /professores/:id → Atualizar professor

DELETE /professores/:id → Remover professor

🥋 Turmas

POST /turmas → Criar turma

GET /turmas → Listar turmas

GET /turmas/:id → Buscar turma por ID

PUT /turmas/:id → Atualizar turma

DELETE /turmas/:id → Remover turma

📖 Observações
Alterou o schema.prisma? Rode: ```npx prisma migrate dev --name ajuste```

Para visualizar os dados no banco:  ```npx prisma studio ```
