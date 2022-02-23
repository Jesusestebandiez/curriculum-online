function cambiarPagina(opcion)
{
	document.getElementById("inicio").style.display="none";
	document.getElementById("coches").style.display="none";
	document.getElementById("motores").style.display="none";
	document.getElementById("rendimiento").style.display="none";
	document.getElementById("llantas-y-neumaticos").style.display="none";
	document.getElementById("asientos").style.display="none";
	document.getElementById("tuning").style.display="none";
	document.getElementById("carrocerias").style.display="none";
	document.getElementById("interiores").style.display="none";
	document.getElementById("resturaciones").style.display="none";
	document.getElementById("contacto").style.display="none";
	document.getElementById("formulario").style.display="none";
	document.getElementById("ayuda").style.display="none";

	/*var opcion="inicio";*/
	var titulo="";
	
	switch(opcion)
	{
		case "inicio":
			titulo="FAST CARS DIEZ";
			break;
		case "coches":
			titulo="Coches";
			break;
		case "motores":
			titulo="Motores";
			break;
		case "rendimiento":
			titulo="Rendimiento";
			break;
		case "llantas-y-neumamticos":
			titulo="LLantas y Neumamticos";
			break;
		case "asientos":
			titulo="Asientos";
			break;
		case "tuning":
			titulo="Tuning";
			break;
		case "carrocerias":
			titulo="Carrocerias";
			break;
		case "interiores":
			titulo="Interiores";
			break;
		case"resturaciones":
			titulo="Resturaciones";
			break;
		case "contaco":
			titulo="Contaco";
			break;
		case "formulario":
			titulo="Formulario";
			break;
		case "ayuda":
			titulo="Ayuda";
			break;	

	}

	document.getElementById("titulo").innerHTML=titulo;
	document.getElementById(opcion).style.display="initial";

}

 var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
cambiarPagina("inicio");

/*document.getElementById("cookies").innerHTML =
"navigator.cookieEnabled is " + navigator.cookieEnabled;*/