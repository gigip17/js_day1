function myGetNbr(nombre) {
    if (nombre > 0) {
      return "+";
    } else if (nombre < 0) {
      return "-";
    } else {
      return "0";
    }
  }
module.exports = myGetNbr;