const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }
});

// Elementos del DOM
const form = document.querySelector('#form-contacto');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const mensajeInput = document.querySelector('#mensaje')

const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');
const mensajeError = document.querySelector('#error-mensaje');

const mensajeEnviado = document.querySelector('#mensaje-enviado');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    nameError.textContent = "";
    emailError.textContent = "";
    mensajeError.textContent = "";
    mensajeEnviado.textContent = "";

    let esValido = true;

    if(nameInput.value.trim() === ""){
        nameError.textContent = 'Por favor introduzca su nombre.';

        esValido = false;
    }

    if(!emailInput.value.includes('@')){
        emailError.textContent = 'Por favor introduzca un correo valido.';

        esValido = false;
    }

    if(mensajeInput.value.trim() === ""){
        mensajeError.textContent = 'Por favor escriba un mensaje'

        esValido = false;
    }

    if(esValido){
        mensajeEnviado.textContent = '¡Su mensaje ha sido enviado correctamente!.'

        form.reset();
    }
});

const menuToggle = document.querySelector('.menuToggle');
const navLinks = document.querySelector('.navLinks');

menuToggle.addEventListener('click', (e) => {
    navLinks.classList.toggle('active');
});

const backToTop = document.querySelector('#backToTop');
window.addEventListener('scroll', (e) => {
    if(window.scrollY > 300){
        backToTop.style.display = 'block';

    }else{
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', (e) => {
    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });
});