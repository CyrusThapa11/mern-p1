const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use('/api/users', require('./routes/users'));

app.use('/api/auth', require('./routes/auth'));

app.use('/api/contacts', require('./routes/contacts'));

app.get('/', (req, res) => {
  //   res.send('hi !');
  res.json({ msg: 'Welcome to ContactKeeper API...' });
});

app.listen(PORT, () => console.log(' chal gaaya !'));
