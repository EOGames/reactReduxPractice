const { login } = require('../controllers/login.controller');
const { registerUser } = require('../controllers/register.controller');
const { sendToChatGpt } = require('../controllers/sendToChatGpt.controller');

const Router = require('express').Router();

Router.post('/register',registerUser);
Router.post('/login',login)
Router.post('/sendToChatGpt',sendToChatGpt)

module.exports = Router;