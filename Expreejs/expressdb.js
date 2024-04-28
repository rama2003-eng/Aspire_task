const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/submit', (req, res) => {
  const { username, password, mobile, email } = req.body;

  const user = {
    username: username,
    password: password,
    mobile: mobile,
    email: email
  };

  // Read existing data from db.json
  fs.readFile('db.json', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading data from db.json');
      return;
    }

    let userData = [];
    if (data.length !== 0) {
      userData = JSON.parse(data);
    }

    userData.push(user);

    fs.writeFile('db.json', JSON.stringify(userData, null, 2), (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error writing data to db.json');
        return;
      }
      res.send('User data saved successfully!');
    });
  });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});