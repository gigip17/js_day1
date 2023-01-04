function myPushItem(array,newItem) {
        array.push(newItem)
    return array;
}
module.exports = myPushItem;

console.log(myPushItem([0, 1, 2], 3));// [0, 1, 2, 3]