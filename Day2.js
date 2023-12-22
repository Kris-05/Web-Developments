//Creating a Simple Object
const Personal = {
    name : "Krisna",
    age : 18,
    //Object inside an Object
    father: {
        name: "Janarathanan",
        age: 57,
        //'this' returns the nearest scope values
        show: function(){
            console.log(`Father - ${this.name}    Age - ${this.age}`);
        }
    },
    mother: {
        name : "Lakshmi",
        age : 52,
        show: function(){
            console.log(`Mother - ${this.name}    Age - ${this.age}`);
        }
    },
    Sibling: {
        name : "Vishal Ram",
        age : 17,
        show: function(){
            console.log(`Sibling - ${this.name}     Age - ${this.age}`);
        }
    },
    show: function(){
        console.log(`Me - ${this.name}    Age - ${this.age}`);
        Personal.father.show();
        Personal.mother.show();
        Personal.Sibling.show();
    }
}
Personal.show();

//Factory Function
//Returns as Object
function NewMember(name,age,relationship){
    return {
        name,
        age,
        relationship,
    }
}
const One = NewMember("Anya",5,"Daughter");
console.log(One);

//Constructor Function
//Creates an Object called 'this' and return the object 'this'
function NewPerson(name,age,relationship){
    this.name = name;
    this.age = age;
    this.relationship = relationship;
}
//'new' keyword -> To dynamically store info from 'this' object to our object
const Two = new NewPerson("Yor",30,"Mother");
console.log(Two);

//Abstraction and get set methods 
function create(name,age,role,salary){
    this.name = name;
    this.age = age;
    this.role = role;
    this.salary = salary;
    this.display = function(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Role: ${this.role}, Salary:${this.salary}`);
    }

    // this.bonus = 10000;
    //makes global scope

    let bonus = 10000;
    //makes local scope

    this.CTC = function(){
        console.log(`Annual Income - ${this.salary + bonus}`);
    };

}
// Object.defineproperty(objectname,object's key,functions)
Object.defineProperty(this, "bonus",{
    //get - to return what we need
    get function(){
        return bonus;
    },
    //set - To set the new value to the old one
    set function(value){
        bonus = value;
    },
});

const Yuji = new create("Yuji",18,"Grade 1",100000);
const Megumi = new create("Megumi",18,"Grade 1",100000);

console.log(Yuji);
Yuji.CTC();
//Changes will be done in the object
Yuji.bonus = 20000;

console.log(Megumi);
Megumi.CTC();
//Changes will be done in the object
Megumi.bonus = 20000;

//Class can be reused whereas Constructor function can't be reused - not correct but like this only
class Brawler {
    constructor(name,sex){
        this.name = name;
        this.sex = sex;
    }
    content() {
        console.log(`This is ${this.name} - ${this.sex} brawler`);
    }
}
const name_1 = new Brawler("Shelly","female");
console.log(name_1);
name_1.content();

//'extends' keyword connects two classes - for nested like
class Type extends Brawler{
    constructor(name,sex,type){
        //To get info from before class
        super(name,sex);
        this.type = type;
    }
    content(){
        console.log(`Type is ${this.type} brawler`);
    }
}
const Shelly = new Type('Shelly','Female','Starter');
console.log(Shelly);
Shelly.content();