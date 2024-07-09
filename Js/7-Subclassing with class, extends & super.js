class createUser{
    constructor(name,score){
        this.name = name;
        this.score = score;
    }
    getUser(){
        console.log(this.name);
    }
}

class paidUserCreator extends createUser{
    constructor(paidName,paidScore,accountBalance){
        super(paidName,paidScore);
        this.accountBalance = accountBalance;
    }
    increaseBalance(){
        this.accountBalance++
    }
}

const paidUser1 = new paidUserCreator("Mahir",3,333);
paidUser1.increaseBalance();
paidUser1.getUser()

// the extend keyword do for us:->
/*
   1. we know that constructor is funciton Object combo so it object it's have a prototype object and in prototype object there is __proto__ which is deafult link with Object.Prototype but we are using extend here so it will link with createUser constructor object part and it there is prototype object where there is createUser method are there

   2. second thing will do is in paidUserCreator object part there is also a __proto__ which will link with createUser
   
*/