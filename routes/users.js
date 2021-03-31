const express = require('express');
const router = express.Router();

// POST api/users

router.post('/', (req, res) => {
  res.json({ msg: 'Created a user !' });
});

router.get('/', (req, res) => {
  res.json({ msg: 'Sending a user !' });
});

module.exports = router;
