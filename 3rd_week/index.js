const express = require("express");
const router = require('./router');

const app = express();
const port = 3000;

app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

app.get('/', (req,res) => {
    return res.render('index.pug');
});

app.get('/page', (req, res) => {
    const { page } = req.query;
    return res.render('board.pug', { page });
});

app.get('/posts', (req, res) => {
    const { until } = req.query;
    const untilParsed = parseInt(until, 10);
    
    const posts = [];
    if (!isNaN(untilParsed)) {
        for (let i = 0; i < untilParsed; i++) {
            posts.push(`Post ${i + 1}`);
        }
    }

    return res.render('post.pug', {posts});
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
