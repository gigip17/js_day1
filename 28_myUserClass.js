
class User{
    constructor(surname,name,age){
        this.surname = surname;
        this.name = name;
        this.age = age;
    }
    presentation(){
       return (`Je m'apelle ${this.surname} ${this.name}, j'ai ${this.age} ans`)
    }
}
let me = new User("Guilian", "Ganster", 22); 

module.exports = User; 

console.log(me.presentation()); //"Je m'apelle Guilian Ganster, j'ai 22 ans"
