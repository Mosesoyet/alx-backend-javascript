/* eslint-disable */
export default function updateStudentGradeByCity(students, city, newGrade ) {
    return students
    .filter((stud) => stud.location == city)
    .map((stud) => {
        let grades = newGrade.find((grade) => grade.studentId == stud.id);
        let grade = grades ? grades.grade: "N/A";
        return { ...stud, grade };
    });
}