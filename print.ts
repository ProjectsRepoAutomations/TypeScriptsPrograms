//Data type
// Number 
var age : number = 50
console.log("Explicit Age : "+age)
var a = 60
console.log("Implicit Age : "+a)
console.log("-----------------------------------------------------------")

//String
var empName: String = "Vipul"
console.log("Explicit Name : "+empName)
var bankName = "Axis"
console.log("Implicit bank name : "+bankName)
console.log("-----------------------------------------------------------")

//boolean
var flag : boolean = true
console.log("Explicit boolean flag : "+flag)
var check = false
console.log("Implicit boolean check : "+check)
console.log("-----------------------------------------------------------")

//any type
let u = true;
// Remove the comment to see the error without any type
// u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
console.log(u)
let p: any = true;
p = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
console.log(p)
console.log("-----------------------------------------------------------")

//unknown type
let w: unknown = 1;
//Remove the comment to see the error
//console.log(w+ 10)
console.log((w as number)+ 10)
console.log("-----------------------------------------------------------")

// array
const names : string[] = []
names.push("Vipul")
names.push("Saurav")
console.log(names)
names.forEach(nam => {
   console.log(nam)
});
console.log("-----------------------------------------------------------")
const cities : readonly String[] = ["Surat", "Patan","Limbdi"]
cities.forEach(city => {
    console.log(city)
});
console.log("-----------------------------------------------------------")
//tuple
let tuple1 : [number, String, boolean]
tuple1 = [100,"INDIA", true]
tuple1.forEach(t => {
    console.log(t)
});
console.log("-----------------------------------------------------------")
tuple1[0] = 500
tuple1.forEach(t1 => {
    console.log(t1)
});
console.log("-----------------------------------------------------------")
//tuple read only
let tuple2 : readonly [string, boolean,boolean] = ["UK",false, true]
tuple2.forEach(t2 => {
    console.log(t2)
});
//Assigning the tuple value 
console.log("-----------------------------------------------------------")
const [b,c,d] = tuple2
console.log(b)
console.log(c)
console.log(d)
console.log("-----------------------------------------------------------")
// Object
var string1 = "Mahindra"
var car : {nam:string, model:string, noOfType: number, miles: number, safe:boolean} = {
    nam: string1,
    model: "LX",
    noOfType: 4,
    miles: 23.5,
    safe: false
}
console.log(car.nam)
console.log(car.model)
console.log(car.noOfType)
console.log(car.miles)
console.log(car.safe)
console.log("-----------------------------------------------------------")
//enum
// If nothig has specified then value start from zero 
// Lets initialize the value 1
enum days {
    Monday = 1,
    TuesDay,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

console.log(days.Monday)
console.log(days.Sunday)

enum months {
    JANUARY = 'January',
    FEBRUARY = "February",
    MARCH = 'March',
    APRIL = 'April'
}
console.log(months.JANUARY)
console.log(months.APRIL)
console.log(months.MARCH)

// Type alliases 
console.log("-----------------------------------------------------------")

type var1 = string
type var2 = number
type var3 = boolean

type test = {
    t1 : var1,
    t2 : var2,
    t3 : var3
}

const v1 : var1 = "Vipul"
const v2 : var2 = 100
const v3 : var3 = true

const test2 : test = {
    t1 : v1,
    t2 : v2,
    t3 : v3
}

console.log(test2.t1)
console.log(test2.t2)
console.log(test2.t3)
console.log("-----------------------------------------------------------")
//Interface
interface Rectangle {
    height: number,
    width: number
}
  
const rectangle: Rectangle = {
    height: 20,
    width: 10
};
console.log(rectangle.height)
console.log(rectangle.width)
console.log("-----------------------------------------------------------")
  // the `: number` here specifies that this function returns a number
function getDateDay(): number {
    return new Date().getDate();
}

  console.log("today's Day :"+getDateDay())

function getfullDate() : Date{
    const now = new Date();
    console.log(now);
    return now;
}
console.log("Today's Date " +getfullDate())

function multiply(value1 : number, value2 : number) : number{
      return value1 * value2
}
var value1 = 50
var value2 = 60
console.log("Multiplication of "+ value1 +" and " + value2 + " is " + multiply(value1,value2))
console.log("-----------------------------------------------------------")
//TypeScript Casting
let number1 : unknown = "123"
let num1 = number1 as number
console.log(num1 + 100)
let n1 = Number(number1)
console.log(num1 + 100)

const value3: string = "123";
const value4: number = Number(value3);

console.log(value4); // 123
console.log(value4+100); // 223

console.log("-----------------------------------------------------------")
class Animal {
    animalName : string
    animalColor : string
    constructor(animalname:string, color : string){
        this.animalName = animalname
        this.animalColor = color
    }
 /**
  * sound
  */
 public sound() : string {
    console.log("Roar....")
    return "Roar"
 }
}

const object = new Animal("Lion","Brown")
console.log(object.animalName)
console.log(object.animalColor)
console.log(object.sound())
