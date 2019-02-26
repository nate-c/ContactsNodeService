const router = require('express').Router();
const contacts = require('../../data/contacts.json');


router.get('/', async(req, res) => {
	res.json({
		data: contacts});
});

// router.get('/:id', async(req, res) => {
// 	const contact = contacts.filter(x => x.)
// 	res.json({
// 		data: contacts});
// });

router.get('/:id', function(req, res) {
  res.json({
    contact: contacts.find(function(id) {
      console.log(req.params);      
      return (patient.id === Number(req.params.id));
    })
  });
});

router.post('/:id', function(req, res) {
  res.json({
    data: 'successfully posted id'
  });
});

module.exports = router;