"use strict";
const orderRouter = require('express').Router();
const { readOrders, createOrder, updateOrder, removeOrder } = require('../controllers');
// GET the list of orders
orderRouter.get('/', readOrders);
// POST an order
orderRouter.post('/', createOrder);
// UPDATE an order
orderRouter.put('/:id', updateOrder);
// DELETE an order
orderRouter.delete('/:id', removeOrder);
module.exports = orderRouter;
