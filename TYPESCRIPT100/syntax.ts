// 🌟 1. Basic Type Declarations and Assignments
let age: number = 100;
age = 1;

let fname: string;
let isTrue: boolean;
isTrue = false;

let lname = "Bezos";         // TypeScript infers this as string
lname = "Ravat";             // Allowed because it's still a string

// 🧮 2. Arrays and Inference
let names: string[] = ["Jack", "Jill"];
names.push("James");

let ages = [12, 13, 19];     // Inferred as number[]
let constAge = ages[2];      // Accessing a specific value

// 🧩 3. Mixed-Type Array (Union types via inference)
let things = [true, "hello", 1]; // Inferred as (string | number | boolean)[]
const thing = things[0];         // Could be a boolean, string, or number

// 🚫 4. Null and Undefined (fixed types)
let isNull = null;
let isDefined = undefined;
// These are initialized with fixed types, can't be changed to another type

// 👤 5. Object with Explicit Typing
let user: { firstName: string; surName: string; age: number } = {
    firstName: "Mario",
    surName: "Superrr",
    age: 21
};
user.age = 22; // Valid update

// 🧑‍🤝‍🧑 6. Tuples (fixed-length, ordered types)
let user1: [string, number, number] = ["Jeff", 21, 9789721332];
let user2: [string, number, number];
user2 = ["May", 98, 88931];

let users: [fname: string, sname: string];
users = ["Hey", "World"];
console.log(users[0]);

function useCoords(): [number, number] {
    return [-214, -892.097];
}

// 👨‍👦 7. Objects without Type Safety (No TypeScript checking)
let person = {
    firstName: "Luigi",
    age: "Twenty-One"
};
person.age = "Hahaha"; // Allowed because `age` is already a string

// ➕ 8. Functions with Parameters and Return Types
function add(x: number, y: number): number {
    return x + y;
}

const result = add(1, 2);

const subtract = (x: number, y: number): number => {
    return x - y;
};

function addAll(items: number[]) {
    const total = items[1];
    console.log(total);
}

function formatGreeting(name: string, msg: string) {
    return `${name}, ${msg}`;
}

// 🌀 9. Using `any` (not recommended unless necessary)
let change: any;
change = 1;
change = "Hey guys";

let title;
title = 25;
title = { header: "Hello" };

let manyThings: any[] = [21, "9+10", null];
manyThings.push(true);

function heyGuys(x: any): any {
    return 9 + x;
}

// 📘 10. Interfaces (defining object structure)
interface Author {
    name: string;
    img: string;
}

const authorOne: Author = {
    name: "Jeff",
    img: "dist/img/png.png"
};

interface Vehicle {
    wheels: number;
    startEngine(): void;
    authpr: Author;
}

const car: Vehicle = {
    wheels: 4,
    startEngine: () => console.log("Engine started!"),
    authpr: authorOne
};

const getVehName = (vehicle: Vehicle): void => {
    console.log(`${vehicle.authpr.name}`);
};
getVehName(car);

// 🚗 11. Arrays of Objects with Interface Types
let cars: Vehicle[] = [];
cars.push(car);
cars.push(car);

// 🎨 12. Type Aliases
type rgb = [number, number, number];
function getRandomColour(): rgb {
    return [21, 23, 42];
}

type User = {
    type: "user",
    name: string;
    age: number;
};
type Person = {
    type: "person"
    fname: string;
    height: number;
};

const userOne: User = {
    type: "user",
    name: "Jeff",
    age: 23
};

// Union types
let someID: number | string | null = null
someID = 23
someID = "w22413"

type ID = number | string

let newID: ID = 123

function swapType(id: ID): ID {
    if (typeof id === 'string') {
        return parseInt(id)
    } else{
        return id.toString()
    }
}

function getUser(value: User | Person): void {
    if (value.type === 'user'){
        console.log(value.age, value.name)
    } else if (value.type === "person"){
        console.log(value.fname, value.height)
    }
}
