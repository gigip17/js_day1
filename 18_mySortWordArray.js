function mySortWordArray(tab){
    return tab.split(' ').sort();

}

module.exports = mySortWordArray;

console.log(mySortWordArray("b c a")); // ["a", "b", "c"]