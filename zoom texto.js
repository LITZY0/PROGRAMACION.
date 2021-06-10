$(document).ready(function(){

	$("#ocultar").fadeOut(3000, function(){
		$("#parrafo").fadeOut(3000);
		$("#parrafo1").fadeOut(3000);
		$("#parrafo2").fadeOut(3000);
		$("#parrafo3").fadeOut(3000);
		$("#parrafo4").fadeOut(3000);
		$("#parrafo5").fadeOut(3000);
		$("#parrafo6").fadeOut(3000);
	});

	$("#mostrar").fadeOut(5000, function(){
		$("#parrafo").fadeIn(5000);
		$("#parrafo1").fadeIn(5000);
		$("#parrafo2").fadeIn(5000);
		$("#parrafo3").fadeIn(5000);
		$("#parrafo4").fadeIn(5000);
		$("#parrafo5").fadeIn(5000);
		$("#parrafo6").fadeIn(5000);
	});
});
