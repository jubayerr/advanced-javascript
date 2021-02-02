const students = [
    { id: 101, name: 'Jonas Kahnwald' },
    { id: 102, name: 'Magnus Neilsen' },
    { id: 103, name: 'Bartoze Tidemen' },
    { id: 104, name: 'Martha Neilsen' }
];

// const allStudents = [];

// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     allStudents.push(element.name)
// }

// console.log(allStudents);

const names = students.map(s => s.name);
const section = students.filter(s => s.id > 100)

console.log(names);
console.log(section);