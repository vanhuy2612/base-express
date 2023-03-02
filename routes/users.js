var express = require('express');
var router = express.Router();
import UserController from '../app/controller/User';

const userCtrl = new UserController();
/* GET users listing. */
router.get('/', userCtrl.index);
router.post('/', userCtrl.store);
router.put('/:id', userCtrl.update);
router.delete('/:id', userCtrl.delete);

module.exports = router;
