const express = require('express');

const app = express();
const PORT = 3455;

const articleRoutes = require('./routes/article');

app.use('/api/restorer', articleRoutes);

app.get("/", (req: any, res: any, next: any) => {
    res.send("This is the beginning of a new journey.")
});

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});