function myRemoveN(arr,n){
    if (n < 0 || n >= arr.length) {
        // L'opération est impossible, on renvoie le tableau d'origine
        return arr;
      } else {
        // On crée un nouveau tableau qui contient tous les éléments de arr sauf l'élément à enlever
        return arr.filter((_, i) => i !== n);
      }
}
console.log(myRemoveN(["hello", "world"], 0)); // ["world"]
console.log(myRemoveN(["hello", "world"], 1)); // ["hello"]