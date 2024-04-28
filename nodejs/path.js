const path = require('path');

const fullPath = path.join(__dirname, 'files', 'sample.txt');
console.log('Full path:', fullPath);

const absolutePath = path.resolve('files', 'sample.txt');
console.log('Absolute path:', absolutePath);


const dirname = path.dirname(fullPath);
console.log('Directory name:', dirname);

const extension = path.extname(fullPath);
console.log('File extension:', extension);

const parsedPath = path.parse(fullPath);
console.log('Parsed path:', parsedPath);