const mongoose = require("mongoose");

async function connectDatabase() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.y8oocve.mongodb.net/?appName=CursoNodeJS`,
    );
    console.log("MongoDB conectado com sucesso");
  } catch (error) {
    console.error("Error ao conectar ao MongoDB: ", error.message);
    process.exit(1);
  }
}

module.exports = connectDatabase;
