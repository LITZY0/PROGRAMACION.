$(document).ready(function(){
	$("#ocultar").fadeOut(2000, function(){
		$("#cinco").fadeOut(2000);
	});

	$("#mostrar").fadeOut(2000, function(){
		$("#cinco").fadeIn(2000);
	});
});