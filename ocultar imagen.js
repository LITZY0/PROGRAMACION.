$(document).ready(function(){
	$("#ocultar").fadeOut(3000, function(evento){
		$("#foto").fadeOut(5000);
		$("#foto1").fadeOut(5000);
	});

	$("#mostrar").fadeOut(3000, function(evento){
		$("#foto").fadeIn(5000);
		$("#foto1").fadeIn(5000);
	});
});