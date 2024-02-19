const express = require("express");
const router = express.Router();
const { Users, Companies, Peoples } = require('../models');
const bcrypt = require('bcrypt');

router.get("/",async (req, res) => {
    const allPeoples = await Users.findAll();
    res.json(allPeoples);
})



router.post("/registration", async (req, res) => {
    const { email, password, isACompany } = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            email: email,
            password: hash,
            isACompany: isACompany
        });
    });
    res.json("Account created");
})

router.post("/login", async(req, res) => {
    const { email, password } = req.body;
    const user = await Users.findOne({where: { email: email }})
    if(!user) {
        res.json("No user found");
    } else {
        bcrypt.compare(password, user.password).then((match) => {
            if(!match) {
                res.json("Wrong email or Password");
            } else {
                res.json('Auth succeeded')
            }    
        })
    }
})

module.exports = router;