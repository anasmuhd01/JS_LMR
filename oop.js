//prototype inheritance

const car = {
    tyre: 4,
    accelaeraion: true,
    breaking: function () {
        console.log('car stopped')
    }
}

const bmw = {
    fuel: 'petrol',
    model: 1990,
    sunroof: true
}

bmw.__proto__ = car

bmw.breaking()
console.log(bmw.tyre) 