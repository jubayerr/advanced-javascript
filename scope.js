function sum(first, second) {
    let result = first + second;
    // console.log(result); // can access
    if (result > 8) {
        const greeting = "Congratulate!"
        console.log(greeting); //can be access
    }
    return result;
}


// console.log(result); // can not access result

const output = sum(3, 7);

console.log(output);