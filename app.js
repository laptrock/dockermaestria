const express = require('express');
const connectDB = require('./db'); // Importa la conexión a la base de datos
const path = require('path'); // Módulo para manejar rutas

const app = express();
const PORT = 3000;

// Conectar a la base de datos
connectDB();

// Ruta para servir el archivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

