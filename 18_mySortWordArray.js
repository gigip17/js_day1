function mySortWordArray(tab){
    if (tab.length === 0) {
        return [];
      }
    return tab.split(' ').sort();

}

module.exports = mySortWordArray;

console.log(mySortWordArray("b c a")); // ["a", "b", "c"]