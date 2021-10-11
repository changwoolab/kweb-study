const express = require("express");

const app = express();
const port = 3000;

app.use('/board/page/:page', (req, res) => {
    const param = req.params.page;
    return res.send(`This is page #${param}`);
})


app.listen(port, () => console.log(`Server listening on port ${port}`));
