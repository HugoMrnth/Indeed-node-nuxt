const express = require("express");
const router = express.Router();
const { Peoples } = require('../models');

router.get("/",async (req, res) => {
    const allPeoples = await Peoples.findAll();
    res.json(allPeoples);
})

module.exports = router;