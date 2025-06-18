# Artes Marciais

- Metodologia: Kanban
- Tema inicial: Hangetsu Uzumaki - Artes Marciais

|Recursos|Papéis e Responsabilidades|
|-|-|
|Hélio|Back/Teste/Banco de dados|
|João Santos|Front/Banco de Dados|
|Rhayssa|Front/Banco de Dados|

## BackLog
Próxima Sprint 3º
 - []UML DC (Diagrama de Classes) Back-End
- [] Iniciar a codificação/desenvolvimento Banco de dados
 - []Iniciar a codificação/desenvolvimento Back-end
 - []Iniciar a codificação/desenvolvimento Front-end
- [] Iniciar a codificação/desenvolvimento Mobile
- [] UML DA (Diagrama de Atividades) Front-End
- [] Análise de Viabilidade com Matriz SWOT
- []Triângulo da qualidade do Projeto (Escopo, Prazo e Custo)


- [x]Modelar o negócio no Canvas
 - [x]Criar um cronograma Gráfico Gant
 - [x]Criar um repositório no github e adicionar os integrantes do grupo como colaboradores.
 - []Protótipo funcional inicial (Com Figma - Mobile e Web))
 - [x]Web
 - []Mobile
 - []Elencar os requisitos funcionais como neste exemplo.
 - [x]Ilustrar cada requisito funciional com DCU (Diagrama de casos de Uso)
 - [x]Modelar o banco de dados MER x DER
 - [x]Cadastrar os integrantes do grupo nas ferramentas de gestão de projeto escolhida Trello, Jira, Asana, etc.
## Passo a passo para testar
- 1 Clone este repositório
- 2 Abra o repositório com o VsCode, Abra um terminal **CTRL + '** cmd ou bash
- 3 Abra o XAMPP e inicie o SGBD **MySQL**, ou inicie o MySQL da forma que preferir.
- 4 Crie dentro da pasta ./api um arquivo chamado **.env** contendo as seguintes variáveis de ambiente:
```js
DATABASE_URL="mysql://root@localhost:3306/escola?schema=public&timezone=UTC"
```
- 5 No terminal do VsCode navegue até a pasta **./api** e execute os seguintes comandos para instalar o banco de dados, semear os dados de teste e executar a API na porta 3000.
