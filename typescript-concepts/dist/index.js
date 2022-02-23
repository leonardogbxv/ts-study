"use strict";
// Basic Types
let id = 5;
let company = "RotaExata";
let isPublished = true;
let x = "Hello";
// array apenas de números
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
// Tuple: especifica tipos em um array fixo
let person = [1, 'Leo', true];
// Tuple Array
let employee;
employee = [
    [1, 'Leo'],
    [2, 'Leon'],
    [3, 'Leoncio'],
];
// Union: multiplas tipagens
let pid = 22;
// Enum: permite criar um set de constantes
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "Leo"
};
// Type Assertion: tratar uma nova entidade como um tipo diferente
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
// Void: Não retorna nada
function log(message) {
    console.log(message);
}
const user2 = {
    id: 2,
    name: "Leonidas"
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} agora está registrado`;
    }
}
const leo = new Person(23, "Leonardo");
// Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(24, "Leon", "Java Developer");
// Generics: construir componentes reutilizáveis
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Geo', "Cien", "Lapos"]);
numArray.push(2);
