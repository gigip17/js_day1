const User = require("./28_myUserClass"); 
// class User{
//     constructor(surname,name,age){
//         this.surname = surname;
//         this.name = name;
//         this.age = age;
//     }
//     presentation(){
//         return (`Je m'apelle ${this.surname} ${this.name}, j'ai ${this.age} ans`)
//      }
// }
class Admin extends User{
    constructor(surname, name, age) {
        super(surname, name, age);
        this.role = "administrateur";
    }
}
let me = new Admin("Guilian", "Ganster", 22);
module.exports = Admin; 

console.log(me.presentation()); //"Je m'apelle Guilian Ganster, j'ai 22 ans"
console.log(me.role); //"administrateur" 

