$(document).ready(function(){
	$('.outline').hover(function(){
		var color_ball = $(this).find('.color-ball');
		var color_hex = $(color_ball).attr('data-hex');
		$(this).css('background-color', color_hex);
		$(this).css('opacity', 1);
	}, function(){
		$(this).css('background-color', 'transparent');
		$(this).css('opacity', 0.7);
	});


	$('.color-ball').click(function(){
		var color_id = $(this).attr('data-color');
		var c_src = "../../img_label_"+color_id+".png";
		var cb_src = "../../img_label_"+color_id+"_back.png";
		$('.color-bar').attr('src', c_src );
		$('.color-bar-back').attr('src', cb_src);
	});
});