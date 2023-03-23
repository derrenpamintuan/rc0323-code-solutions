/* exported getStudentNames */
function getStudentNames(students) {
  const array = [];
  for (let i = 0; i < students.length; i++) {
    array.push(students[i].name);
  }
  return array;
}
