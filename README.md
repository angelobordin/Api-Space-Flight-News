<h1>API Space Flight News</h1>

<p>
  <img src="https://img.shields.io/badge/status-em%20desenvolvimento-brightgreen"/>
  <img src="https://img.shields.io/badge/última%20atualização-fevereiro-yellowgreen"/>
  <img src="https://img.shields.io/badge/Node.JS-18.12.1-blueviolet"/>
  <img src="https://img.shields.io/badge/Prisma-4.9.0-green"/>
</p>

<h2>Descrição</h2>
Um projeto de website, que é baseado na API SpaceFlight News.<br>
Neste site o intuito é divulgar artigos e reportagens feitas por múltiplas medias referente ao descobrimento e avanaço da ciência sobre o espaço.<br>
<br>
:warning: O projeto está incompleto e ainda será atualizado tanto na parte do backend como no frontend.:warning:

<h2>Funcionalidades</h2>
<h3>Implementadas :heavy_check_mark:</h3>

- `Cadastro de Usuários e Login`: O projeto possui tela de cadastro e login para os usuários.
- `Listagem de artigos já existentes`: Clicando na opção 'Artigos' no menu lateral, o usuário consegue visualizar os artigos já cadastrados.

<h3>Em construção :construction:</h3>

- `Criação de Artigos`: Os usuários poderão criar artigos que não estão registrados no site, e que deverão ser linkados a uma reportagem ou artigo já existente.
- `Criação de Lançamentos`: Os usuários poderão criar eventos que não ainda registrados no site, e que deverão ser linkados a uma reportagem ou artigo já existente sobre o mesmo.
- `Criação de Eventos`: Os usuários poderão criar eventos que não estão registrados no site, e que deverão ser linkados a uma reportagem ou artigo já existente.
- `Listagem de eventos já existentes`: Clicando na opção 'Eventos' no menu lateral, o usuário consegue visualizar os eventos já cadastrados.
- `Listagem de lançamentos já existentes`: Clicando na opção 'Lançamentos' no menu lateral, o usuário consegue visualizar os lançamentos já efetuados, ou ainda não realizados.
- `Listagem de Sites com informações`: Clicando na opção 'Sites Informativos', os usuários terão acesso a links que direcionarão os mesmo a sites que fazem os artigos e detalham os mesmo.
- `Listagem de Blogs`: Clicando na opção 'Sites Informativos', os usuários terão acesso a blogs com conteúdo voltado ao espaço.

<h2>Acesso ao projeto 📁</h2>

Você pode [acessar o código fonte do projeto inicial aqui](https://github.com/angelobordin/Api-Space-Flight-News), ou [baixá-lo aqui](https://github.com/angelobordin/Api-Space-Flight-News/archive/refs/heads/main.zip).

<h2>Abrir e rodar o projeto 🛠️</h2>
<h3>Pré-Requisitos</h3>

⚠️ [Node](https://nodejs.org/en/)<br>
⚠️ [MySQL](https://dev.mysql.com/downloads/installer/)<br>
⚠️ [VS Code](https://code.visualstudio.com/Download)<br>

Após baixar o projeto no seu dispositivo, você pode abri-lo no VS Code.<br>
Para isso abra o VS Code em seu dispositivo, após clique em:

<h3>VS Code</h3>

- **File >> Open Folder...** ou digite **Ctrl+K** / **Ctrl+O**;
- Abra o terminal em **Terminal >> New Terminal**;
- Digite **npm install** para realizar a instalação das dependências do projeto;

<h3>MySQL</h3>

Eu acredito que utilizar o MySQL Workbench será máis fácil para realizar as configurações necessárias.<br>

- Então após realizar a instalação do [MySQL](https://dev.mysql.com/downloads/installer/) do link acima, você deve abrir o **MySQL Workbench**.
- Realizar a conexão, ou criar um banco local.(Guarde os dados de conexão, como a porta, usuário e senha)
- Deve então criar um Schema, pois esse será nosso banco de dados.(Guarde também o nome do Schema).
- Logo em seguida, deve acessar o **VS Code**.
- Abrir o arquivo **.env** na raíz do projeto, e alterar as informações da variável **DATABASE_URL**, conforme os dados guardados.<br>
EX: DATABASE_URL="mysql://usuário:senha@localhost:porta/nome_do_schema";
- Após basta entrar no terminal novamente e digitar **npx prisma migrate dev --name initDATABASE**
- Por último basta digitar no terminal **npx prisma db seed** para realizar a população do banco com dados.

Finalizada todas as etapas acima sem erro, basta voltar no seu MySQL Workbench e dar um refresh que as 'tables' devem ter sido criadas.
Após todos os passo acima serem realizados, digite **npm run start-project** no seu terminal e o projeto será aberto no seu navegador.

<h2>Tecnologias Utilizadas</h2>

<ul>
  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-plain.svg" width="20" height="20"/><b> Visual Studio Code</b></li>
  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="20" height="20"/><b> Node.JS</b></li>
  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="20" height="20"/><b> JavaScript</b></li>
  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="20" height="20"/><b> Express</b></li>
  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="20" height="20"/><b> HTML 5</b></li>
  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="20" height="20"/><b> CSS 3</b></li>
  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="20" height="20"/><b> Git</b></li>
  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width="20" height="20"/><b> MySQL</b></li>
</ul>

# Autores

| [<img src="https://avatars.githubusercontent.com/u/70332789?s=400&u=c6b947894c97e0e941f64aafeb22719ff49589ac&v=4" width=115><br><sub>Angelo Bordin</sub>](https://github.com/angelobordin) |
| :---: |
