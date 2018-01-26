$(document).foundation();

$('.icon-delete').click(function(e) {
	e.preventDefault();
	$(this).closest('li').hide('slow', function(){ $target.remove(); });
})

var swiper = new Swiper('.swiper-container', {
	slidesPerView: 3,
	spaceBetween: 0,
	centeredSlides: true,
	initialSlide: 1,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="slider-control swiper-pagination-bullet"></span>';
		}
	},
});