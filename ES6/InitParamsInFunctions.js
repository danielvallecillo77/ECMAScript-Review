// VAINILLA Init params in a function 
function presentation1(name, age, job){
    var name = name || "Daniel";
    var age = age || 26;
    var job = job || "Engineer"
    var res = "Hi! My name is " + name + ", I have " + age + " years old and I'm " + job
    console.log(res);
}
presentation1();

// ES6 Init params in a function 
function presentation2(name = "Daniel", age = 26, job = "Engineer"){
    console.log(`Hi! My name is ${name}, I have ${age} years old and I'm ${job}`);
}
presentation2('Ricardo', 20, 'Mechanic')