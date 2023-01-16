const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;  

const articleRoutes = require('./routes/article');
const menuRoutes = require('./routes/menu');
const orderRoutes = require('./routes/order');

app.use(cors());

app.use(express.json());
app.use('/api/restorer/articles', articleRoutes);
app.use('/api/restorer/menus', menuRoutes);

app.get("/", (req: any, res: any, next: any) => {
    res.send("This is the beginning of a new journey.")
});

app.use(function (req: any, res: any, next: any) {
    res.status(404).send("Sorry, that route does not exist. Try again.");
});

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});