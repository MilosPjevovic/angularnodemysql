const express = require('express');
const router = express.Router();

const userControler = require('../controllers/UserController')

router.get('/',userControler.get)
      .get('/:id',userControler.getById)
      .post('/',userControler.createUser)
      .put('/:id',userControler.updateUser)
      .delete('/:id',userControler.deleteUser)  


module.exports = router;