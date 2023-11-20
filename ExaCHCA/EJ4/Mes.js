// Obtenemos el contenedor en el que se va a escribir el mes con fotos y la variable idioma que obtendrá el valor
// del localstorage identificado como "idioma", y en caso de que todavía no exista su valor será "es"(español)
const contenedorMes = document.getElementById("contenedorMes");
var idioma = localStorage.getItem("idioma") || "es";


// Obtenemos la fecha actual y el número del mes de esa misma fecha (hay que tener en cuenta que los meses comienzan desde 0 hasta 11, pero esto nos viene 
// bien para cuando el idioma sea euskera ubicarlo en el array sin tener que sumar ni retsar la variable "numeroMes")
var fechaActual = new Date();
var numeroMes = fechaActual.getMonth();

// Como no funciona "nombreMes = fechaActual.toLocaleString("eu", { month: 'long' });" (al menos en mi casom ya que me lo muestra en español), vamos a
// crear un array con los meses en Euskera y obtenerlos a partir de ahí cuando se seleccione este idioma

const mesesEU = ["Urtarrila", "Otsaila", "Martxoa", "Apirila", "Maiatza", "Ekaina", "Uztaila", "Abuztua", "Iraila", "Urria", "Azaroa", "Abendua"];

// Guardamos en la variable "nombreMes" el nombre del mes en el idioma seleccionado, al seleccionar euskera, lo obtendremos el array, pero con
// ingles y español podremos obtenerlo directamente con la funcion "toLocateString()" pasándole la variable idioma para que lo coja en español(es) o ingles(en)
var nombreMes;
if (idioma === "eu") {
    nombreMes = mesesEU[numeroMes];
} else {
    nombreMes = fechaActual.toLocaleString(idioma, { month: 'long' });
}
mostrarMes(nombreMes);

// Establecemos el valor del select según el idioma actual, para que al recargar la página aparezca por defecto seleccionado en el idioma del localstorage
document.getElementById("idioma").value = idioma;

function mostrarMes(mensaje) {
    //Vaciamos el contenedor y creamos una variable "contador" que utilizaremos para ir eliminando las fotos
    contenedorMes.innerHTML = "";
    let contador = mensaje.length - 1;

    //Dividimos las letras del mes con "split" y con un foreach por cada una ponemos su imagen correspondiente con appenchild, ademas de añadirles que tras 5s comiencen a eliminarse 
    // de manera progresiva cada 500ms, para lo cual utilizamos la variable contador que hemos creado antes y la vamos restando para que las ultimas imagenes empiecen a 
    // eliminarse antes que las primeras
    mensaje.split('').forEach(letra => {
        let imagenLetra = document.createElement("img");
        imagenLetra.src = `Letras/${letra.toUpperCase()}.gif`;
        contenedorMes.appendChild(imagenLetra);

        setTimeout(() => {
            setTimeout(() => {
                contenedorMes.removeChild(imagenLetra);
            }, contador * 500);
   
            contador--;
        }, 5000);
    });
}

function cambiarIdioma(selectIdioma) {
    //obtenemos el valor del select y creamos un localstorage con ese valor
    localStorage.setItem("idioma", selectIdioma);

    // Al igual que como cuando se carga la página por primera vez (lineas 19, 20, 21, 22, 23, 24) guardamos en la variable "nombreMes" el nombre del mes en el idioma seleccionado 
    if (selectIdioma === "eu") {
        nombreMes = mesesEU[numeroMes];
    } else {
        nombreMes = fechaActual.toLocaleString(selectIdioma, { month: 'long' });
    }

    // Llamoamos a la funcion mostrarMes() pasandole la variable con el valor del idiomna que se ha elegido
    mostrarMes(nombreMes);
}
