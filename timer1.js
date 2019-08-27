const times = process.argv.slice(2).filter((a) => a > 0);

for (let time of times) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, Number(time) * 1000)
};