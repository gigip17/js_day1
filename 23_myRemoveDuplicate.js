function myRemoveDuplicate(array){
    return Array.from(new Set(array))
    ////const set = new Set (array)
    ///const arrayDeux = [...set]
    ///return arrayDeux
}
module.exports = myRemoveDuplicate;
console.log(myRemoveDuplicate([1, 2, 2, 3])); // [1, 2, 3]
