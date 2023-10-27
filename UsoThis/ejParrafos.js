var parrafos = document.querySelectorAll("p");

parrafos.forEach(parrafo => {
    parrafo.addEventListener("mouseover", CambiarColor);
    parrafo.addEventListener("mouseout", FondoBlanco);
});

// for (const parrafo of parrafos) {
//     parrafo.onmouseover = CambiarColor;
//     parrafo.onmouseout = FondoBlanco;
// }

function CambiarColor(){
    this.style.backgroundColor="yellow";
}

function FondoBlanco(){
    this.style.backgroundColor="";
}