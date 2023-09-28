// The following exercise contains the following subjects:
// ● object
// ● methods
// ● arrays
// ● array methods
// Instructions
// Here is your school object (see below):
const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
};
// Take the school object and create the following methods to
// that object:
// 1. A method called “findPerson” takes two arguments, a type
// (either a student or teacher), and an id. It will return a
// particular object of that person.
findPerson : function(type , id){
    let person;
    if (type === 'student'){
        person =  this.students.find(s => {
            return s.id === id;
        })
    }
    
    if (type === 'teacher'){
        person = this.teachers.find(t => {
            return t.id === id
        })
            
        }
        return person;
}





console.log(school.findPerson('teacher' , 2))


// 2. A method called “assignStudent” that takes two
// arguments, a student’s id and a subject. Assign all of the
// students to the first available teacher who teaches that
// subject and who is not in full capacity. If all of the teachers
// are in the full capacity log to the console “Sorry, no
// available teachers left”.

school.assignStudent = (studentId, subject) =>{
    const findPerson = school.students.find(student => student.id === studentId);

    console.log(findPerson)
    const teacher = school.teachers.find(teacher => {
        return teacher.subjects.includes(subject) && teacher.capacityLeft;})
        // teacher
    if(teacher){
        teacher.capacityLeft--;
        teacher.students.push(findPerson.name);
        return teacher;
        // capacityLeft =- 1
    } else {
        console.log('Sorry, no available teachers left')
    }
}
school.assignStudent(10, 'chemistry')

console.log(school.teachers)
// 3. A method called “assignTeachersSubject” that takes two
// arguments, the teacher’s id, and a new subject. Assign the
// new subject to that particular teacher if that subject
// doesn’t exist in their array of subjects.
// 4. Create a new method for anything you want

