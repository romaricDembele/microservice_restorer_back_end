"use strict";
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
const articleRoutes = require('./routes/article');
const menuRoutes = require('./routes/menu');
app.use(cors());
app.use(express.json());
app.use('/api/restorer/articles', articleRoutes);
app.use('/api/restorer/menus', menuRoutes);
app.get("/", (req, res, next) => {
    res.send("This is the beginning of a new journey.");
});
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});
