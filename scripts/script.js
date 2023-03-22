// function greet(name, time= "day") {
//     console.log(`Good ${time} ${name}!`);

// }

// greet("Kian", "morning");


// let greet = (name) => {
//     console.log(`Hello ${name}!`);
// }

// greet("Kian")

function circleArea(radius) {
    let area = (Math.PI)*((radius)**2)
    alert(`The area of the circle with radius ${radius} is ${area}`)
}
let input;
do{
input = prompt("Please enter a radius: ");
}
while (isNaN(input) == true);

circleArea(input)

