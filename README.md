# Artes Marciais

- Metodologia: Kanban
- Tema inicial: Hangetsu Uzumaki - Artes Marciais

|Recursos|Papéis e Responsabilidades|
|-|-|
|Hélio|Back/Teste/Banco de dados|
|João Santos|Front/Banco de Dados|
|Rhayssa|Front/Banco de Dados|

## BackLog
- [x] Criar/atualizar o cronograma
- [x] Modelar o negócio no Quadro Canvas
- [x] Criar o repositório do projeto no GitHub e adicionar os menbros como colaboradores (Tudo que for desenvolvido deve estar neste repositório, podendo ter mais de um repositório, mas o principal deve ser este e possuir link para os outros)
- [x] Desenvolver o MER x DER Inicial
- [x] Desenvolver o diagrama de classes inicial
- [x] Listar os requisitos funcionais na ordem [RF001], [RF002], [RF003], ... e os requisitos não funcionais na ordem [NF001], [NF002], [NF003], ... (não é necessário detalhar os requisitos, apenas listar)
- [x] Para cada requisio funcional deve ser desenhado um DCU (Diagrama de Casos de Uso).
- [x] Iniciar o desenvolvimento do projeto, criando as pastas e arquivos iniciais (README.md, .gitignore, etc).
- [x] Desenvolver um protótipo funcional do App com Figma

## Próxima Sprint 3º
- [x] UML DC (Diagrama de Classes) Back-End
 - [x] Iniciar a codificação/desenvolvimento Banco de dados
 - [x] Iniciar a codificação/desenvolvimento Back-end
 - [x] Iniciar a codificação/desenvolvimento Front-end
- [x] Iniciar a codificação/desenvolvimento Mobile
 - [x] UML DA (Diagrama de Atividades) Front-End
 - [x] Análise de Viabilidade com Matriz SWOT
 - [x] Triângulo da qualidade do Projeto (Escopo, Prazo e Custo)
## Passo a passo para testar
- 1 Clone este repositório
- 2 Abra o repositório com o VsCode, Abra um terminal **CTRL + '** cmd ou bash
- 3 Abra o XAMPP e inicie o SGBD **MySQL**, ou inicie o MySQL da forma que preferir.
- 4 Crie dentro da pasta ./api um arquivo chamado **.env** contendo as seguintes variáveis de ambiente:
```js
DATABASE_URL="mysql://root@localhost:3306/escola?schema=public&timezone=UTC"
```
- 5 No terminal do VsCode navegue até a pasta **./api** e execute os seguintes comandos para instalar o banco de dados, semear os dados de teste e executar a API na porta 3000.
