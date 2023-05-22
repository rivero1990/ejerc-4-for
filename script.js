const inputImagenes = document.querySelector("#cant-imagenes");
const imgMostradas= document.querySelector("#contenedor-imagenes");


const IMAGEN_1 = "https://th.bing.com/th?id=OIP.hYnqxlMJF8uCYyG2desWbgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2";

function imagenesGeneradas() {
    let eleccionImagenes = inputImagenes.value;
    imgMostradas.innerHTML = "";
    
    for (let i = 0; i < eleccionImagenes; i++) {
        imgMostradas.innerHTML += `<img src=${IMAGEN_1} alt=""></img>`;
        
    }
}