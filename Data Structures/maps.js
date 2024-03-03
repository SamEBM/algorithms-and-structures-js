const map1 = new Map([['a', 1], ['b', 2]]);
map1.set('c', 3);

for (const [key,value] of map1) {
    console.log(`${key}: ${value}`);
}

console.log(map1.has('a'));
console.log(map1.size);

map1.delete('a');
map1.clear();
console.log(map1);