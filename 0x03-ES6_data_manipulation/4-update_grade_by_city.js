export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  return getListStudents
    .filter((student) => student.location === city)
    .map((student) => {
      const grade = newGrades.filter((newGrade) => newGrade.studentId === student.id);
      const newStudent = student;

      if (grade.length > 0) {
        newStudent.grade = grade[0].grade;
      } else newStudent.grade = 'N/A';

      return newStudent;
    });
}
