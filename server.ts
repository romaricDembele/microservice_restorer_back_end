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

app.get("/", (req: any, res: any, next: any) => {
    res.send("This is the beginning of a new journey.")
});

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});