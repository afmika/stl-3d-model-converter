const stl = require('stl')
const fs = require('fs');

const [ ,, filename] = process.argv;
 
 
const target = filename;

const facets = stl.toObject(fs.readFileSync(filename));
const tris = facets.facets;

let lines = []; 
for (let tri of tris) {
	const {normal, verts} = tri;
	lines.push(normal.join(' '));
	for (let ver of verts) {
		lines.push(ver.join(' '));
	}
}

const total = lines.length;
console.log('Triangles ', total);
lines = [ total, ...lines];

fs.writeFileSync(filename.replace(/\.stl/i, '-raw') + '.txt', lines.join('\n'));