require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
const PORT = 5000 || process.env.PORT;

const db = require('./models');

//Routes
const peopleRouter = require('./routes/Peoples');
app.use("/peoples", peopleRouter);

const jobRouter = require('./routes/Jobs');
app.use("/jobs", jobRouter);

db.sequelize.sync({ force: true}).then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`);
    })
})