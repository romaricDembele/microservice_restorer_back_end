const express = require('express');

const app = express();
const PORT = 3455;

app.get("/", (req: any, res: any, next: any) => {
    res.send("This is the beginning of a new journey.")
});

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});