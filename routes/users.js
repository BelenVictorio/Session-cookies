const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
const validator = require('../validations/register');

/* Get - Form */
router.get('/', controller.form);
/* Post - Send data */
router.post('/', validator, controller.processRegister);
/* Get - Confirm */
router.get('/confirmation', controller.confirm);
/* Get - Olvidar */
router.get('/olvidar', controller.olvidar);


module.exports = router
