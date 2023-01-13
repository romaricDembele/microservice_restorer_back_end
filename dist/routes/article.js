"use strict";
const router = require('express').Router();
const { articleById, read, create, update, remove } = require('../controllers/index');
router.get("/articles", read);
router.get('/articles/:id', articleById, read);
router.post('/articles', create);
router.put('/articles/:id', update);
router.delete('/articles/:id', remove);
module.exports = router;
