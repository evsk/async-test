/*
get a random number less than 10,
wait three seconds
write the number to the hard drive
Then, once all that is done, console log "I'm done!"

CONSTRAINTS
- No using setTimeout (must use waitOneSecond)
- No editing any file except main.js
*/

const getNumLessThanTen = require('./getNumLessThan');
const waitOneSec = require('./waitOneSecond');
const writeThisFile = require('./writetoFile')

getNumLessThanTen((err, randNum) => {
  if (err) {
    console.log(err);
  } else {
    console.log(randNum);
    waitOneSec((err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        waitOneSec((err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
            waitOneSec((err, result) => {
              if (err) {
                console.log(err);
              } else {
                console.log(result);
                writeThisFile(randNum, (err) => {
                  if (err) {
                    console.log(err);
                  } else {
                    console.log('done');
                  }
                })
              }
            })
          }
        })
      }
    })
  }
})





