
var names = [
    {name: "Daniel", age: 26},
    {name: "Pepe", age: 25}
];

// VAINILLA function
var listOfNames = names.map(function(item){
    console.log(item.name)
});

// ES6 Arrow function
var listOfNames = names.map(item=> console.log(item.name))

// ES6 Promises

const trustPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Everything is fine!')
        }
        else {
            reject('Something is wrong!')
        }
    });
}

trustPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error))

