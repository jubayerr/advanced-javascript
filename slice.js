const nums = [1, 2, 3, 4, 5, 6, 7, 8];

// const part = nums.slice(2, 5) // cuting array from the index 2 to 5

// console.log(part);

// console.log(nums); // nothing change in the array after slice

const part = nums.splice(2, 5); // reomove element from array and showing it

console.log(part);
console.log(nums);

const together = nums.join(" ");

console.log(together);