// Spread & Rest example
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
console.log(newArr);

function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
