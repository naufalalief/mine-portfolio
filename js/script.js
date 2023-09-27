// const minimal = (a, b) => {
//   if (a < b) {
//     return a;
//   } else if (b < a) {
//     return b;
//   } else {
//     return a;
//   }
// };
// const findIndex = (array, number) => {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === number) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(minimal(3, 2));
// console.log(findIndex([1, 2, 3, 4, 5], 3));

// class Animal {
//   constructor(name, age, isMammal) {
//     this.name = name;
//     this.age = age;
//     this.isMammal = isMammal;
//   }
// }
// class Rabbit extends Animal {
//   constructor(name, age, isMammal) {
//     super(name, age, isMammal);
//     this.isMammal = true;
//   }
//   eat() {
//     return `${this.name} sedang makan!`;
//   }
// }
// class Eagle extends Animal {
//   constructor(name, age, isMammal) {
//     super(name, age, isMammal);
//     this.isMammal = false;
//   }
//   fly() {
//     return `${this.name} sedang terbang!`;
//   }
// }
// const myRabbit = new Rabbit("Labi", 2);
// const myEagle = new Eagle("Elo", 4);

// class Car { }
// const car = new Car();
// console.log(typeof Car);

// function car({ brand, maxSpeed, wheelCount }) {
//   this.brand = brand;
//   this.maxSpeed = maxSpeed;
//   this.wheelCount = wheelCount;
// }

// const myCar = car({ brand: 'Toyota', maxSpeed: 200, wheelCount: 4 });

const toggleBtn = document.getElementById("toggle-btn");
const icon = toggleBtn.querySelector("img");

toggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  const isDarkMode = document.body.classList.contains("dark");
  icon.src = isDarkMode ? "image/sun.svg" : "image/moon.svg";
});

// const bilPrima = (n) => {
//   let prima = [];
//   for (let i = 2; i <= n; i++) {
//     let count = 0;
//     for (let j = 1; j <= i; j++) {
//       if (i % j === 0) count++;
//     }
//     if (count === 2) prima.push(i);
//   }
//   return prima;
// };

// console.log(bilPrima(30));