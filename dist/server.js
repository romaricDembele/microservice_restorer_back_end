"use strict";
const express = require('express');
const app = express();
const PORT = 3455;
app.get("/", (req, res, next) => {
    res.send("This is the beginning of a new journey.");
});
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});
