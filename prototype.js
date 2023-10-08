function Person(fullname, lahir, job) {
    this.fullname = fullname
    this.lahir = lahir;
    this.job = job
}

Person.prototype.city = 'Jakarta'
Person.prototype.usia = function() {
    return 2023 - this.lahir
}

var user1 = new Person('User1', 1997, 'Back End Engineer')
console.log(user1.city)
console.log(user1.usia())
