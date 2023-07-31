const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.query.name)
    res.send('User list');
})

router.get('/new', (req, res) => {
    res.render('users/new', {firstName: 'test'});
})

router.get('/:id', (req, res) => {
    res.send(`User ${req.params.id} get`)
})

router.post("/", (req, res) => {
    const isValid = true;
    if (isValid) {
        users.push({name: req.body.firstName})
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log("error")
        res.render('users/new', {firstName: req.body.firstName})
    }
    console.log(req.body.firstName);
    res.send("Create user");
})

const users = [{name: 'Kuba'}, {name: "Julka"}]

module.exports = router;
