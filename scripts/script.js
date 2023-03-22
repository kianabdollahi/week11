// function greet(name, time= "day") {
//     console.log(`Good ${time} ${name}!`);

// }

// greet("Kian", "morning");

// let greet = (name) => {
//     console.log(`Hello ${name}!`);
// }

// greet("Kian")

// function circleArea(radius) {
//   let area = Math.PI * radius ** 2;
//   alert(`The area of the circle with radius ${radius} is ${area}`);
// }
// let input;
// do {
//   input = prompt("Please enter a radius: ");
// } while (isNaN(input) == true);

// circleArea(input);

// const radiusPara = document.querySelector("#radius");
// console.log(radiusPara);
// const resultPara = document.querySelector("#result");
// console.log(resultPara);

// function circleArea(radius) {
//   let area = Math.PI * radius ** 2;
//   alert(`The area of the circle with radius ${radius} is ${area}`);
//   resultPara.textContent = `The area of the circle with radius ${radius} is ${area}`;
// }

// let input;
// do {
//   input = prompt("Please enter a radius: ");
// } while (isNaN(input) == true);

// radiusPara.textContent += `The radius you entered was ${input}`;

// circleArea(input);

const products = ["Apples", "Cucumber", "Banana", "Green Onion", "Watermelon"];
const shoppingList = document.querySelector(".shopping");

function addtoList(list) {
  let list_len;
  list_len = list.length;

  for (let i = 0; i < list_len; i++) {
    const newLi = document.createElement("li");

    shoppingList.appendChild(newLi);

    newLi.textContent = products[i];
  }
}

addtoList(products);
