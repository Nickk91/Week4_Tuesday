// Front-end development: Arrays
// JavaScript – school method
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
function findPerson(position, id) {
  let person;
  if (position === "student") {
    person = school.students.find((s) => s.id === id);
  }
  if (position === "teacher") {
    person = school.teachers.find((s) => s.id === id);
  }
  return person;
}

console.log(findPerson("teacher", 2));

// 2. A method called “assignStudent” that takes two
// arguments, a student’s id and a subject. Assign all of the
// students to the first available teacher who teaches that
// subject and who is not in full capacity. If all of the teachers
// are in the full capacity log to the console “Sorry, no
// available teachers left”.
function assignStudent(studentId, subject) {
  const relevantStudent = school.students.find(
    (student) => student.id === studentId
  );
  const teacher = school.teachers.find((teacher) => {
    return teacher.subjects.includes(subject) && teacher.capacityLeft;
  });
  if (teacher) {
    teacher.capacityLeft--;
    teacher.students.push(relevantStudent.name);
    return teacher;
  } else {
    console.log("Sorry, no available teachers left");
  }
  assignStudent(10, "biology");
}

// 3. A method called “assignTeachersSubject” that takes two
// arguments, the teacher’s id, and a new subject. Assign the
// new subject to that particular teacher if that subject
// doesn’t exist in their array of subjects.
// 4. Create a new method for anything you want
