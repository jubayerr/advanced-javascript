// output true
const first = 2;
const second = 2;

if (first == second) {
    console.log("condition is true.");
}
else {
    console.log("condition is false");
}

// output is also true
const first2 = 2;
const second2 = "2";

if (first2 == second2) {
    console.log("condition is true.");
}
else {
    console.log("condition is false");
}

// output is false
const first3 = 2;
const second3 = "2";

if (first3 === second3) {
    console.log("condition is true.");
}
else {
    console.log("condition is false");
}

// == is check the value, === is check the value and type of a value