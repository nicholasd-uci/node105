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
  
  console.log(teacher)