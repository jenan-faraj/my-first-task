// --Array--

// let array1 = [];
// let array2 = ["raghad", "jenan", "rawan"];
// let array3 = [8, "jenan", "5" , true,[undefined, "%"]];
// console.log(array1)
// console.log(array2[1])
// console.log(array3[4][1])

// --Hoisting--

// console.log(j);

// var j = 5;
// let j = 5;
// const j = 5;

// console.log(sum(2, 3));
// function sum(x, y) {
//     return x + y;
// }

// console.log(sub(5, 3));
// let sub = function(x, y) {
//     return x - y;
// };

// function sayHello(){
//     return "Hello";
// };
// console.log(sayHello())

// let a = document.querySelector(".five5");
// console.log(a[5]);
// let elements = document.querySelectorAll("a"); // يعيد جميع العناصر
// let a = elements[4]; // الوصول إلى العنصر الخامس (بداية العد من 0)
// console.log(a)

// let div = document.querySelector("div");

// div.remove()
// div.parentNode.removeChild(div)
// div.removeChild(div.firstElementChild)
// div.removeChild(div.lastElementChild)

// div.style.color = "red ";
// div.style ="color:red; font-size:40px;";

// let seran = document.createElement('div');
// seran.setAttribute("id", "mydiv");
// let reem = document.createElement("p");
// reem.textContent= "Raghad";
// seran.appendChild(reem);

// let deem = document.createElement("ol");
// seran.appendChild(deem);
// let sena = document.createElement("li");
// let sena2 = document.createElement("li");
// let sena3 = document.createElement("li");

// sena.textContent= "Gender: female";
// sena2.textContent= "age: 23";
// sena3.textContent= "order: zinger"
// deem.appendChild(sena);
// deem.appendChild(sena2);
// deem.appendChild(sena3);
// document.body.appendChild(seran);

// let fruitsArray = ["orange", "banana", "apple", "blueberry", "strawberry"];
// let fruitsImages = ["img/orange.jpg", "img/banana.jpg", "img/apple.jpg", "img/blueberry.jpg", "img/strawberry.jpg"];

// let fruitsContainer = document.createElement("div");
// let fruitsUL = document.createElement("ul");
// fruitsContainer.appendChild(fruitsUL);

// for (let i = 0; i < fruitsArray.length; i++) {
//   let fruitsLi = document.createElement("li");
//   let fruitsImgItem = document.createElement("img");

//   fruitsUL.appendChild(fruitsLi);
//   fruitsLi.append(fruitsArray[i]);
//   fruitsLi.appendChild(fruitsImgItem);

//   fruitsImgItem.setAttribute("src", fruitsImages[i]);
//   fruitsImgItem.style = "width:150px; height:150px;display:block";

// }

// document.body.appendChild(fruitsContainer);
// تحديد العناصر
// تحديد العناصر
// const friends = document.getElementById('friends');
// const family = document.getElementById('family');
// const you = document.getElementById('you');

// // مرحلة الالتقاط (من الخارج للداخل)
// friends.addEventListener(
//   'click',
//   () => {
//     console.log('Friends - Capturing Phase');
//   },
//   true // الالتقاط
// );

// family.addEventListener(
//   'click',
//   () => {
//     console.log('Family - Capturing Phase');
//   },
//   true // الالتقاط
// );

// you.addEventListener(
//   'click',
//   () => {
//     console.log('You - Capturing Phase');
//   },
//   true // الالتقاط
// );

// // مرحلة الفقاعات (من الداخل للخارج)
// friends.addEventListener(
//   'click',
//   () => {
//     console.log('Friends - Bubbling Phase');
//   },
//   false // الفقاعات (الافتراضي)
// );

// family.addEventListener(
//   'click',
//   () => {
//     console.log('Family - Bubbling Phase');
//   },
//   false // الفقاعات (الافتراضي)
// );

// you.addEventListener(
//   'click',
//   () => {
//     console.log('You - Bubbling Phase');
//   },
//   false // الفقاعات (الافتراضي)
// );

// const form = document.getElementById("userForm");
// const output = document.getElementById("output");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;

//   output.textContent = `Name: ${name}, Email: ${email}`;
// });

// const person = {};

// // Add Properties
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";

// // Create an Object
// const person = new Object();

// // Add Properties
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";

// Create an Object
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// };

// // Get the Keys
// const keys = Object.keys(person);
// console.log(keys)

// // Get the values
// const values = Object.values(person);
// console.log(values)

// function checkAge(age) {
//   try {
//     // التحقق إذا كان المدخل غير رقم
//     if (isNaN(age)) {
//       throw new Error("The age must be a number."); // رمي خطأ
//     }else if (age < 1 || age > 120) {
//       throw new Error("The age must be between 1 and 120.");
//     }else {
//       console.log("Valid age! The user is " + age + " years old.");
//     }
//   } catch (error) {
//     // التعامل مع الخطأ
//     console.log("Error: " + error.message);
//   } finally {
//     // يتم تشغيل هذا الجزء دائماً
//     console.log("Age verification process is complete.");
//   }
// }

// تجريب الدالة مع عدة قيم
// checkAge(25); // مدخل صحيح
// checkAge(-5); // مدخل خاطئ (عمر أقل من 1)
// checkAge(200); // مدخل خاطئ (عمر أكبر من 120)
// checkAge("hello"); // مدخل خاطئ (ليس رقم)

// function users(salary,age,gender){
//     this.s = salary +1000;
//     this.a = age;
//     this.g = gender;
// }
// let userO = new users(2000,20,"female")
// let userT = users(3000,20,"female")
// let userTh = new users(4000,20,"female")
// console.log(userO);
// console.log(userT);
// let userO = {
//   salary : 2000,
//   age : 20,
//   gender : "female"
// }
// let userT = {
//   salary : 2000,
//   age : 20,
//   gender : "female"
// }
// let userTh = {
//   salary : 2000,
//   age : 20,
//   gender : "female"
// }
// let userF = {
//   salary : 2000,
//   age : 20,
//   gender : "female"
// }
// let userFi = {
//   salary : 2000,
//   age : 20,
//   gender : "female"
// }


