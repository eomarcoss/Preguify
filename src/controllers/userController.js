const User = require("../models/user");

// Criar usuario
async function createUser(req, res) {
  try {
    const { name, photo, points } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Nome é obrigatório" });
    }

    const user = await User.create({ name, photo });
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao criar usuário" });
  }
}

// Listar todos
async function readUser(req, res) {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar os usuarios" });
  }
}

// Update (Falha)
async function updateUser(req, res) {
  try {
    const { id } = req.params;

    if (!req.body) {
      return res.status(400).json({ error: "Body é obrigatório" });
    }

    const user = await User.findByIdAndUpdate(id, req.body, { new: true });

    if (!user) {
      return res.status(404).json({ error: "Usuario nao encontrado" });
    }

    return res.json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao atualizar usuario" });
  }
}

// Delete user unitário
async function deleteUser(req, res) {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ error: "Usuario nao encontrado" });
    }

    return res.json({ message: "Usuario removido com sucesso" });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao deletar o usuario" });
  }
}

// Apagar todos os users
async function deleteAllUsers(req, res) {
  try {
    const result = await User.deleteMany({});

    return res.json({
      message: "Todos os usuários removidos com sucesso",
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Erro ao deletar os usuários" });
  }
}

// Ranking de usuarios
async function getRanking(req, res) {
  try {
    const users = await User.find()
      .sort({ points: -1 }) // maior primeiro
      .select("name points photo"); // só o necessário

    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar ranking" });
  }
}

//Limpar todos os pontos de todos users
async function resetAllPoints(req, res) {
  try {
    await User.updateMany({}, { points: 0 });
    return res.json({ message: "Pontos resetados com sucesso" });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao resetar pontos" });
  }
}

module.exports = {
  createUser,
  readUser,
  updateUser,
  deleteUser,
  deleteAllUsers,
  getRanking,
  resetAllPoints
};
