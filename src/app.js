// src/app.js
const express = require('express');
const setRoutes = require('./routes/index');
const IndexController = require('./controllers/index'); // Importa el controlador
const ProductosController = require('./controllers/productos'); // Importa el controlador
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('src/public'));
app.set('view engine', 'ejs');
app.set('views', './src/views');

// Routes
setRoutes(app, { IndexController, ProductosController }); // Pasa ambos controladores como un objeto

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
