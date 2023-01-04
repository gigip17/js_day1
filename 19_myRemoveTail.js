function myRemoveTail (tab){
    if (tab.length === 0) {
        return [];
      }
      return tab.slice(0, -1);
}

console.log(myRemoveTail([0, 1])); // [0]