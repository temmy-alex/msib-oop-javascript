class person {
    constructor(firstName, lastName, age, job) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.job = job;
    }
}

var user1 = new person('User 1', 'Programming', 20, 'Web Dev')
console.log(user1.job)