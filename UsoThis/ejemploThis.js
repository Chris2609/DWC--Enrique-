var Parrafos=document.getElementsByTagName("p");

for (var i=0;i<Parrafos.length;i++){


 Parrafos[i].addEventListener("click",CambiarColor);

}



function CambiarColor(){

 this.style.backgroundColor="red";

}