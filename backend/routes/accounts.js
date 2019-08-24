const router = require('express').Router();
let Account = require('../models/account.model');

router.route('/').get((req, res) => {
    Account.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/register').post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const newAccount = new Account({
        username,
        email,
        password
    });

    newAccount.save()
        .then(() => res.json('Register Success!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/login').post((req, res) => {
    Account.find({ username: req.body.username, password: req.body.password })
        .then(account => {
            res.json(account);
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;