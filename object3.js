var person = function(firstName, lastName, age, job) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.job = job;
}

var user1 = new person('User', 'Programming', 20, 'Web Dev')
user1.country = 'Indonesia'
console.log(user1)