//  an Imlicity parameter in javaScript is paramenterthat is passed to a function automatically, without having to be explicity specified in the function call. the only implicity parameter n javaScript is the this paramerter.

// the this  parameter refers to the object that is calling the function. it is bound to the function when it is called, and it can be used to access the properties and methods of the calling object.

// when we call this in function declaration it's refered to global object 

// when we call method like :-> user1.increment() the increment implicity paramater this is refered to it's user1 object
{
// function UserCreator(name,score){
//     this.name = name;
//     this.score = score;
// }

// UserCreator.prototype.increment = function(){
//     const add1 = ()=>{this.score++}
//     add1()
// }

// UserCreator.prototype.login = function(){
//     console.log("Login");
// }

// const user1 = new UserCreator("Mahir", 9)
// user1.increment()
// console.log(user1);
}

//  this function is constructor funciton as we know and the increment funciton are in prototype of UserName but there is easy way to create a blueprint of this constructor function without assign function in prototype it will automatic assign that is class

class UserCreator{
    constructor(name,score){
        this.name = name;
        this.score = score;
    }

    getName(){
        console.log(this.name);
    }

    setName(newName){
        this.name = newName;
    }
}

const user1 = new UserCreator("Mahir",2)
user1.setName("Mahir Khan");
user1.getName()
console.log(user1);


// ==================

// javaScript usere this proto link to give object, function and array a bunch of bounus functonality. All object by default have __proto__

const obj = {
    num : 3
}
obj.num // 3

obj.hasOwnProperty('num')// ? Where's this method?
Object.prototype // { hasOwnProperty :  FUNCTION };

// -With object.create we override the default __proto__ reference  to Object.prototype and replace with function with funciton store

// -but funcitonStore is an object so it has a __proto__ reference to Object.prototype -we just intercede in chain 

//  =========================================

// __proto__ is a property of all objects in JavaScript that points to their prototype. The prototype is an object that contains properties and methods that are inherited by all objects that are created from it.


// in this obj example, when we use obj.hasOwnProperty which we did'nt define in obj when we run this code is will find obj ok we get it in global, then It will search hasOwnProperty method in obj it' will not find it, it will not panic, every object have connection with function objec-combo what we say is Object (inbuilt) and it have property which is prototype and it is also a object and it have mathod hasOwnProperty and in run-time this obj is connected with this function-object combo which is Object and the connecion is made by __proto__ .


//  ==============================================================================


// Array  and function are also object so they get accedd to all the function in Object.prototype but also more goodies

function multiplyBy2(num){
    return num*2
}
multiplyBy2.toString() // where did this method came from??

multiplyBy2.prototype // {toString : FUNCTION, call : FUNCTION, bind : FUNCTION};

multiplyBy2.hasOwnProperty('score') // where's this function?

Function.prototype.__proto__ // Object.prototype {hasOwnProperty : FUNCTION }