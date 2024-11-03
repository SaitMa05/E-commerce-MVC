class ProductosController{
    static renderWithLayout(res, view, options) {
        // Renderiza la vista específica y pásala al layout usando una promesa
        res.render(view, options, (err, content) => {
            if (err) throw err;
            res.render('layout', { ...options, content });
        });
    }

    static productos(req, res) {
        ProductosController.renderWithLayout(res, 'productos', { title: 'Productos' });
    }
}

module.exports = ProductosController;