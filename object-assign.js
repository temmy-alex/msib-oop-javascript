let flag = 'active'

var person = {
    fullname: 'User 1',
    job: 'Front End Engineer'
}

var person2 = Object.assign({}, {fullname: 'User 2', job: 'Back End Engineer'})
var person3 = Object.assign({}, person2, {job: 'DevOps Engineer'})
var person4 = Object.assign({}, {job: 'Staff Engineer'}, {flag})

console.log(person2)
console.log(person3)
console.log(person4)