let arr = [100,200,300,400];
// A using map
const a = arr.map((arr) => arr + 30);
console.log(a);

// B using filter
//const a = arr.filter((arr) => arr > 100);
//console.log(a);

//C using reduce
const c = arr.reduce((sum, num) => sum + num, 0);
console.log(c);


