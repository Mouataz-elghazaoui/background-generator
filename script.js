var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
    body.style.background = 
        "linear-gradient(to right, "
         + color1.value 
         + ", " 
         + color2.value 
         + ")";
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);



// //-****************** Cours ************************

// const nam = "sally";
// const agee = 45;
// const animal = "horse";
// const motadire = `Helloo ${name} you seem to be ${age-10}. what a nice ${animal} you have`;

// //**********************

// function greet(name='doha', age=30, pet='cat') {
//     return `Helloo ${name} you seem to be ${age-10}. what a nice ${animal} you have`;
// }

// //*************************************** */

// function add(a, b) {
//     return a + b;
// }

// const add = (a, b) => a + b;