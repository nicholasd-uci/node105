// These are Constructors
    // let greeting = 'Hello world'
    // let greeting = new String('Hello world!')

    // let num = 5
    // let num = new Number(5)

    // let bool = true
    // let bool = new Boolean(false)

// 1 of 3 methods on how to build 'Constructor'

// 1. Original Build 
//      - Have To Use 'This' when using 'Constructors'

function Animal (name, type, age, sound) {
    this.name = name
    this.type = type
    this.age = age
    this.sound = sound
}

let gerald = new Animal ('Gerald', 'cow', 5, 'moooo')
let carlos = new Animal ('carlso', 'zebra', 6, 'weeee')

console.log(gerald)
console.log(carlos)


// 2. Factory Function 

// 3. Class Constructors



