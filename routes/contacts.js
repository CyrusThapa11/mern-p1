const express = require('express');
const router = express.Router();

// POST api/users

router.get('/', (req, res) => {
  res.json({ msg: 'Got a contact !' });
});

router.post('/', (req, res) => {
  res.json({ msg: 'Created a new contact !' });
});

router.put('/:id', (req, res) => {
  res.json({ msg: ' Updated a contact !' });
});

router.delete('/:id', (req, res) => {
  res.json({ msg: ' Deleted a contact !' });
});

module.exports = router;
