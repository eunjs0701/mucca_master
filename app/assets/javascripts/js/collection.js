// $('form').on('keyup', '.form-control', function(e){
//     if(e.keyCode == '13'){
//         alert("a");
//     }
// });
$(document).ready(function() {
	$( "#search" ).keyup(function(e) {
		if(e.keyCode == '13'){
	        // $("#user").css("display", "none");
			$(".user").css("display", "none");
	    }
	});
});	