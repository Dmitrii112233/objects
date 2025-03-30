// Задача 2: Работа со свойствами объекта — сумма зарплат

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;

for (let key in salaries) {
    sum += salaries[key];
}

console.log("Задача 2 - Сумма зарплат:", sum);
// Ожидаемый результат: 390
