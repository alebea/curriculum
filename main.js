document.addEventListener("DOMContentLoaded", () => {
    const elementosCarousel = document.querySelectorAll(".carousel");
    M.Carousel.init(elementosCarousel, {
        duration: 150

    });

});
window.addEventListener("scroll", () => {
    const scrollable= document.documentElement.scrollHeight -window.innerHeight;
    const scrolled = window.scrollY;
    if (Math.ceil (scrolled) === scrollable) {
        alert ("You have reachet the button!");
    }

    })


var inputs = document.getElementsByClassName("formulario__input");

for (var i =0; i< inputs.length; i++) {
inputs[i].addEventListener("keyup", function() {
    if (this.value.length>=1) {
    this.nextElementSibling.classList.add("fijar");
    } else{
    this.nextElementSibling.classList.remove("fijar");
    }
});
}
var form= document.getElementById("formulario");
form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("enviando formulario");

});

var nombre = document.getElementById("nombre");
var correo = document.getElementById("correo");
var mensaje = document.getElementById("mensaje");
var error = document.getElementById("error");
error.style.color="red";

    function enviarFormulario() {
        console.log("Enviando formulario...");

        var mensajesError=[];

    if(nombre.value === null || nombre.value === ""){
        mensajesError.push("ingresa tu nombre");
    }
    if (correo.value === null || correo.value === "") {
        mensajesError.push("ingresa tu correo");
    }
    if (mensaje.value === null || mensaje.value === "") {
        mensajesError.push("ingresa tu mensaje");
    }
    error.innerHTML = mensajesError.join(",");

    return false;
    }

