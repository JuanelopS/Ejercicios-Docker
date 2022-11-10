// ? Aquí pondremos las rutas de nuestro proyecto
const { Router } = require('express');

const router = Router();

router.get('/saludo', (request, response) => {
  response.json({ saludo: 'Buenas tardes' });
});

module.exports = router;

