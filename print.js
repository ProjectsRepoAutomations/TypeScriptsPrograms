"use strict";
//Data type
// Number 
var age = 50;
console.log("Explicit Age : " + age);
var a = 60;
console.log("Implicit Age : " + a);
console.log("-----------------------------------------------------------");
//String
var empName = "Vipul";
console.log("Explicit Name : " + empName);
var bankName = "Axis";
console.log("Implicit bank name : " + bankName);
console.log("-----------------------------------------------------------");
//boolean
var flag = true;
console.log("Explicit boolean flag : " + flag);
var check = false;
console.log("Implicit boolean check : " + check);
console.log("-----------------------------------------------------------");
//any type
let u = true;
// Remove the comment to see the error without any type
// u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
console.log(u);
let p = true;
p = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
console.log(p);
console.log("-----------------------------------------------------------");
//unknown type
let w = 1;
//Remove the comment to see the error
//console.log(w+ 10)
console.log(w + 10);
console.log("-----------------------------------------------------------");
// array
const names = [];
names.push("Vipul");
names.push("Saurav");
console.log(names);
names.forEach(nam => {
    console.log(nam);
});
console.log("-----------------------------------------------------------");
const cities = ["Surat", "Patan", "Limbdi"];
cities.forEach(city => {
    console.log(city);
});
console.log("-----------------------------------------------------------");
//tuple
let tuple1;
tuple1 = [100, "INDIA", true];
tuple1.forEach(t => {
    console.log(t);
});
console.log("-----------------------------------------------------------");
tuple1[0] = 500;
tuple1.forEach(t1 => {
    console.log(t1);
});
console.log("-----------------------------------------------------------");
//tuple read only
let tuple2 = ["UK", false, true];
tuple2.forEach(t2 => {
    console.log(t2);
});
//Assigning the tuple value 
console.log("-----------------------------------------------------------");
const [b, c, d] = tuple2;
console.log(b);
console.log(c);
console.log(d);
console.log("-----------------------------------------------------------");
// Object
var string1 = "Mahindra";
var car = {
    nam: string1,
    model: "LX",
    noOfType: 4,
    miles: 23.5,
    safe: false
};
console.log(car.nam);
console.log(car.model);
console.log(car.noOfType);
console.log(car.miles);
console.log(car.safe);
console.log("-----------------------------------------------------------");
//enum
// If nothig has specified then value start from zero 
// Lets initialize the value 1
var days;
(function (days) {
    days[days["Monday"] = 1] = "Monday";
    days[days["TuesDay"] = 2] = "TuesDay";
    days[days["Wednesday"] = 3] = "Wednesday";
    days[days["Thursday"] = 4] = "Thursday";
    days[days["Friday"] = 5] = "Friday";
    days[days["Saturday"] = 6] = "Saturday";
    days[days["Sunday"] = 7] = "Sunday";
})(days || (days = {}));
console.log(days.Monday);
console.log(days.Sunday);
var months;
(function (months) {
    months["JANUARY"] = "January";
    months["FEBRUARY"] = "February";
    months["MARCH"] = "March";
    months["APRIL"] = "April";
})(months || (months = {}));
console.log(months.JANUARY);
console.log(months.APRIL);
console.log(months.MARCH);
// Type alliases 
console.log("-----------------------------------------------------------");
const v1 = "Vipul";
const v2 = 100;
const v3 = true;
const test2 = {
    t1: v1,
    t2: v2,
    t3: v3
};
console.log(test2.t1);
console.log(test2.t2);
console.log(test2.t3);
console.log("-----------------------------------------------------------");
const rectangle = {
    height: 20,
    width: 10
};
console.log(rectangle.height);
console.log(rectangle.width);
console.log("-----------------------------------------------------------");
// the `: number` here specifies that this function returns a number
function getDateDay() {
    return new Date().getDate();
}
console.log("today's Day :" + getDateDay());
function getfullDate() {
    const now = new Date();
    console.log(now);
    return now;
}
console.log("Today's Date " + getfullDate());
function multiply(value1, value2) {
    return value1 * value2;
}
var value1 = 50;
var value2 = 60;
console.log("Multiplication of " + value1 + " and " + value2 + " is " + multiply(value1, value2));
console.log("-----------------------------------------------------------");
//TypeScript Casting
let number1 = "123";
let num1 = number1;
console.log(num1 + 100);
let n1 = Number(number1);
console.log(num1 + 100);
const value3 = "123";
const value4 = Number(value3);
console.log(value4); // 123
console.log(value4 + 100); // 223
console.log("-----------------------------------------------------------");
class Animal {
    constructor(animalname, color) {
        this.animalName = animalname;
        this.animalColor = color;
    }
    /**
     * sound
     */
    sound() {
        console.log("Roar....");
        return "Roar";
    }
}
const object = new Animal("Lion", "Brown");
console.log(object.animalName);
console.log(object.animalColor);
console.log(object.sound());
