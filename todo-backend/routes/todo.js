const express = require('express');
const { body } = require('express-validator/check');
const itemController = require('../controller/items.js');
// const isAuth = require('../middleware/is-auth');

const router = express.Router();

// GET /to/items
router.get('/items', itemController.getItems);
// Post /to/items - Input parameter error validation
router.post('/items', [
    body('title')
        .trim()
        .not()
        .isEmpty()
], itemController.createItem);
// PUT /to/items
router.put('/items', itemController.updateItem);
router.delete('/items', itemController.deleteItem);
module.exports = router