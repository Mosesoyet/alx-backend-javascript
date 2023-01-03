/* eslint-disable */
export default function getListStudentIds (students) {
    if (Array.isArray(students)) {
        return students.map((stud) => stud.id);
    }
    return [];
}