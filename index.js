// alert("Hiii, you are welcome here... :)")
// prompt("Give your favourite number.");

const readValue = () => document.querySelector("#txtarea").value;

const button = document.querySelector("#btn");

button.addEventListener("click",()=> console.log(readValue()));