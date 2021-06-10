$(document).ready(function(){
	$("#ocultar").click(function(evento){
		evento.preventDefault();
		$("#foto").hide(5000);
	});

	$("#mostrar").click(function(evento){
		evento.preventDefault();
		$("#foto").show(5000);
	});
	$("#foto1").fadeOut(5000, function(){
		$("#foto1").css({'top':300, 'left':200});
		$("#foto1").fadeIn(5000);

	});

	$("#foto2").fadeOut(5000, function(){
		$("#foto2").css({'top':300, 'left':200});
		$("#foto2").fadeIn(5000);

	});

	$("#foto3").fadeOut(5000, function(){
		$("#foto3").css({'top':300, 'left':200});
		$("#foto3").fadeIn(5000);

	});
});