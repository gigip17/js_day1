function myCreateObject(surname, name,age) {
    return {
      surname: surname,
      name: name,
      age:age
    };
  }
  module.exports = myCreateObject;


console.log(myCreateObject("Guilian", "Ganster", 23));
//{surname: "Guilian", name: "Ganster", age: 23}