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

// Обробка запиту від клієнта
app.post('/createRecord', (req, res) => {
    const { model, description, value } = req.body; // Отримайте значення model, description і value з req.body

    // Додайте новий рядок до бази даних зі значеннями model, description і value
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
    const id = req.params.id; // Отримайте ідентифікатор із URL
    const { model, description, value } = req.body; // Отримайте дані для оновлення з req.body

    // Оновіть запис в базі даних на основі ідентифікатора id
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


app.listen(35967, () => {
    console.log('Сервер слухає порт 35967');
});

