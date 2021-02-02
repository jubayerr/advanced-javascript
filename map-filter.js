const peoples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const output = [];

for (let i = 0; i < peoples.length; i++) {
    const element = peoples[i];
    const result = element * element;
    output.push(result)
}

console.log(output);

// map

const players = [11, 22, 33, 44, 55];

// const result = players.map(function (element) {
//     // console.log(element * element);
//     // console.log(element, index, array);
//     return element * element;
// })

const result = players.map(x => x * x);

// const result = players.filter(x => x > 10);

// const result = players.find(x => x > 10);

console.log(result);

