//on load
$(document).ready(function() {
	console.log("ready!");

	var textContent = new Array();
	textContent[0] = "Oil on canvas, 166.4 x 90.2 cm <br> Blanton Museum of Art, The University of Texas at Austin";

	//head
	textContent[1] = "Lucretia’s face, though realistically rendered, does not seem to express enough emotion to convince the viewer that she is currently committing suicide, thus failing to achieve verisimilitude. In a superior painting, \“every part should agree in kind\” (Alberti 74).";

	//body
	textContent[2] = "Lucretia’s body is in contrapposto. Each one of her limbs is in a different position: her right foot is grounded while her left foot is raised on a step, her left arm rests on a cushion while she uses her right arm to stab herself. Italian Renaissance painters “wish to express emotions through the movements of limbs” by striving to include all seven directions of human movement —  up, down, left, right, forward, back, and circular (Alberti 78). Cambiaso, through the positioning Lucretia’s torso and limbs, does indeed include those seven movements. However, Lucretia’s right arm appears wooden and frozen in a moment supposedly of intense action and, like her face, fails to convey verisimilitude.";

	//drapery
	textContent[3] = "Lucretia is painted nude, but her genitals are covered by drapery, following a rule that “obscene parts of the body...should be covered with clothing” (Alberti 76). Lucretia’s drapery coupled with her body in contrapposto resembles that of Venus de Milo and is classicizing. While the original Lucretia in the Classical texts by Livy was robed, painting her nude with drapery makes her appear more classical. A good artist during the Italian Renaissance ought to have been “well-versed in the liberal arts” (Alberti 87). Cambiaso, in addition to being a painter himself, was also the son of an artist (Blanton Press Release). Cambiaso likely received a humanist education, during which he read the works of Livy, as well as training as an artist, from which he copied sculptures like Venus de Milo.";

	//bed
	textContent[4] = "The architectural lines of the bed imply a vanishing point, indicating that the bed was circumscribed in accordance to rules of perspective. Painters during the Italian Renaissance were expected to depict forms “markedly in relief and similar to the objects presented” (Alberti 67). The caryatid-esque relief sculpting on the corner of the bedframe further demonstrate Cambiaso’s ability to circumscribe forms according to the rules of geometric perspective.";

	//bedding
	textContent[5] = "Cambiaso uses a variety of textures in this composition. Lucretia’s body, the bedframe, and the bedding all show Cambiaso’s ability to render a variety of textures. In painting, “any great variety, provided that it is appropriate to what is going on in the picture,” is worthy of praise (Alberti 75).";

	//shadows
	textContent[6] = "Cambiaso uses chiaroscuro to create shadows on the left side of the image and sparingly uses white to create highlights on Lucretia’s body and the room’s furnishings, indicating that a light source is to the right of the scene. Cambiaso paints in accordance to the theory that “shadows always correspond on the side away from the light...that in no body is a surface illuminated without your finding surfaces on its other side covered in shade” (Alberti 83).";

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