const express = require("express");
const path = require("path");

const app = express();

// Servir los archivos estáticos desde la carpeta dist
app.use(express.static(__dirname + "/dist/vision-ui"));

// Redirigir todas las rutas a index.html
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/vision-ui/index.html"));
});

// Iniciar la aplicación en el puerto definido por Heroku o en el puerto 8080
app.listen(process.env.PORT || 8080);
