// ways of getting undefined values

let apocalapsy;
console.log(apocalapsy);

// output undeifined
function add(num1, num2) {
    console.log(num1 + num2);
}

// output undeifined
const result = add(7, 13);
console.log(result);

function add(num1, num2) {
    console.log(num1, num2);
}

const result2 = add(7);
console.log(result2);

// output undeifined
const player = { name: "mash", age: 29, phone: '012345678' };
console.log(player.salary);

// output undeifined
let salary = undefined;
console.log(salary);

// output undeifined
let serial = [2, 3, 5, 7, 11, 13];
console.log(serial[19]);

// null

// you can set null as a value, or nothing as value

