"use strict";
const menuRouter = require('express').Router();
// const { readMenu, readMenus, createMenu, updateMenu, removeMenu } = require('../controllers/index');
const { createMenu, readMenus, updateMenu, removeMenu } = require('../controllers/index');
menuRouter.get("/", readMenus);
// menuRouter.get('/:id', readMenu);
menuRouter.post('/', createMenu);
menuRouter.put('/:id', updateMenu);
menuRouter.delete('/:id', removeMenu);
module.exports = menuRouter;
