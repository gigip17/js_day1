function myUserDescription(utilisateur){
    return `Je m'appelle ${utilisateur.surname} ${utilisateur.name}, j'ai ${utilisateur.age} ans` 
        

}
module.exports = myUserDescription;

console.log(myUserDescription({surname: "a", name: "A", age: 23}));