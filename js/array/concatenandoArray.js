console.log('Maneira #1');

const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
const a3 = a1.concat(a2, [7, 8, 9]);
console.log(a3)

console.log('Maneira #2');

const a12 = [1, 2, 3]
const a22 = [4, 5, 6]
const a32 = [...a1, ...a2, ...[7, 8, 9]]
console.log(a32)