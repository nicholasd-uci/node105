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
// Hands you back an 'Object' this method is not considered "Constructors"
//          - we do no use "this" 

function Person (name, age, email, address) {
    this.name = name
    this.age = age
    this.email = email
    this.address = address
    this.printInfo = function () {
      console.log(`
        Name: ${this.name}
        Age: ${this.age}
        Email: ${this.email}
        Address: ${this.address}
      `)
    }
  }
  
  function Student (name, age, email, address, grade, gpa) {
      Person.call(this, name, age, email, address)
      this.grade = grade
      this.gpa = gpa
  }
  
  let student = new Student('Jack', 18, 'jack@yahoo.com', '123 south st', 12, 3.8)
  student.printInfo()
  console.log(student)
  
  function Teacher (name, age, email, address, subject, room) {
      Person.call(this, name, age, email, address)
      this.subject = subject
      this.room = room
  }
  
  let teacher = new Teacher('john', 47, 'john@email.com', '234 west st', 'English', 403)
  teacher.printInfo()
  console.log(teacher)


// 3. Class Constructors







