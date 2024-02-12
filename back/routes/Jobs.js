const express = require("express");
const router = express.Router();
const { Jobs } = require('../models');

router.get('/',async (req, res) => {
    const allJobs = await Jobs.findAll();
    res.json(allJobs);
})

router.post('/', async (req, res) => {
    const job = req.body;
    await Jobs.create(job);
    res.json(job);
})
module.exports = router;