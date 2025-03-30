// Задача 4: Клонирование объекта

let user1 = {
    name: "User 1",
    age: 123
};

let user2 = { ...user1 };

user2.name = "User 2";
user2.age = 321;

console.log("Задача 4 - Оригинальный объект user1:", user1);
console.log("Задача 4 - Клон user2 после изменения:", user2);

/*
Ожидаемый результат:
user1: { name: "User 1", age: 123 }
user2: { name: "User 2", age: 321 }
*/
