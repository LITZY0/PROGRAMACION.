$(document).ready(function(){
	$("#ocultar").fadeOut(3000, function(evento){
		$("#header").fadeOut(5000);
		$("#parrafo").fadeOut(5000);
	});

	$("#mostrar").fadeOut(3000, function(evento){
		$("#foto").fadeIn(5000);
		$("#foto1").fadeIn(5000);
	}); 
});