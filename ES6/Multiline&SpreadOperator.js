
// VAINILLA Multiline

var lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n"
+ "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \n"
+ "when an unknown printer took a galley of type and scrambled it to make a type specimen book."

console.log(lorem)

// ES6 Multiline

let lorem2 = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book.`

console.log(lorem2)


//ES6 Spread Operator

let squad1 = ['Jose', 'Daniel', 'Angel']
let squad2 = ['Elena', 'Vanessa', 'Tarini']
let tribe = [...squad1, ...squad2]
console.log(tribe)


