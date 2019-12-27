$(document).ready(function () {

	$('#slides').superslides({
		animation: 'fade',
		play: 10000,
		pagination: false
	});

	var typed = new Typed(".typed", {
		strings: ["Software Engineer", "Full Stack Developer"],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});



	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 10,

		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			1000: {
				items: 5
			}
		}
	});


	var skillsTopOffset = $("#skills").offset().top;
	var statsTopOffset = $("#skills").offset().top;
	var countUpFinished = false;
	$(window).scroll(function () {

		if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

			$('.chart').easyPieChart({
				easing: 'easeInOut',
				barColor: '#fff',
				trackColor: false,
				scaleColor: false,
				lineWidth: 4,
				size: 152,
				onStep: function (from, to, percent) {
					$(this.el).find('.percent').text(Math.round(percent));
				}
			});


		}


		if (!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
			$(".counter").each(function () {
				var element = $(this);
				var endVal = parseInt(element.text());

				element.countup(endVal);
			})

			countUpFinished = true;

		}


	});


	$("[data-fancybox]").fancybox();


	$(".items").isotope({
		filter: '*',
		animationOptions: {
			duration: 1500,
			easing: 'linear',
			queue: false
		}
	});

	$("#filters a").click(function () {

		$("#filters .current").removeClass("current");
		$(this).addClass("current");

		var selector = $(this).attr("data-filter");

		$(".items").isotope({
			filter: selector,
			animationOptions: {
				duration: 1500,
				easing: 'linear',
				queue: false
			}
		});

		return false;
	});





});

$("#navigation li a").click(function (e) {
	e.preventDefault();

	var targetElement = $(this).attr("href");
	var targetPosition = $(targetElement).offset().top;
	$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

});



$("button").click(function () {
	$('html,body').animate({
		scrollTop: $(".second").offset().top
	},
		'slow');
});















