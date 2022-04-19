const express = require('express');
const router = express.Router();

const controler = require('../controllers/UserController')

router.get('/',controler.get)
      .get('/:id',controler.getById)



module.exports = router;