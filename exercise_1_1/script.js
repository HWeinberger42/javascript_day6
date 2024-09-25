
let sandwiches = `{ "sandwich": "hamburger", "calories": "260" }`; 
let fries = `{ "fries_size": "Large French Fries", "calories": "570" }`;

let jsonSandwiches = JSON.parse(sandwiches);
let jsonFries = JSON.parse(fries);

console.log(jsonSandwiches);
console.log(jsonFries);

document.getElementById("result").innerHTML = `My favorite ${Object.keys(jsonSandwiches)[0]} is a ${jsonSandwiches.sandwich[0].toUpperCase()}${jsonSandwiches.sandwich.slice(1)} which has approximately ${jsonSandwiches.calories} ${Object.keys(jsonSandwiches)[1]}, along with it I enjoy eating ${jsonFries.fries_size} which have about ${jsonFries.calories} ${Object.keys(jsonFries)[1]}`;