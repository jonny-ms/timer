const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

stdin.on('data', (key) => {
  
  if (key === "b") {
    process.stdout.write('\x07');
  } else if (numbers.includes(key)) {
    process.stdout.write(`setting timer for ${key} seconds...\n`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, Number(key) * 1000);
  }
  
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.stdout.write("Thanks for using me, ciao!\n");
    process.exit();
  }
});