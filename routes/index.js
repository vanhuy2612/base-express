var express = require('express');
var router = express.Router();
import AuthController from '../app/controller/Auth';

const authCtrl = new AuthController();
/* GET home page. */
router.get('/login', authCtrl.login);

module.exports = router;
