// Задача 7: Геттеры для свойств объекта
let personInfo = {
    name: "Ion",
    age: 30,
    salary: 2000,
    contacts: {
        phone: "+37377777777",
        email: "ion@domain.com"
    },
    address: "Chisinau",

    getName() {
        return this.name;
    },
    getAge() {
        return this.age;
    },
    getSalary() {
        return this.salary;
    },
    getContacts() {
        return this.contacts;
    },
    getAddress() {
        return this.address;
    }
};

console.log("Задача 7 - Геттер getName:", personInfo.getName()); // Ion
console.log("Задача 7 - Геттер getAge:", personInfo.getAge());   // 30
console.log("Задача 7 - Геттер getSalary:", personInfo.getSalary()); // 2000
console.log("Задача 7 - Геттер getContacts:", personInfo.getContacts()); // { phone: ..., email: ... }
console.log("Задача 7 - Геттер getAddress:", personInfo.getAddress()); // Chisinau
