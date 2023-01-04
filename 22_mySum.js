function mySum(array){
    return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(mySum([1, 2, 3])); // 6