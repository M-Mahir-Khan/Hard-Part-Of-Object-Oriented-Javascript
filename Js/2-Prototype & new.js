/*
PROBLEM :-> Each time we create a new User we make spae in our computeer's memory for all our data functon.but our funtion are just compies

SOLUTION :-> Store the increment function in just one object and have interpreter, if doesnt't find the function on user1, look up to that up to that object if it's there kind of link



//  Solution 3 - Indroduction the keyword that automates the hard work: New

1. Create a new user object
2. retrun the new object

but now we need to adjust how we write the body of userCreator - how can we: 

-Refer to the auto-created object?
-Know where to put our single copies?

*/

// ======================================

/*     function are object

1.  they can be assigned to variables, passed as arguments to other functions, returned from functions, and stored in data structures.

2. Functions are Objects:

    Functions are a special type of object. They can have properties and methods, just like any other object in JavaScript.

    

3. Function Prototype:

Functions have a prototype property, which is an object that can be used to attach properties and methods. This is often used for defining methods that should be shared among all instances created by that constructor function.

*/

//  new keyWord

// the new keyword does a lot of hard work for us when we use it to create new objects. It does the following things:

/*
    1. Creates a new empty object.
    2.  Sets the prototype of the new object to the prototype of the function constructor.
    3.  Binds the this keyword to the new object.
    4.  Executes the function constructor with the specified arguments.
    5.   Returns the new object.
*/

function UserCreatoer(name,score){
    this.name = name;
    this.score = score
}

UserCreatoer.prototype.increment = function(){
    this.score++
}

UserCreatoer.prototype.login = function(){
    console.log("Login");
}

const user1 = new UserCreatoer("Mahir",6)
user1.increment()
