// const arr = [];
// console.log("my new array", arr);
// arr.push("1");
// console.log("my new array", arr);
// arr.push("2");
// console.log("my new array", arr);
// arr.push("3");
// console.log("my new array", arr);
// arr.push("4");
// console.log("my new array", arr);
// //['1', '2', '3', '4']
// //arr.pop();
// console.log("my new array", arr);
// console.log("my new array", arr[0]);
// console.log("my slice", arr.slice(0, 3));
// console.log("my slice", arr.slice(2, 4));
// console.log("my slice", arr.slice(1, 3));
// console.log("my indexOf", arr.indexOf("3"));
// console.log("my slice", arr.slice(1, 3));
console.log("objects");

const person = { name: "vali", shirt: "white" };

console.log("object properties reading:", person.shirt);
person.phone = "9246062620";
console.log(person);

const person2 = { name: "diya", shirt: "black" };

console.log(person2);

console.log(person2["name"]);

const introduce = (name, shirt) => {
  const person = {
    name: name,
    shirt: shirt,
    asserts: 5000,
    liabilities: 2000,
    netWorth: function () {
      return this.asserts - this.liabilities;
    },
  };
  console.log(
    `my name is : ${person.name} and my shirt color: ${
      person.shirt
    } and networth is ${person.netWorth()} `
  );
};

console.log(introduce("vali", "black"));
