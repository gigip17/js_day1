function myObjectFilter(utilisateur) {
    const filtreUtilisateur = utilisateur.filter(utilisateur => utilisateur.age >= 18);
    const names = filtreUtilisateur.map(utilisateur => `${utilisateur.surname} ${utilisateur.name}`);
    return names;
}


module.exports = myObjectFilter; 
console.log(myObjectFilter([ 
  {name: "A", surname: "a", age: 12}, 
  {name: "B", surname: "b", age: 30} 
])); 
 
//["b B"]