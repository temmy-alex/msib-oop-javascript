function machine() {
    this.merk = 'Machine A'
}

function laptop() {
    machine.call(this)
    this.specification = 'Core i7'
    this.price = '10000000'
}

var laptopA = new laptop()
console.log(laptopA)