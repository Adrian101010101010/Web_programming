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

app.get('/getRecords', (req, res) => {
    const sql = 'SELECT * FROM my_table'; // Замініть 'my_table' на назву вашої таблиці
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Помилка при отриманні записів:', err);
            res.status(500).json([]);
        } else {
            res.status(200).json(results);
        }
    });
});

app.delete('/deleteRecord/:id', (req, res) => {
    const id = req.params.id;

    const sql = 'DELETE FROM my_table WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Помилка при видаленні запису:', err);
            res.status(500).send('Помилка при видаленні запису');
        } else if (result.affectedRows === 0) {
            console.log(`Запис з id ${id} не знайдено`);
            res.status(404).send('Запис не знайдено');
        } else {
            console.log(`Запис з id ${id} успішно видалено`);
            res.status(200).send('Запис успішно видалено');
        }
    });
});

app.listen(35967, () => {
    console.log('Сервер слухає порт 35967');
});

