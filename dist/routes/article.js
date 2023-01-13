"use strict";
const router = require('express').Router();
const { articleById, readArticles, createArticle, updateArticle, removeArticle } = require('../controllers/index');
router.get("/", readArticles);
// router.get('/articles/:id', articleById, readArticle);
router.post('/', createArticle);
router.put('/:id', updateArticle);
router.delete('/:id', removeArticle);
module.exports = router;
