const express = require('express');
const router = express.Router();

const { login, register, UserController } = require('../controllers/User');

router.get('/user/:id', UserController);
router.post('/register', register);
router.post('/login', login);

module.exports = router;