function myRemoveN(arr,n){
    if (n < 0 || n >= arr.length) {
        // L'opération est impossible, on renvoie le tableau d'origine
        return arr;
      } else {
        // On utilise splice pour retirer l'élément du tableau
        arr.splice(n, 1);
        return arr;
      }
}
module.exports = myRemoveN;

console.log(myRemoveN(["hello", "world"], 0)); // ["world"]
console.log(myRemoveN(["hello", "world"], 1)); // ["hello"]