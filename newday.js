const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const day = process.argv[2];
const dayPath = path.join(__dirname, `src/components/day${day}`);
const templatePath = path.join(__dirname, 'src/components/template');

// Check if day number is provided
if (!day) {
    console.log('Please input day number');
    process.exit(1);
}

// Check if day folder already exists
if (fs.existsSync(dayPath)) {
    console.log(`Day ${day} already exists`);
    process.exit(1);
}

// Create day folder
fs.mkdirSync(dayPath);

// Copy template js files and rename
fs.copyFileSync(path.join(templatePath, 'day.js'), path.join(dayPath, 'day.js'));

// read originProject.json as object
const originProject = JSON.parse(fs.readFileSync(path.join(__dirname, 'originProject.json')));
const dayObject = originProject[day];
const tagMsg = `Day ${day} - ${dayObject.title} - origin website: ${dayObject.url}`;

// insert a comment to day.js tail
const dayJsPath = path.join(dayPath, 'day.js');
fs.appendFileSync(path.join(dayPath, 'day.js'), `\n\n//${tagMsg}`);

// Copy template css files and rename
fs.copyFileSync(path.join(templatePath, 'day.module.css'), path.join(dayPath, 'day.module.css'));

// Add a file name which date this folder created
fs.writeFileSync(path.join(dayPath, `${new Date().toISOString().slice(0, 10)}.log`), '');

// Open VS Code
/*
exec(`code .`, (err, stdout, stderr) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(stdout);
    console.log(stderr);
}
);
*/

console.log(`Day ${day} created`);