// These are Constructors
    // let greeting = 'Hello world'
    // let greeting = new String('Hello world!')

    // let num = 5
    // let num = new Number(5)

    // let bool = true
    // let bool = new Boolean(false)

// 1 of 3 methods on how to build 'Constructor'
//      - Have To Use 'This' when using 'Constructors'

// 1. Original Build 
function Animal (name, type, age, sound) {
    this.name = name
    this.type = type
    this.age = age
    this.sound = sound
}

let gerald = new Animal ('Gerald', 'cow', 5, 'moooo')
let carlos = new Animal ('carlso', 'zebra', 6, 'weeee')

console.log(gerald, carlos)

// 2. Factory Function 

function Movie (title, director, plot) {
    this.title = title
    this.director = director
    this.plot = plot
    this.isgood = isgood || true
    this.printInfo = function () {
        console.log(`
        Title: ${this.title}
        Director: ${this.director}
        Plot: ${this.plot}
        `)
    }
}

// 3. Class Constructors

// this will be the class constrcutors for teachers section

//  here we will make students



