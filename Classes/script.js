class toyotacar{
    constructor(brand){
        this.brand = brand;
    }
    start(){
        console.log("start!");
    }
    stop(){
        console.log("stop");
    }
}

let fortuner = new toyotacar("Toyota");
let corolla = new toyotacar("Toyota");

//Inheritence

class Parent{
    hello(){
        console.log("Hello i am parent!");
    }
}

class Child extends Parent{

}

let obj = new Child();

//Practice Question 2
// let data = "This is data!"
class User {
    constructor(name , email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("Data : ",this.data);
    }
}
class Admin extends User{
    editData(){
        data = "This data is changed!";
    }
}

let user1 = new User("Pritam", "pritam12@gmail.com");

let admin1 = new Admin("Ahmed" , "Ahmed123@gmail.com");

