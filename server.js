const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const app = express();
//permitir envio de dados em json
app.use(express.json());
//pode passar dominios espefcificos
app.use(cors());

//se tiver user e password  mongodb://user@password....
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true
});

requireDir("./src/models");

//rota
// use aceita todos os tipos de requisições
app.use("/api", require("./src/routes"));

// app.get("/", (req, res) => {
// });

app.listen(3000);
