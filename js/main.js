$(document).ready(function() {

    $("body").fadeIn(2000);

	$("a.main__link").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$(".main__header, .main__content,  .main__footer").fadeOut(1000, redirectPage);
	});

	function redirectPage() {
		window.location = linkLocation;
	}
});