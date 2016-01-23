$(function() {

	$('#countdown3').ClassyCountdown({
		end: '2016-04-26 21:30:00',
		labels: true,
		labelsOptions: {
			lang: {
				days: 'Дней',
				hours: 'Часов',
				minutes: 'Минут',
				seconds: 'Секунд'
			},
			style: 'font-size:23px; text-transform:uppercase;'
		},
		style: {
			element: "",
			textResponsive: .5,
			days: {
				gauge: {
					thickness: .2,
					bgColor: "rgba(255,255,255,1)",
					fgColor: "rgb(173, 215, 65)"
				},
				textCSS: 'font-family:\'GothaProBla\', sans-serif; font-size:30px; font-weight:300; color:rgba(255,255,255,1);'
			},
			hours: {
				gauge: {
					thickness: .2,
					bgColor: "rgba(255,255,255,1)",
					fgColor: "rgb(173, 215, 65)"
				},
				textCSS: 'font-family:\'GothaProBla\', sans-serif; font-size:25px; font-weight:300; color:rgba(255,255,255,1);'
			},
			minutes: {
				gauge: {
					thickness: .2,
					bgColor: "rgba(255,255,255,1)",
					fgColor: "rgb(173, 215, 65)"
				},
				textCSS: 'font-family:\'GothaProBla\', sans-serif; font-size:25px; font-weight:300; color:rgba(255,255,255,1);'
			},
			seconds: {
				gauge: {
					thickness: .2,
					bgColor: "rgba(255,255,255,1)",
					fgColor: "rgb(173, 215, 65)"
				},
				textCSS: 'font-family:\'GothaProBla\', sans-serif; font-size:25px; font-weight:300; color:rgba(255,255,255,1);'
			}

		},
		onEndCallback: function() {
			console.log("Time out!");
		}
	});



$(".slider").owlCarousel({
	items : 2,
	nav : true,
	navText : "",
	loop : true,
	autoplay : true,
	autoplayHoverPause : true,
	fluidSpeed : 600,
	autoplaySpeed : 600,
	navSpeed : 600,
	dotsSpeed : 600,
	dragEndSpeed : 600
});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});