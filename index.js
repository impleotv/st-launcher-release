const Mustache = require('mustache');
const fs = require('fs');
const MUSTACHE_MAIN = './main.mustache';

var args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Please enter a version number');
}

//const pjsonLauncher = JSON.parse(fs.readFileSync('./st-launcher/package.json', 'utf8'));

let DATA = {
  //version: pjsonLauncher.version,
  version: args[1],
  date: new Date().toLocaleDateString('en-IL', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
    timeZone: 'Asia/Jerusalem',
  }),
};

function generateReadMe() {
  fs.readFile(MUSTACHE_MAIN, (err, data) =>  {
    if (err) throw err;
    const output = Mustache.render(data.toString(), DATA);
    fs.writeFileSync('README.md', output);
  });
}

generateReadMe();
