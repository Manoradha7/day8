// Write a “person” class to hold all the details.

class Person {
    constructor(fname,lname,age,mob,address){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.mob = mob;
        this.address = address;
    }
     
}

//  Person details 
person1 = new Person("Mano","karan",21,9233244323,{city:"Trichy",state:"tamilnadu"});
console.log(person1.address);
console.log(person1.fname);
console.log(person1.lname);
console.log(person1.age);
console.log(person1.mob);


