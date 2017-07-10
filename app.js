console.log("We doing stuff!");
$('.box').removeClass("blue").addClass("red");

function removeBox() {
	$(".box").fadeOut( "slow",function() {
		$(this).remove();
	});
}

$('#removeBox').click(removeBox);