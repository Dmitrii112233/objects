// Задача 2: Создание объекта пользователя

// + Создаём пустой объект user
let user = {};
// + Добавляем свойство name
user.name = "John";
// + Добавляем свойство surname
user.surname = "Smith";

// + Изменяем значение name
user.name = "Pete";
// + Удаляем свойство name
delete user.name;
console.log(user)
