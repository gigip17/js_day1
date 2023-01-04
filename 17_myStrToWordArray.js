function myStrToWordArray(tableaux){
    return tableaux.split(' ')
}

module.exports = myStrToWordArray;
console.log(myStrToWordArray("hello world")); // [”hello”, “world”]