// Basic Types
let id: number = 5;
let company: string = "RotaExata";
let isPublished: boolean = true;
let x: any = "Hello";

// array apenas de números
let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, 'Hello'];

// Tuple: especifica tipos em um array fixo
let person: [number, string, boolean] = [1, 'Leo', true];

// Tuple Array
let employee: [number, string][]

employee = [
  [1, 'Leo'],
  [2, 'Leon'],
  [3, 'Leoncio'],
];

// Union: multiplas tipagens
let pid: string | number = 22;

// Enum: permite criar um set de constantes
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right
}

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

// Objects
// Type: definir um tipo de dado; union, 
type User = {
  id: number,
  name: string
}

const user: User = {
  id: 1,
  name: "Leo"
}

// Type Assertion: tratar uma nova entidade como um tipo diferente
let cid: any = 1;
// let customerId = <number>cid
let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

// Void: Não retorna nada
function log(message: string | number): void {
  console.log(message)
}

// Interfaces: usadas para descrever formas de dados, como um objeto
interface UserInterface {
  id: number,
  name: string
  age?: number // prop opcional
}

const user2: UserInterface = {
  id: 2,
  name: "Leonidas"
}

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// Classes
interface PersonInterface {
  id: number
  name: string
  register(): string
}

class Person implements PersonInterface {
  id: number
  name: string

  constructor(id: number, name: string) {
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
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position
  }
}

const emp = new Employee(24, "Leon", "Java Developer");

// Generics: construir componentes reutilizáveis
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(['Geo', "Cien", "Lapos"]);

numArray.push(2);