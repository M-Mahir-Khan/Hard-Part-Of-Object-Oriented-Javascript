// Subclassing with new & call

function userCreater(name,score){
    this.name = name;
    this.score = score
}

userCreater.prototype.sayName = function(){
    console.log(`I am ${this.name}`);
}

userCreater.prototype.increment = function(){
    this.score++;
}

const user1 = userCreater("Phil", 5);
const user2 = userCreater("Tim", 4);

user1.sayName()

// ===========

function paidUserCreator(paidName,paidScore,accourtBalance){
    userCreater.call(this,paidName,paidScore);
    this.accourtBalance = accourtBalance;
}

paidUserCreator.prototype = Object.create(userCreater.prototype);

paidUserCreator.prototype.increaseBalance = function(){
    this.accourtBalance++
}

const paidUser1 = paidUserCreator("Mahir",8,388)
paidUser1.increaseBalance()