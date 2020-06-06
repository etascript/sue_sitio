const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
    res.render('index.html', {
        title: 'Bienvenido index',
        titulo: 'Hola mundo 666'

    })
})

router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'Contact Page', titulo: 'Pagina de Contacto' })
});

router.get('/about', (req, res) => {
    res.render('about.html', { title: 'Sobre mi', titulo: 'Sobre mi' })
});

module.exports = router;