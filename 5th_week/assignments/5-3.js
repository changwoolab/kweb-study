const express = require("express");
const mysql = require('mysql2/promise')

const app = express();
const port = 3000;

const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'elqlelqlelq11',
    database: 'kweb_db1',
});
const runQuery = async (pstmt, data) => {
    const conn = await pool.getConnection();
    try {
        const sql = conn.format(pstmt, data);
        const [result] = await conn.query(sql);
        return result;
    } catch (err) {
        console.error(err);
        return 1;
    } finally {
        conn.release();
    }
};

app.get('/fare', async (req, res) => {
    const { uid } = req.query;
    const sql = `
        select users.name, sum(round(distance*fare_rate/1000, -2)) as fare 
        from trains join types on trains.type=types.id join tickets on tickets.train=trains.id join users on users.id = tickets.user
        where users.id=?`;
    const result = await runQuery(sql, [uid]);
    if (result == 1) {
        res.send('500 Internal Server Error');
    } else {
        res.send(`Total fare of ${result[0].name} is ${result[0].fare} KRW.`);
    }
});

app.get('/train/status', async (req, res) => {
    const { tid } = req.query;
    const sql = `
        select sum(max_seats) as max, count(types.id) as cnt
        from trains join types on trains.type=types.id join tickets on tickets.train=trains.id
        where types.id=?`;
    const result = await runQuery(sql, [tid]);
    if (result[0].max == null || result[0].max <= result[0].cnt) {
        res.send(`Train ${tid} is sold out`);
    } else {
        res.send(`Train ${tid} is not sold out`);
    }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
