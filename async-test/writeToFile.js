const fs = require('fs');

const writeToFile = (num, callback) => {
  fs.writeFile('numFile.txt', num, 'utf8', (err) => {
    if (err) {
      console.log(err);
    } else {
      callback();
    }
  });
};

module.exports = writeToFile;

