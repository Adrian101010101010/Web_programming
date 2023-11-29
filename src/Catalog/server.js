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

app.get('/api/products', (req, res) => {
    const sql = 'SELECT title, description, value FROM my_table'; // Update with your table name
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Помилка при отриманні продуктів:', err);
            res.status(500).send('Помилка при отриманні продуктів');
        } else {
            res.status(200).json(results);
        }
    });
});


app.get('/getProducts', (req, res) => {
    const { criteria = 'title', order = 'asc' } = req.query;

    // Додайте ORDER BY до SQL-запиту
    const sql = `SELECT * FROM my_table ORDER BY ${criteria} ${order}`;

    db.query(sql, (err, results) => {
        if (err) {
            console.error('Помилка при виконанні запиту:', err);
            res.status(500).send('Помилка при отриманні продуктів');
        } else {
            console.log('Продукти успішно отримані');
            res.status(200).json(results);
        }
    });
});

// Додайте новий маршрут для сортування за значенням value у зворотньому порядку
app.get('/api/products/sortByValueDesc', (req, res) => {
    const sql = 'SELECT * FROM my_table ORDER BY value DESC';

    db.query(sql, (err, result) => {
        if (err) {
            console.error('Помилка при виконанні запиту:', err);
            res.status(500).send('Помилка при отриманні продуктів');
        } else {
            res.json(result);
        }
    });
});

app.get('/api/products/:id', (req, res) => {
    const productId = req.params.id;
    const defaultId = 10; // Значення за замовчуванням
    const sql = 'SELECT title, description, value FROM my_table WHERE id = ?'; // Замініть my_table на вашу таблицю

    db.query(sql, [productId || defaultId], (err, results) => {
        if (err) {
            console.error('Помилка при отриманні продукту:', err);
            res.status(500).send('Помилка при отриманні продукту');
        } else if (results.length === 0) {
            res.status(404).send('Продукт не знайдено');
        } else {
            const product = results[0];
            res.status(200).json(product);
        }
    });
});



app.listen(35967, () => {
    console.log('Сервер слухає порт 35967');
});