const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const cors = require('cors');



dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());  // To parse incoming JSON

const users = [{ username: 'shiva', password: 'shiva' }]; // Hardcoded user for testing

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Find user in the users array
  const user = users.find((user) => user.username === username);

  // Validate user credentials
  if (user && user.password === password) {
    const accessToken = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ accessToken });
  } else {
    res.status(401).send('Invalid username or password');
  }
});

const solarRoutes = require('./routes/solar');
app.use('/api', solarRoutes);


app.listen(3000, () => {
  console.log('Backend running at http://localhost:3000');
});
