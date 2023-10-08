var person = {
    fullname: ['User', 'Programming'],
    age: 20,
    job: "Web Dev",
    getFullname: function(){
        return this.fullname[0] + " " + this.fullname[1]
    },
    getFullName: function () {
        return this.fullname;
    },
    keterangan: {
        'nama': 'Raieaswajjillah',
        'kelas': 'FSWD5B'
    },
    AmbilFullname: function() {
        return "NAMA : " + this.keterangan['nama']  +  " | KELAS : " + this.keterangan['kelas'];
    }
}

console.log(person)
console.log(person.fullname[0])
console.log(person.fullname[1])
console.log(person.getFullname())
console.log(person.getFullName().join(' '))
console.log(person.AmbilFullname());