var people = [
    {fullname: 'Dev 1', job: 'Senior Back End Engineer', age: 28},
    {fullname: 'Dev 2', job: 'Front End Engineer', age: 21},
    {fullname: 'Dev 3', job: 'DevOps Engineer', age: 23},
]

console.log(people[0].fullname)
console.log(people[0].job)
console.log(people[1].fullname)
console.log(people[2].job)

people.sort(function(x, y) {
    return x.age - y.age
})

people.sort(function(x, y) {
    return y.age - x.age
})