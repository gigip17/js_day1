function myAgeFilter(tab, seuil = 18) {
    for (var i = 0; i < tab.length; i++) {
      if (tab[i] < seuil) {
        tab.splice(i, 1);
        i--;
      }
    }
    return tab;
  }
  module.exports = myAgeFilter;

console.log(myAgeFilter([3, 12, 24, 16, 19])); // [24, 19]