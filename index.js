const franc = require("franc")
const langs = require('langs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Give me some text!', text => {
    console.log(`This sounds like ${franc(langs.codes(text))}`);
    readline.close();
  });



