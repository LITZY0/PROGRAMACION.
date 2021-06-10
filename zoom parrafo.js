$(document).ready(function(){

	$("#ocultar").click(function(evento){
		evento.preventDefault();
		$("#parrafo").hide(5000);
		$("#parrafo1").hide(5000);
		$("#parrafo2").hide(5000);
		$("#parrafo3").hide(5000);
		$("#parrafo4").hide(5000);
		$("#parrafo5").hide(5000);
		$("#parrafo6").hide(5000);
	});

	$("#mostrar").click(function(evento){
		evento.preventDefault();
		$("#parrafo").show(3000);
		$("#parrafo1").show(3000);
		$("#parrafo2").show(3000);
		$("#parrafo3").show(3000);
		$("#parrafo4").show(3000);
		$("#parrafo5").show(3000);
		$("#parrafo6").show(3000);
	});
});