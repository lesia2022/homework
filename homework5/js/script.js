//task #1

let user = {}; //object literal;
user.name = "John"; //adding a property;  
user.surname = "Smith";
user.name = "Pete"; 
delete user.name; 


//task #3

/*Да, можно изменять свойства объекта, объявленного с помощью const. 
Но изменять саму переменную user (например, присваивать ей новое значение) нельзя.
Мы можем изменить свойство name объекта user */;
const user = {
  name: "John"
};
user.name = "Pete"; // изменяем свойство name на "Pete";
console.log(user); // { name: "Pete" };

// Но мы должны учесть, что присвоение нового значения переменной user вызовет ошибку:

const user = {
  name: "John"
};
user = {}; /* ошибка TypeError: Assignment to constant variable. 
потому что переменная user была объявлена с помощью const и не может быть переопределена.*/


//task #3
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = Object.values(salaries).reduce((acc, value) => acc + value, 0);

console.log(sum); // 390



