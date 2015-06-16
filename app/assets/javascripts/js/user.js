$(document).ready(function() {
	$("#send").click(function() {
		$(".receive").css("display", "none");
		$(".send").css("display", "block");
	});

	$("#receive").click(function() {
		$(".send").css("display", "none");
		$(".receive").css("display", "block");
	});	
});