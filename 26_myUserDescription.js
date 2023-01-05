function myUserDescription(utilisateur){
    return `je m'appelle ${utilisateur.surname} ${utilisateur.name} ${utilisateur.age} ` 
        

}
module.exports = myUserDescription;

console.log(myUserDescription({surname: "a", name: "A", age: 23}));