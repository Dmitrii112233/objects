// Задача 8: Перевод значений объекта

const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const ruTranslations = {
    "Monday": "Понедельник",
    "Tuesday": "Вторник",
    "Wednesday": "Среда",
    "Thursday": "Четверг",
    "Friday": "Пятница",
    "Saturday": "Суббота",
    "Sunday": "Воскресенье"
};

const roTranslations = {
    "Monday": "Luni",
    "Tuesday": "Marți",
    "Wednesday": "Miercuri",
    "Thursday": "Joi",
    "Friday": "Vineri",
    "Saturday": "Sâmbătă",
    "Sunday": "Duminică"
};

const translatedRU = {};
const translatedRO = {};

weekDays.forEach(day => {
    translatedRU[day] = ruTranslations[day];
    translatedRO[day] = roTranslations[day];
});

console.log("Задача 8 - Перевод на русский язык:", translatedRU);
console.log("Задача 8 - Перевод на румынский язык:", translatedRO);

/*
Ожидаемый результат:

Перевод на русский язык:
{
  Monday: "Понедельник",
  Tuesday: "Вторник",
  Wednesday: "Среда",
  Thursday: "Четверг",
  Friday: "Пятница",
  Saturday: "Суббота",
  Sunday: "Воскресенье"
}

Перевод на румынский язык:
{
  Monday: "Luni",
  Tuesday: "Marți",
  Wednesday: "Miercuri",
  Thursday: "Joi",
  Friday: "Vineri",
  Saturday: "Sâmbătă",
  Sunday: "Duminică"
}
*/
