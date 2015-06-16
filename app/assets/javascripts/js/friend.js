$(document).ready(function() {
	$(".flip").click(function() {
		$(".panel").slideToggle("slow");
	});

	$(".find").focus(function(){
		$(".search-sec").slideToggle("slow");
	});


});

// function search() {
// 	alert("aa");
// }