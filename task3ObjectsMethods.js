// Задача 3: Методы объектов — умножение числовых свойств

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2;
        }
    }
}

multiplyNumeric(menu);
console.log("Задача 3 - Умноженные свойства объекта menu:", menu);

/*
Ожидаемый результат:
{
  width: 400,
  height: 600,
  title: "My menu"
}
*/
