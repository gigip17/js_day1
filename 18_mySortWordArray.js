function mySortWordArray(tab){
    if (tab === "") {
        return [];
      }
    return tab.split(' ').sort();

}

module.exports = mySortWordArray;

console.log(mySortWordArray("b c a")); // ["a", "b", "c"]