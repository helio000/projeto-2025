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
- [x] Criar o repositório do projeto no GitHub e adicionar os membros como colaboradores (Tudo que for desenvolvido deve estar neste repositório, podendo ter mais de um repositório, mas o principal deve ser este e possuir link para os outros)
- [x] Desenvolver o MER x DER Inicial
- [x] Desenvolver o diagrama de classes inicial
- [x] Listar os requisitos funcionais na ordem [RF001], [RF002], [RF003], ... e os requisitos não funcionais na ordem [NF001], [NF002], [NF003], ... (não é necessário detalhar os requisitos, apenas listar)
- [x] Para cada requisito funcional deve ser desenhado um DCU (Diagrama de Casos de Uso).
- [x] Iniciar o desenvolvimento do projeto, criando as pastas e arquivos iniciais (README.md, .gitignore, etc).
- [x] Desenvolver um protótipo funcional do App com Figma

## Sprint 3º
- [x] UML DC (Diagrama de Classes) Back-End
 - [x] Iniciar a codificação/desenvolvimento Banco de dados
 - [x] Iniciar a codificação/desenvolvimento Back-end
 - [x] Iniciar a codificação/desenvolvimento Front-end
- [x] Iniciar a codificação/desenvolvimento Mobile
 - [x] UML DA (Diagrama de Atividades) Front-End
 - [x] Análise de Viabilidade com Matriz SWOT
 - [x] Triângulo da qualidade do Projeto (Escopo, Prazo e Custo)
 - [x] Protótipo (Wireframe) do Front-end e Mobile

## Diagramas do Projeto

## 📘 Diagrama de Classes (Back‑End)
<img src="api/imagem/UML DC (Diagrama de Classes) Back-End.png" alt="UML DC Backend" width="350"/>

## 📗 DCU do Projeto
<img src="api/imagem/DCU.jpeg" alt="Diagrama DCU" width="600"/>

## 📙 Diagrama do Projeto
<img src="api/imagem/diagrama.jpeg" alt="Diagrama geral" width="600"/>
 
## 📙 canva
 <img src="api/imagem/atividade.jpeg" alt="canva" width="600"/>

## 📙 triangulo de ferro
<img src="api/imagem/atividade 2.jpeg" alt="triangulo de ferro" width="600"/>

## 📙 swot
<img src="api/imagem/atividade 3.jpeg" alt="swot" width="600"/>

## 📙 grefico gant
<img src="api/imagem/atividade 4.jpeg" alt="grefico gant" width="600"/>

## Passo a passo para testar
- 1 Clone este repositório
- 2 Abra o repositório com o VsCode, Abra um terminal **CTRL + '** cmd ou bash
- 3 Abra o XAMPP e inicie o SGBD **MySQL**, ou inicie o MySQL da forma que preferir.
- 4 Crie dentro da pasta ./api um arquivo chamado **.env** contendo as seguintes variáveis de ambiente:
```js
DATABASE_URL="mysql://root@localhost:3306/escola?schema=public&timezone=UTC"
