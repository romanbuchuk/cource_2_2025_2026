const express = require('express');
const path = require('node:path');

const app = express();

const staticPath = path.join(__dirname, '../frontend/dist');

app.use(express.static(staticPath));

app.use((req, res, next) => {
    console.log('------------- Express ---------------');

    next();
});

// app.get('/', (req, res) => {
//     res.status(200).send('Hello GET request!');
// });

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(staticPath, 'index.html'));
});

module.exports = app;
