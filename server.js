const express = require('express');
const app = express();

app.use(express.static(__dirname));  // Sirve los archivos estáticos del directorio actual

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});