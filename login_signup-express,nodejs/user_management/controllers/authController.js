const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db');

exports.register = (req, res) => {
  const { username, password, email, userType } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);

  const query = 'INSERT INTO users (username, password, email, userType) VALUES (?, ?, ?, ?)';
  db.query(query, [username, hashedPassword, email, userType], (err, result) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).json({ message: 'Internal server error' });
      return;
    }
    res.status(201).json({ message: 'User registered successfully' });
  });
};

exports.login = (req, res) => {
  const { username, password } = req.body;

  const query = 'SELECT * FROM users WHERE username = ?';
  db.query(query, [username], (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).json({ message: 'Internal server error' });
      return;
    }

    if (results.length === 0) {
      res.status(401).json({ message: 'Invalid username or password' });
      return;
    }

    const user = results[0];
    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
      res.status(401).json({ message: 'Invalid username or password' });
      return;
    }

    const token = jwt.sign({ id: user.id, userType: user.userType }, 'your_secret_key', { expiresIn: 86400 });

    res.status(200).json({ message: 'Login successful', token });
  });
};
