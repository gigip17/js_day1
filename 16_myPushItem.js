function myPushItem(array,newItem) {

    return array.push(newItem)
}
module.exports = myPushItem;

console.log(myPushItem([0, 1, 2], 3));// [0, 1, 2, 3]