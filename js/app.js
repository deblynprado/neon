$(document).foundation();

$('.icon-delete').click(function(e) {
	e.preventDefault();
	$(this).closest('li').hide('slow', function(){ $target.remove(); });
})