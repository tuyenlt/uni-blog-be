const userController = require('../controllers/user.controller');

const router = require('express').Router();

router.post('/user/login', userController.login);

module.exports = router;