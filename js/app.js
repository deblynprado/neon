$(document).foundation();

$('.icon-delete').click(function(e) {
	e.preventDefault();
	$(this).closest('li').remove();
})