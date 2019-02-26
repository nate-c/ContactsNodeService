const router = require('express').Router();
const consultants = require('../../data/consultants.json');

router.get('/', async(req, res) => {
    return res.json({
        data: consultants
    })
});

module.exports = router;