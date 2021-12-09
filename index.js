// alert("Hiii, you are welcome here... :)")
// prompt("Give your favourite number.");

const readValue = () => document.querySelector("#txtarea").value;

const button = document.querySelector("#btn");

button.addEventListener("click", () => console.log(readValue()));

console.log("test")

// console.log(document.querySelector("textarea"))
// console.log(document.querySelector(".btn"))
// console.log(document.querySelector("#btn"))
// console.log(document.querySelector("[name=exercise]"))