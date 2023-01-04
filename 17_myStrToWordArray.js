function myStrToWordArray(tableaux){
    if (tableaux === "") return [];
    return tableaux.split(' ');
}

module.exports = myStrToWordArray;
console.log(myStrToWordArray("hello world")); // [”hello”, “world”]