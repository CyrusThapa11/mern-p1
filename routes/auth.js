const express = require('express');
const router = express.Router();

// POST api/users

router.get('/', (req, res) => {
  res.json({ msg: 'Get logged in !' });
});

router.post('/', (req, res) => {
  res.json({ msg: 'A user logged in !' });
});

module.exports = router;
