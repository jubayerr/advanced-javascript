// falsy value - 0, "", undefined, null, NaN, false
// truthy - '0', " ", string, [], {}, true

const name = "";

if (name) {
    console.log("condition is true");
}
else {
    console.log("conditon is not true");
}