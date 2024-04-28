const fs = require('fs');

const filePath = 'Sample.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    console.log('File content:');
    console.log(data);
  }
});

const newData = 'This is new content.';
fs.writeFile(filePath, newData, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('Write operation successful.',newData);
  }
});

const appendData = '\nThis content is appended.';
fs.appendFile(filePath, appendData, (err) => {
  if (err) {
    console.error('Error appending to file:', err);
  } else {
    console.log('Append operation successful.');
  }
});