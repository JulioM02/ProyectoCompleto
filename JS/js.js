function cajas(){
  cadena=""
letras=[["A"],["B"],["C"],["D"],["E"],["F"],["G"],["H"],["I"],["J"],["L"],["M"]];
     for(var i=0;i<10;i++){
       cadena=cadena+"<div class='caja'><a href='file:///F:/Dev.f/Blanca/toServer/Otrapagina.html'>"+letras[i]+"</a></div>"

     }
     console.log(cadena);
     document.getElementById("idDiv").innerHTML=cadena;

}

function OP(){
         document.getElementById("idDiv2").innerHTML="Hola";
}
