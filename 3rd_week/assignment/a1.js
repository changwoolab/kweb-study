const express = require("express");

const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    const obj = req.query;
    let r = Object.keys(obj).map(k => `${k}: ${obj[k]}`).join('\n');
    res.send(r);
});

app.post('/', (req, res) => {
    const obj = req.body;
    let r = Object.keys(obj).map(k => `${k}: ${obj[k]}`).join('\n');
    res.send(r);
});

app.put('/', (req, res) => {
    const obj = req.body;
    let r = Object.keys(obj).map(k => `${k}: ${obj[k]}`).join('\n');
    res.send(r);
});

app.delete('/', (req, res) => {
    const obj = req.body;
    let r = Object.keys(obj).map(k => `${k}: ${obj[k]}`).join('\n');
    res.send(r);
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
