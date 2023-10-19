const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar el middleware para servir archivos estáticos desde "public"
app.use(express.static(path.join(__dirname, 'public')));

// Configurar el middleware para servir archivos estáticos desde "imagen"
app.use('/imagen', express.static(path.join(__dirname, 'imagen')));

// Configurar el middleware para servir páginas desde "paginas"
app.use('/paginas', express.static(path.join(__dirname, 'paginas')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/sobre-nosotros', (req, res) => {
  res.sendFile(path.join(__dirname, 'paginas', 'sobreNosotros.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});
