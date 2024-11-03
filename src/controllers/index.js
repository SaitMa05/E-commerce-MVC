// src/controllers/index.js

class IndexController {
    static renderWithLayout(res, view, options) {
        // Renderiza la vista específica y pásala al layout usando una promesa
        res.render(view, options, (err, content) => {
            if (err) throw err;
            res.render('layout', { ...options, content });
        });
    }

    static home(req, res) {
        IndexController.renderWithLayout(res, 'index', { title: 'Inicio' });
    }

    static about(req, res) {
        IndexController.renderWithLayout(res, 'about', { title: 'Sobre Nosotros' });
    }

    static contact(req, res) {
        IndexController.renderWithLayout(res, 'contact', { title: 'Contáctanos' });
    }
}



module.exports = IndexController;
