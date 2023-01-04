function myStrToWordArray(tableaux){
    if (tab.length === 0) {
        return [];
      }
    return tableaux.split(' ')
}

module.exports = myStrToWordArray;
console.log(myStrToWordArray("hello world")); // [”hello”, “world”]