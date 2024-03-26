// Map
let map = new Map();
map.set("A",1);
map.set("B",2);
map.set("C",3);
console.log(map.has("A"));
for (let key of map.keys()) {
    console.log(key);
}
for (let value of map.values()) {
    console.log(value);
}
map.set("D",4);
for (let entry of map.entries()) {
    console.log(entry[0], entry[1]);
}
console.log(map.size);

// Set
let set = new Set();
set.add('APPLE');
set.add('ORANGE');
set.add('MANGO');
console.log(set.has('apple'));
for (let entry of set) {
    console.log(entry);
}