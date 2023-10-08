var person = "User"

var people = {
    firstName: "User",
    lastName: "Programming",
    age: 20,
    job: "Web Dev",
    getFullname: function() {
        return this.firstName + " " + this.lastName
    }
}
// property (firstName, lastName, etc)
// method getFullname()

// console.log(typeof(people))
// console.log(people.getFullname())

// Access property
console.log(people.job)
console.log(people["firstName"])

// Add property
people.country = "Indonesia"

// Delete property
delete people.age;

console.log(people)