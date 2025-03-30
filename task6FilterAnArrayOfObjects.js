// Задача 6: Фильтрация массива объектов

let points = [
    { x: 1, y: 2 },
    { x: 3, y: 4 },
    { x: null, y: 4 },
    { x: 3, y: undefined }
];

function filterValidPoints(points) {
    return points.filter(point => point.x != null && point.y != null);
}

let validPoints = filterValidPoints(points);
console.log("Задача 6 - Валидные точки:", validPoints);

/*
Ожидаемый результат:
[ { x: 1, y: 2 }, { x: 3, y: 4 } ]
*/
