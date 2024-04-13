const mongoose = require("mongoose");

const mongoDBURL =
  "mongodb+srv://santitech:test123@cluster0.zokbva5.mongodb.net/";

function connectDB() {
  return new Promise((res, rej) => {
    mongoose
      .connect(mongoDBURL)
      .then(() => {
        console.log("Conexion a la DB establecida correctamente");
        res();
      })
      .catch((err) => {
        console.error("Error al conectar a la DB ", err);
        rej(err);
      });
  });
}

module.exports = connectDB;
