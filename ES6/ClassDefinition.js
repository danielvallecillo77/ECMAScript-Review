
// VAINILLA Class constructor

var Person1 = function(name, yearOfBirth, country){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.country = country;
}
var nicolas = new Person1('Nicolas', 1882, 'France');
console.log(nicolas.country);


// ES6 Class constructor 

class Person2 {
    constructor(name, yearOfBirth, country) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.country = country;
    }
    calculateAge(){
        let currentDate = new Date()
        return currentDate.getFullYear() - this.yearOfBirth
    }
}

var daniel = new Person2('Daniel', 1993, 'Spain')
console.log(daniel.calculateAge())

