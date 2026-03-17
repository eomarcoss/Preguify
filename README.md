# 🏠 Gerenciador de Tarefas - República

Um aplicativo web intuitivo para gerenciar tarefas, responsabilidades e pontos entre moradores de república. Perfeito para organizar limpeza, compras, cozinha e outras responsabilidades compartilhadas!

## ✨ Funcionalidades Principais

### 👥 Gerenciamento de Usuários

- ✅ Criar novos moradores
- ✅ Foto de perfil por morador
- ✅ Sistema de pontos acumulativos
- ✅ Perfil com informações do usuário
- ✅ Deletar usuário (remove todas suas tarefas)

### 📋 Gerenciamento de Tarefas

- ✅ Criar tarefas com título, descrição e pontos
- ✅ Atribuir tarefas a moradores específicos
- ✅ Data de vencimento com auto-limpeza de tarefas expiradas
- ✅ Marcar tarefas como concluídas
- ✅ Ganhar pontos ao completar tarefas
- ✅ Editar ou deletar tarefas
- ✅ Visualização clara do status das tarefas

### 🏆 Ranking e Pontuação

- ✅ Ranking dinâmico de moradores por pontos
- ✅ Pontos ganhos ao completar tarefas
- ✅ Visualização em tempo real
- ✅ Resetar pontos de todos os usuários

### 🎨 Interface Moderna

- ✅ Design responsivo (mobile, tablet, desktop)
- ✅ Tema claro e escuro
- ✅ Interface limpa com Bootstrap 5
- ✅ Navegação fluida entre páginas

---

## 🚀 Como Começar

### Pré-requisitos

- **Node.js** 18+ instalado
- **MongoDB** (gratuito com MongoDB Atlas)
- **Git** (opcional)

### Instalação

#### 1️⃣ Clone ou baixe o projeto

```bash
git clone https://github.com/seu-usuario/projeto-task-republica.git
cd projeto-task-republica
```

#### 2️⃣ Instale as dependências

```bash
npm install
```

#### 3️⃣ Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# MongoDB Atlas
MONGODB_USERNAME=seu_usuario
MONGODB_PASSWORD=sua_senha

# Servidor
NODE_ENV=development
PORT=3000
```

**Como obter credenciais MongoDB:**

1. Acesse [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
2. Crie uma conta gratuita
3. Crie um cluster
4. Copie a string de conexão
5. Extraia o usuário e senha

#### 4️⃣ Inicie o servidor

```bash
# Modo desenvolvimento (com hot-reload)
npm run start-dev

# Modo produção
npm start
```

#### 5️⃣ Acesse a aplicação

Abra seu navegador e vá para: **http://localhost:3000**

---

## 📖 Como Usar

### Primeiros Passos

1. **Criar um Morador**
   - Na tela inicial, digite seu nome
   - Clique em "Criar Usuário"
   - Você pode adicionar uma foto de perfil

2. **Criar uma Tarefa**
   - Vá para "Criar Tarefa"
   - Preencha: Título, Descrição, Pontos e Data de Vencimento
   - Escolha qual morador deve fazer a tarefa
   - Clique em "Criar Tarefa"

3. **Aprovar Tarefas Concluídas**
   - Vá para "Tarefas"
   - Marque a checkbox quando a tarefa for feita
   - Ganha os pontos automaticamente!

4. **Verificar Ranking**
   - Vá para "Ranking"
   - Veja quem tem mais pontos
   - Use "Zerar Pontos" para recomeçar a competição

### Exemplos de Tarefas

```
🧹 Limpar Sala
Descrição: Varrer e passar pano na sala
Pontos: 50 pts
Data: Amanhã

🍽️ Lavar Louça
Descrição: Lavar todos os pratos e panelas da cozinha
Pontos: 30 pts
Data: Hoje à noite

🛏️ Trocar Lençol Comum
Descrição: Trocar lençol da sala comum
Pontos: 40 pts
Data: Fim de semana
```

---

## 🛠️ Tecnologias Utilizadas

### Backend

- **Express.js** - Framework web
- **MongoDB** - Banco de dados NoSQL
- **Mongoose** - ODM para MongoDB
- **Node.js** - Runtime JavaScript

### Frontend

- **HTML5** - Estrutura
- **CSS3** - Estilização
- **Bootstrap 5** - Framework CSS
- **jQuery** - Manipulação DOM
- **Fetch API** - Requisições HTTP

### DevTools

- **Nodemon** - Auto-reload em desenvolvimento
- **dotenv** - Gerenciamento de variáveis de ambiente

---

## 📁 Estrutura do Projeto

```
projeto-task-republica/
├── src/
│   ├── controllers/          # Lógica das requisições
│   │   ├── userController.js
│   │   └── taskController.js
│   ├── models/               # Schemas do banco de dados
│   │   ├── user.js
│   │   └── task.js
│   ├── routes/               # Rotas da API
│   │   ├── userRoutes.js
│   │   └── taskRoutes.js
│   └── database/
│       └── connection.js      # Configuração do MongoDB
│
├── public/                    # Arquivos estáticos
│   ├── index.html            # Página principal
│   ├── css/
│   │   └── style.css         # Estilos customizados
│   ├── js/
│   │   ├── scriptNovo.js     # Lógica principal
│   │   ├── navigation.js     # Navegação entre páginas
│   │   └── scriptIndex.js    # Lógica da página inicial
│   └── pages/                # Páginas dinâmicas
│       ├── usuarios.html
│       ├── tarefas.html
│       ├── ranking.html
│       └── criartask.html
│
├── server.js                 # Entrada da aplicação
├── package.json              # Dependências do projeto
├── .env                      # Variáveis de ambiente (não versionar)
└── README.md                 # Este arquivo

