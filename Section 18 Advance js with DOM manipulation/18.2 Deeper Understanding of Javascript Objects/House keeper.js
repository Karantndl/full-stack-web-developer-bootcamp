//this is object
// var housekeep1 = {
//   name: "bobby",
//   age: 12,
//   yearsOfExperiance: 3,
//   languages: ["Gujarati", "hindi"],
// };

// better then object when we have mutiple object we can use contructor like below
// bellow is contructor

function housekeeps(name, age, yearsOfExperiance, languages) {
  this.name = name;
  this.age = age;
  this.yearsOfExperiance = yearsOfExperiance;
  this.languages = languages;
  this.clean = function () {
    console.log("Clearning in progress");
  };
}
//easier with fewer line
var housekeep1 = new housekeeps("kdot", 20, 12, [
  "espaniol",
  "English",
  "gujji",
]);

var housekeep2 = new housekeeps("test", 23, 12, ["test1", "test2", "test3"]);
console.log(housekeep1);
console.log(housekeep2);
housekeep1.clean();
