// Задача 9: Пересечение объектов — сравнение ключей и значений

const person1 = {
    name: "Person",
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: "112",
        email: "email@domain.com"
    },
    address: "Moldova"
};

const person2 = {
    name: "Person",
    age: 123,
    salary: 2000.00,
    contacts: {
        phone: "112",
        email: "email@domain.com"
    },
    address: "Romania"
};

function intersection(obj1, obj2) {
    let result = {};

    for (let key in obj1) {
        if (typeof obj1[key] === "object" && obj1[key] !== null) {
            if (JSON.stringify(obj1[key]) === JSON.stringify(obj2[key])) {
                result[key] = obj1[key];
            }
        } else {
            if (obj1[key] === obj2[key]) {
                result[key] = obj1[key];
            }
        }
    }

    return result;
}

const commonFields = intersection(person1, person2);
console.log("Задача 9 - Пересечение объектов:", commonFields);
