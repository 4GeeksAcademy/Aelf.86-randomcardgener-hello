/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //console.log("Hello Rigo from the console!");
  cargarCarta();
};
function cargarCarta() {
  let palos = ["♦", "♥", "♠", "♣"];
  let paloRandom = palos[Math.floor(Math.random() * palos.length)];
  // console.log(paloRandom);
  let numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];
  let numerosRandom = numeros[Math.floor(Math.random() * numeros.length)];
  // console.log(numerosRandom);
  document.getElementById("cardTop").innerHTML = paloRandom;
  document.getElementById("cardBottom").innerHTML = paloRandom;
  document.getElementById("cardNumber").innerHTML = numerosRandom;

  if (paloRandom == "♥" || paloRandom == "♦") {
    document.getElementById("cardTop").style.color = "red";
    document.getElementById("cardBottom").style.color = "red";
  }
}
