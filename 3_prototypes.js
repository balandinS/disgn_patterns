const Car = {
    wheels: 4,
    init(){
        console.log(`I have ${this.wheels} and my owner is ${this.owner}`)
    }
}


const car = Object.create(Car, {
    owner: {
        value: 'Sergey'
    }
})
car.init();