function person(fullname, age, job) {
    this.fullname = fullname
    this.age = age
    this.job = job
}

function programmer(fullname, age, job, title, location) {
    person.call(this, fullname, age, job)
    this.title = title
    this.location = location
}

var user1 = new programmer('User1', 26, 'Back End Engineer', 'Senior', 'Jakarta')
console.log(user1)