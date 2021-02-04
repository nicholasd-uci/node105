// These are Constructors
    let greeting = 'Hello world'
    let greeting = new String('Hello world!')

    let num = 5
    let num = new Number(5)

    let bool = true
    let bool = new Boolean(false)

// 1 of 3 methods on how to build 'Constructor'
//      - Have To Use 'This' when using 'Constructors'

// 1. Original Build 
// example 1.
function Animal (name, type, age, sound) {
    this.name = name
    this.type = type
    this.age = age
    this.sound = sound
}

let gerald = new Animal ('Gerald', 'cow', 5, 'moooo')
let carlos = new Animal ('carlso', 'zebra', 6, 'weeee')

console.log(gerald, carlos)

// example 2.
function Movie (title, director, plot) {
    this.title = title
    this.director = director
    this.plot = plot
    this.isgood = isgood ||  true
    this.printInfo = function () {
        console.log(`
            Title: ${this.title}
            Director: ${this.director}
            Plot: ${this.plot}
        `)
    }
}

let theJoker = new Movie('The Joker', 'IDK', 'short plot', true)
let theRoom = new Movie('The Room', 'Tommy Wiss', 'short plot')

theJoker.printInfo()
theRoom.printInfo()


// 2. Factory Function 
//   - Hands you back an 'Object' this method is not considered "Constructors"
//   - we do no use "this." 

const person = (name, age, email, address) => ({ name, age, email, address })

const student = (name, age, email, address, grade, gpa) => ({
  ...person(name, age, email, address),
  grade,
  gpa,
  printInfo () {
    console.log(`
      Name: ${name}
      Age: ${age}
      Email: ${email}
      Address: ${address}
      Grade: ${grade}
      GPA: ${gpa}
    `)
  }
})

const teacher = (name, age, email, address, subject, room) => ({
  ...person(name, age, email, address),
  subject,
  room
})

let jack = student('Jack', 18, 'jack@gmail.com', '123 South St', 12, 3.8)
jack.printInfo()

let dohn = teacher('dohn', 47, 'dohn@gmail.com', '234 Main St', 'English', 407)
console.log(jack, dohn)


// 3. Class Constructors

class Person {
    constructor(name, age, email, address) {
        this.name = name
        this.age = age
        this.email = email
        this.address = address
    }
    printName () {
        console.log(this.name)
    }
}


class Student extends Person {
    constructor (name, age, email, address, grade, gpa) {
        super(name, age, email, address)
        this.grade = grade
        this.gps = gpa
    }
}
let jack = new Student('Jack', 18, 'jackjack@gmail.com', '1324 st side', 12, 2.9)

jack.printName()
console.log(jack)


class Teacher extends Person{
    constructor(name, age, email, address, subject, room) {
        super(name, age, email, address)
        this.subject = subject
        this.room = room
    }
}

let smith = new Teacher('smith', 50, 'smith@gmail.com', '555 st st', 'PE', 'Room 444')
console.log(smith)

let john = new Person('John', 47, 'john@gmail.com','1234 st lowkey')
console.log(john)





