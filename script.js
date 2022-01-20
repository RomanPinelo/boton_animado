//Botón 1
var menuButton = document.getElementById("buttonMenu");
var bar1 = document.getElementById("bar1");
var bar2 = document.getElementById("bar2");
var bar3 = document.getElementById("bar3");

// Botón 2
var menuButton1 = document.getElementById("buttonMenu1");
var bar11 = document.getElementById("bar11");
var bar22 = document.getElementById("bar22");
var bar33 = document.getElementById("bar33");

// Botón 3
var menuButton2 = document.getElementById("buttonMenu2");
var bar111 = document.getElementById("bar111");
var bar222 = document.getElementById("bar222");
var bar333 = document.getElementById("bar333");

// Botón 4
var menuButton3 = document.getElementById("buttonMenu3");
var bar1111 = document.getElementById("bar1111");
var bar2222 = document.getElementById("bar2222");
var bar3333 = document.getElementById("bar3333");

// Botón 5
var menuButton4 = document.getElementById("buttonMenu4");
var bar11111 = document.getElementById("bar11111");
var bar22222 = document.getElementById("bar22222");
var bar33333 = document.getElementById("bar33333");

// Botón 6
var menuButton5 = document.getElementById("buttonMenu5");
var bar111111 = document.getElementById("bar111111");
var bar222222 = document.getElementById("bar222222");
var bar333333 = document.getElementById("bar333333");

//Botón 7 se hace con CSS

// Eventos de cada botón
menuButton.addEventListener('click', () => {
  bar1.classList.toggle("active1");
  bar2.classList.toggle("active2");
  bar3.classList.toggle("active3");
});

menuButton1.addEventListener('click', () => {
  bar11.classList.toggle("active11");
  bar22.classList.toggle("active22");
  bar33.classList.toggle("active33");
});

menuButton2.addEventListener('click', () => {
  bar111.classList.toggle("active111");
  bar222.classList.toggle("active222");
  bar333.classList.toggle("active333");
});

menuButton3.addEventListener('click', () => {
  bar1111.classList.toggle("active1111");
  bar2222.classList.toggle("active2222");
  bar3333.classList.toggle("active3333");
});

menuButton4.addEventListener('click', () => {
  bar11111.classList.toggle("active11111");
  bar22222.classList.toggle("active22222");
  bar33333.classList.toggle("active33333");
});

menuButton5.addEventListener('click', () => {
  bar111111.classList.toggle("active111111");
  bar222222.classList.toggle("active222222");
  bar333333.classList.toggle("active333333");
});