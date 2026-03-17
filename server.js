const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

// Middleware para entender JSON
app.use(express.json());

// Rotas configuradas User (CRUD)
const userRoutes = require("./src/routes/userRoutes");
app.use("/users", userRoutes);

// Rotas de task (CRUD)
const taskRoutes = require("./src/routes/taskRoutes");
app.use("/tasks", taskRoutes);

// Funcao de conexao com o banco de dados
const PORT = 3000;
const connectDatabase = require("./src/database/connection");
connectDatabase();

// Inicia o servidor
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
