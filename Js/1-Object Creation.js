// // let's suppose we're building a quiz game with user

// SOME OF OUR USER 

// Name : Phil
// Score : 4 

// Name : Julia
// Score : 5

// Functionality 
// ~ Ability to increase score

// 1. To Store this data in proper manner, we'll use object; 
// 2. or we can say we have to store this data in bundle 
{
    let obj = {
        name: "Phil",
        score: 4,
        increment: function () {
            obj.Score++
        }

    }
    obj.increment();

    // console.log(obj);
}


// 2. Creating obj using 'Dot notation'.

{
    let obj = {} // Creation an empty Object

    obj.name = "Mahir Khan";
    obj.score = 4;
    obj.increment = function () {
        obj.score++
    }
    // console.log(obj);

    // This is also a way to create object
}

// 3.  Object.create()

// 1. This is  build in method, and is used for creating objects with a specified prototype object

// When you create an object using `Object.create()`, the newly created object inherits properties from the specified prototype object, but it  automatically return an empty object.

{
    let obj = {};

    obj.name = "Mahir";
    obj.score = 4;

    let newObj = Object.create(obj) // / as we can see we are passing obj in newObject but when we log it will retrun empty object because the obj we paased in, is herit in newObject in by reference prototype so we can access the property by adding property name after newObject like this  newObject.name

    // console.log(newObj); 
}

// 4. Creating a function using a function

{

    function userCreater(name, score) {
        let newUser = {};
        newUser.name = name;
        newUser.score = score
        newUser.increment = function () {
            newUser.score++
        }
        return newUser
    }

    const user1 = userCreater("Mahir", 6)
    const user2 = userCreater("Shahid", 7)
    user1.increment()
    // console.log(user1);

    // this will return a new object but...hmmm..🤔  everytime we create new variable and assign usercreater() this will always retrun increment function as well soo the problem is every user variable has increment function and it will inpect our performance so what we goona do now?

    function userCreater2(name,score){
        let newObj = Object.create(userFunctionStore);
        newObj.name = name;
        newObj.score = score;

        return newObj
    }

    let userFunctionStore = {
        increment: function(){
            this.score++
        }
    }

    let newUser = userCreater2("Mahir Khan",3);
    newUser.increment()
    console.log(newUser);
}




