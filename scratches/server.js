const mysql = require('mysql');
const express = require('express');
const app = express();
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

const db = mysql.createConnection({
    host: 'hv305868-001.ca.clouddb.ovh.net',
    user: 'coldvl',
    password: 'qwertyP1',
    database: 'workograph-db-test',
    port: 35967,
});

db.connect((err) => {
    if (err) {
        console.error('Помилка підключення до бази даних:', err);
    } else {
        console.log('Підключено до бази даних MySQL');
    }
});

app.post('/createRecord', (req, res) => {
    const { model, description, value } = req.body;

    const sql = 'INSERT INTO my_table (model, description, value) VALUES (?, ?, ?)';
    db.query(sql, [model, description, value], (err) => {
        if (err) {
            console.error('Помилка при виконанні запиту:', err);
            res.status(500).send('Помилка при створенні запису');
        } else {
            console.log('Запис успішно створено');
            res.status(200).send('Запис успішно створено');
        }
    });
});

app.put('/updateRecord/:id', (req, res) => {
    const id = req.params.id;
    const { model, description, value } = req.body;

    const sql = 'UPDATE my_table SET model = ?, description = ?, value = ? WHERE id = ?';
    db.query(sql, [model, description, value, id], (err) => {
        if (err) {
            console.error('Помилка при оновленні запису:', err);
            res.status(500).send('Помилка при оновленні запису');
        } else {
            console.log(`Запис з id ${id} успішно оновлено`);
            res.status(200).send('Запис успішно оновлено');
        }
    });
});

app.post('/getId', (req, res) => {
    const { model, description } = req.body;

    const sql = 'SELECT id FROM my_table WHERE model = ? AND description = ?';
    db.query(sql, [model, description], (err, results) => {
        if (err) {
            console.error('Помилка при отриманні id:', err);
            res.status(500).json({ id: null });
        } else {
            if (results.length > 0) {
                res.status(200).json({ id: results[0].id });
            } else {
                res.status(200).json({ id: null });
            }
        }
    });
});

app.listen(35967, () => {
    console.log('Сервер слухає порт 35967');
});

