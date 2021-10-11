const express = require("express");
const { Router } = require("express");

const app = express();
const port = 3000;

function fac(n) {
    if(n == 1) return 1;
    return n * fac(n-1);
}

app.get('/factorial', (req, res) => {
    const number = req.query.number;
    res.redirect(`/factorial/${number}`);
})

app.use('/factorial/:number', (req, res) => {
    const number = req.params.number;
    const factorial = fac(number);
    return res.send(`${number}! = ${factorial}`);
})

app.listen(port, () => console.log(`Server listening on port ${port}`));
