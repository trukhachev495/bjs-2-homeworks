function Student (name, gender, age) {
  this.name = name
  this.gender = gender
  this.age = age
  this.marks = []
  this.subject = null
}
Student.prototype.setSubject = function (subject) {
  this.subject = subject
}

Student.prototype.addMarks = function (...marks) {
  if (!this.marks) {
    return (this.marks = undefined)
  }
  this.marks.push(...marks)
}

Student.prototype.getAverage = function () {
  if (!this.marks || this.marks.length === 0) {
    return 0
  } else {
    let sum = this.marks.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    )
    return sum / this.marks.length
  }
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason
  delete this.marks
  delete this.subject
}
