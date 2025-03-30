// Задача 3: Работа с массивом объектов студентов

// + Создаём массив студентов с их оценками
const students = [
    { name: "Alice", marks: [8, 10, 7, 5, 4] },
    { name: "Bob", marks: [3, 4, 2, 5, 6] },
    { name: "Charlie", marks: [9, 10, 9, 9, 7] },
    { name: "David", marks: [6, 5, 4, 7, 5] },
    { name: "Emma", marks: [10, 9, 10, 10, 9] }
];

// + Функция для подсчета среднего балла
function getAverage(marks) {
    // + Суммируем все оценки и делим на их количество
    return (marks.reduce((sum, mark) => sum + mark, 0) / marks.length).toFixed(1);
}

// 1. Вывести имя каждого студента и его среднюю оценку
console.log("\n== Средний балл каждого студента ==");
students.forEach(student => {
    const avg = getAverage(student.marks);
    console.log(`${student.name}: ${avg}`);
});

// 2. Найти студентов со средним баллом < 5
console.log("\n== Студенты со средним баллом < 5 ==");
students.forEach(student => {
    const avg = getAverage(student.marks);
    if (avg < 5) {
        console.log(`${student.name} (${avg})`);
    }
});

// 3. Найти студента с самым высоким и самым низким баллом
let maxStudent = students[0];
let minStudent = students[0];

students.forEach(student => {
    const avg = getAverage(student.marks);
    if (avg > getAverage(maxStudent.marks)) maxStudent = student;
    if (avg < getAverage(minStudent.marks)) minStudent = student;
});

console.log("\n== Самые высокие и низкие средние баллы ==");
console.log(`Highest Average: ${maxStudent.name} (${getAverage(maxStudent.marks)})`);
console.log(`Lowest Average: ${minStudent.name} (${getAverage(minStudent.marks)})`);

// 4. Отсортировать студентов по среднему баллу по убыванию
let sortedStudents = [...students].sort((a, b) =>
    getAverage(b.marks) - getAverage(a.marks)
);

console.log("\n== Список студентов по убыванию среднего балла ==");
sortedStudents.forEach(student => {
    console.log(`${student.name}: ${getAverage(student.marks)}`);
});

// 5. Вывести студентов, у которых средняя оценка выше средней по классу

// + Считаем среднюю оценку по классу (всех студентов вместе)
let totalAvg = students.reduce((sum, student) => sum + parseFloat(getAverage(student.marks)), 0) / students.length;

console.log("\n== Студенты, чей средний балл выше среднего по классу ==");
console.log(`Class Average: ${totalAvg.toFixed(2)}`);

// + Выводим студентов с индивидуальным средним баллом выше среднего по классу
students.forEach(student => {
    let avg = getAverage(student.marks);
    if (avg > totalAvg) {
        console.log(`${student.name} (${avg})`);
    }
});