```

---

## 🔌 API Endpoints

### Usuários

```http
# Listar todos os usuários
GET /users

# Criar usuário
POST /users
Content-Type: application/json
{
  "name": "João",
  "photo": "data:image/png;base64,..."
}

# Atualizar usuário
PUT /users/:id
{
  "name": "João Silva"
}

# Deletar usuário
DELETE /users/:id

# Obter ranking
GET /users/ranking

# Resetar pontos de todos
PATCH /users/reset-points
```

### Tarefas

```http
# Listar tarefas (não expiradas)
GET /tasks

# Criar tarefa
POST /tasks
{
  "title": "Limpar sala",
  "description": "Varrer e passar pano",
  "points": 50,
  "assignedTo": "userId",
  "expiresAt": "2026-03-10"
}

# Marcar como concluída
PATCH /tasks/:id/toggle
{
  "done": true
}

# Atualizar tarefa
PUT /tasks/:id
{
  "title": "Novo título",
  "status": "done"
}

# Deletar tarefa
DELETE /tasks/:id

# Deletar todas as tarefas de um usuário
DELETE /tasks/user/:userId

# Deletar todas as tarefas
DELETE /tasks
```

---

## 🎨 Personalização

### Mudar Cores do Tema

Edite o arquivo `public/css/style.css`:

```css
:root {
  --task-bg: var(--bs-body-bg);
  --task-title: var(--bs-body-color);
  --task-points-bg: #f3e8ff;
  --task-points-color: #9902c7;
}

[data-bs-theme="dark"] {
  --task-points-bg: #581c87;
  --task-points-color: #d8b4fe;
}
```

### Mudar Logo

Substitua o arquivo `public/pages/preguify.svg` por sua logo

### Customizar Pontos

Edite os pontos padrão em `public/js/scriptNovo.js`

---

## 🐛 Solução de Problemas

### "Connection refused" - MongoDB

**Problema:** Não consegue conectar ao banco
**Solução:**

- Verifique se o cluster MongoDB Atlas está ativo
- Confirme credenciais no `.env`
- Teste `npm run start-dev`

### Tarefas não aparecem

**Solução:**

- Atualize a página (F5)
- Limpe o cache do navegador
- Verifique se há tarefas não expiradas

### Tema não muda

**Solução:**

- Limpe o localStorage: `localStorage.clear()`
- Recarregue a página

---

## 📊 Métricas e Dados

O projeto coleta e armazena:

- Nome do usuário
- Foto de perfil (base64 salva como string)
- Pontos acumulados
- Tarefas criadas/atribuídas
- Data de vencimento das tarefas
- Status de conclusão

**Privacidade:** Os dados são armazenados apenas no seu banco de dados MongoDB. Nenhum dado é enviado para servidores de terceiros.

---

## 🚀 Deploy

### Opção 1: Heroku (Recomendado para iniciantes)

```bash
# 1. Instale Heroku CLI
# 2. Faça login
heroku login

# 3. Crie um app
heroku create seu-app-name

# 4. Configure variáveis de ambiente
heroku config:set MONGODB_USERNAME=seu_usuario
heroku config:set MONGODB_PASSWORD=sua_senha

# 5. Deploy
git push heroku main
```

### Opção 2: Vercel + Supabase

### Opção 3: DigitalOcean / AWS

---

## 🤝 Como Contribuir

1. Faça um **fork** do projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/MinhaFeature`)
3. **Commit** suas mudanças (`git commit -m 'Adicionei X'`)
4. **Push** para a branch (`git push origin feature/MinhaFeature`)
5. Abra um **Pull Request**

### Ideias de Melhorias

- [ ] Sistema de notificações
- [ ] Histórico de tarefas
- [ ] Integrações com WhatsApp/Telegram
- [ ] Modo offline
- [ ] Estatísticas avançadas
- [ ] Sistema de premiação

---

## 📝 Licença

Este projeto está sob a licença **ISC**.

---

## 👨‍💻 Autor

Desenvolvido com ❤️ para facilitar a vida em república.

---

## 💬 Dúvidas ou Sugestões?

Abra uma **issue** no repositório ou entre em contato!

---

## 🎯 Roadmap

- [x] CRUD de usuários
- [x] CRUD de tarefas
- [x] Sistema de pontos
- [x] Ranking
- [x] Tema claro/escuro
- [ ] Autenticação com login
- [ ] Notificações em tempo real
- [ ] Histórico completo
- [ ] Exportar dados (CSV/PDF)
- [ ] App mobile (React Native)

---

**Última atualização:** Março de 2026  
**Versão:** 1.0.0
