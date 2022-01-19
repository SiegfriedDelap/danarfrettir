(function ($) {

    $(document).ready(function(){
        initSlider();
        initBurgar();
    });


	function initSlider(){
		let $slider = $('.outer-slider');
		let $subslider = $('.inner-slider');
		
		$slider.slick({
			draggable: false,
			swipe: false,
			infinite: false,
			prevArrow: $('.slider-nav .prev'),
			nextArrow: $('.slider-nav .next'),
		});
		
		$subslider.slick({
			initialSlide: 1,
			dots: true,
		});
	}


	function initBurgar() {
		let burgar = document.querySelector('.icon-burger');
		let btn = document.querySelector('.navbar-toggler');
		btn.addEventListener('click', () => {
			burgar.classList.toggle('active');
		})
	}




    

}(jQuery));


