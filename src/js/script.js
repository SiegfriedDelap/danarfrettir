import AOS from 'aos';

(function ($) {

    $(document).ready(function(){
        initSlider();
        initBurgar();
		
		AOS.init();

    });

	
	
	function initSlider(){
		let $slider = $('.outer-slider');
		let $subslider = $('.inner-slider');
		let $cardslider = $('.card-slider')
		
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

		$cardslider.slick({
			draggable: false,
			swipe: false,
			infinite: false,
			dots: true,
			prevArrow: $('.slider-nav .prev-card'),
			nextArrow: $('.slider-nav .next-card'),
		})
	}


	function initBurgar() {
		let burgar = document.querySelector('.icon-burger');
		let btn = document.querySelector('.navbar-toggler');
		btn.addEventListener('click', () => {
			burgar.classList.toggle('active');
		})
	}




    

}(jQuery));


