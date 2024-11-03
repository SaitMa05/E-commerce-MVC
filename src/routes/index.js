// src/routes/index.js
// src/routes/index.js
function setRoutes(app, controllers) {
    // Rutas del IndexController
    app.get('/', controllers.IndexController.home);
    app.get('/about', controllers.IndexController.about);
    app.get('/contact', controllers.IndexController.contact);
    
    // Rutas del ProductosController
    app.get('/productos', controllers.ProductosController.productos);
}

module.exports = setRoutes;
