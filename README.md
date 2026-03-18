# 🏠 Gerenciador de Tarefas - República

Um aplicativo web intuitivo para gerenciar tarefas, responsabilidades e pontos entre moradores de república. Perfeito para organizar limpeza, compras, cozinha e outras responsabilidades compartilhadas!

## ✨ Funcionalidades Principais

### 👥 Gerenciamento de Usuários

- ✅ Criar novos moradores
- ✅ Foto de perfil por morador
- ✅ Sistema de pontos acumulativos
- ✅ Deletar usuário (remove todas suas tarefas)

### 📋 Gerenciamento de Tarefas

- ✅ Criar tarefas com título, descrição e pontos
- ✅ Atribuir tarefas a moradores específicos
- ✅ Data de vencimento com auto-limpeza de tarefas expiradas
- ✅ Marcar tarefas como concluídas
- ✅ Ganhar pontos ao completar tarefas
- ✅ Deletar tarefas

### 🏆 Ranking e Pontuação

- ✅ Ranking dinâmico de moradores por pontos
- ✅ Pontos ganhos ao completar tarefas
- ✅ Visualização em tempo real
- ✅ Resetar pontos de todos os usuários
- ✅ Resetar pontos de um unico usuário


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

#### 4️⃣ Inicie o servidor

```bash
# Modo desenvolvimento (com hot-reload)
npm run start-dev

# Modo produção
npm start
```


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
│   │                         
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

Desenvolvido com ❤️ para facilitar a vida em república.

