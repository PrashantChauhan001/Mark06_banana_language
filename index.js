// alert("Hiii, you are welcome here... :)")
// prompt("Give your favourite number.");

const readValue = () => document.querySelector("#txtarea").value;

const button = document.querySelector("#btn");

const translate = () => {
    let line = readValue();
    fetch("https://api.funtranslations.com/translate/minion.json?text=" + line)
        .then(res => res.json())
        .then(data => (document.querySelector(".result").innerText = data.contents.translated))
        .catch(err => console.log(err))
}
// const translate = () => {
//     let line = readValue();
//     fetch("https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=" + line)
//         .then(res => res.json())
//         .then(data => (document.querySelector(".result").innerText = data.contents.text))
//         .catch(err => console.log(err))
// }

button.addEventListener("click", () => translate());

// let urlYoda = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

// fetch(urlYoda + "?text=greate things takes time")
//     .then(res => res.json())
//     .then(res => console.log(res.contents.text))


// console.log(document.querySelector("textarea"))
// console.log(document.querySelector(".btn"))
// console.log(document.querySelector("#btn"))
// console.log(document.querySelector("[name=exercise]"))