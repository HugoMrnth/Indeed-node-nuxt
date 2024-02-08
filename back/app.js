require('dotenv').config();

const express = require('express');

const app = express();

const PORT = 5000 || process.env.PORT;

const db = require('./models');

app.get('',(req, res) => {
    res.send('Hello world');
});
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`);
    })
})