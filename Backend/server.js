//importaciones
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

//puerto donde se levanta el  back
var corsOptions = {
  origin: "http://localhost:8081"
};

//conjunto de arreglos
app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));


//Redireccionando Modelos
const db = require("./app/models");
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

//ruta principal donde levanta el back
app.get("/", (req, res) => {
  res.json({ message: "funciona" });
});


require("./app/routers/example.router")(app);

//perto donde se conecta el front
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en: ${PORT}.`);
});
