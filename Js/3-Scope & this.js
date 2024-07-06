//  an Imlicity parameter in javaScript is paramenterthat is passed to a function automatically, without having to be explicity specified in the function call. the only implicity parameter n javaScript is the this paramerter.

// the this  parameter refers to the object that is calling the function. it is bound to the function when it is called, and it can be used to access the properties and methods of the calling object.

// when we call this in function declaration it's refered to global object 

// when we call method like :-> user1.increment() the increment implicity paramater this is refered to it's user1 object

function UserCreator(name,score){
    this.name = name;
    this.score = score;
}

UserCreator.prototype.increment = function(){
    const add1 = ()=>{this.score++}
    add1()
}

UserCreator.prototype.login = function(){
    console.log("Login");
}

const user1 = new UserCreator("Mahir", 9)
user1.increment()
console.log(user1);