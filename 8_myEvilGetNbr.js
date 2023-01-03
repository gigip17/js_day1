function myEvilGetNbr(number){
    if ((parseInt(number)) > 0) {
        return "+";
      } else if (number < 0) {
        return "-";
      } else {
        return "0";
      }
}      
console.log(myEvilGetNbr("2"))


module.exports = myEvilGetNbr;