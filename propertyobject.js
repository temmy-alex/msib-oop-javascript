var person = {
    firstName: 'User',
    lastName: 'Programming',
    age: 23,
    job: {
        title: 'Back End Engineer',
        grade: 'Senior',
        location: 'Jakarta'
    }
}

// console.log(typeof(person))
// console.log(typeof(person.job))

// Access property obj
// console.log(person.job.title)
// console.log(person.job.grade)

// Check Properties
var propName;
for (propName in person) {
    console.log(propName + " : " + person[propName])
}