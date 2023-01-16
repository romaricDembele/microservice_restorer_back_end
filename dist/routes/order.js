"use strict";
const orderRouter = require('express').Router();
const { readOrders, createOrder, updateOrder } = require('../controllers');
// GET the list of orders
orderRouter.get('/', readOrders);
// POST an order
orderRouter.post('/', createOrder);
// UPDATE an order
orderRouter.put('/:id', updateOrder);
module.exports = orderRouter;
