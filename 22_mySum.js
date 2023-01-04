function mySum(array){
    return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
module.exports = mySum;

console.log(mySum([1, 2, 3])); // 6