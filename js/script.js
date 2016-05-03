//on load
$(document).ready(function() {
	console.log("ready!");

	var textContent = new Array();
	textContent[0] = "Oil on canvas, 166.4 x 90.2 cm <br> Blanton Museum of Art, The University of Texas at Austin";

	textContent[1] = "head";
	textContent[2] = "body";
	textContent[3] = "drapery";
	textContent[4] = "bed";
	textContent[5] = "bedding";
	textContent[6] = "shadows";

	$(".section").hover(
		function() {//mouse in
			//console.log("entered section "+$(this).attr('id'));
			$("#text").html(textContent[$(this).attr('id')]);
			$("#instructions").hide();
		}, function() {//mouse out
			$("#text").html(textContent[0]);
			$("#instructions").show();
		}
	);
});