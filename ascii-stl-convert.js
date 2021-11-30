const stl = require('stl')
const fs = require('fs');

const [ ,, filename] = process.argv;
 
 
const target = filename;

var facets = stl.toObject(fs.readFileSync(filename));
fs.writeFileSync(target + '-ascii.stl', stl.fromObject(facets));