// TODO: Destructuring is a ES6 syntax that scales well when an`object`
//  has multiple attributes and it may be inefficient to do reassign
//  variables one at a time. Such technique also works with `array`.
//  [] ==> Array.   {} ==> Object.

//---------- Object destructuring --------- //
// originalName: renamed = default  <-- destructuring format.
const Person = {
    age: 18,
    location: {
        city: "Taichung",
        school: "UC Berkeley"
    }
};
const { name: myName = "Yulin", location } = Person;
console.log(`${myName} is a student in ${location.school} who now lives in ${location.city}.`);

//---------- Array destructuring --------- //
const address = ["8F-5", "Dadun Street", "Nantun District", "Taichung City"];
const [number, street, district, city] = address;
console.log(`Number extracted: ${number}, and street extracted: ${street}`);