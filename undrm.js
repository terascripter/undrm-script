const fs = require('fs');

const DRMKEY = ;
const file = "./index.js"
const output = "./index-out.js"
const regex = /\((\d+?)\^\(DRMKEY<?<?(\d+)?\)\)/g

/* -- DO NOT EDIT PAST HERE -- */

let data = fs.readFileSync(file, "utf8");
let match;

let result = data.replace(regex, (text, base, shift) => {
    shift = shift ? parseInt(shift) : 0;
    base = parseInt(base);
    return base ^ (DRMKEY << shift);
});

fs.writeFileSync(output, result);