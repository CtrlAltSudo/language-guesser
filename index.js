const franc = require("franc")
const langs = require('langs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Give me some text!', text => {
          const lanGuess = franc(text);
          const lanGuessLong = langs.where("3", lanGuess);
          console.log(`This sounds like ${lanGuessLong.name}`)
    readline.close();
  });



