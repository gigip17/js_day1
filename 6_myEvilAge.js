
function myEvilAge(age){
    if (parseInt(age) >= 18) {
        return "Majeur";
      } else{
        return "Mineur";
}}
console.log(myEvilAge("19"));
module.exports = myEvilAge;