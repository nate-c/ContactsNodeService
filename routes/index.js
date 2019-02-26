const router = require('express').Router();
const contacts = require('./contacts');
const rankings = require('./rankings');

router.get('/', function(req, res){
	res.json({
		message: 'Nate\'s first node api layer'
	});
});

router.use('/contacts', contacts);
router.use('/rankings', rankings);

module.exports = router;