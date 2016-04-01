$(function() {

	$(".first_day").click(function() {
		$(".days1_items").css("display", "block");
		$(".days2_items").css("display", "none");
	});
	$(".second_day").click(function() {
		$(".days2_items").css("display", "block");
		$(".days1_items").css("display", "none");
	});

	$(".title_sect_1 h2, .title_wrap h2, .item_wrap_sect9 .img_wrap").animated("fadeInLeft");
	$(".item").animated("fadeInDown");
	$(".item_sect7_wrap").animated("zoomIn");

	
	$("#toggle").click(function(){
		$(this).toggleClass("on");
		$(".nav_menu").slideToggle();
	});

	$(".arr_down").click(function() {
		$("html, body").animate({ scrollTop: $(".head").height()+120 }, "slow");
		return false;
	});

	$(".nav_menu ul a").mPageScroll2id();

	$(".popup").magnificPopup();

	$("#form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			setTimeout(function() {
				// Done Functions
				$.magnificPopup.open({
					items: {
						src: '.done'
					},
					type: 'inline'
				});
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	$("#form1").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			setTimeout(function() {
				// Done Functions
				$.magnificPopup.open({
					items: {
						src: '.done'
					},
					type: 'inline'
				});
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	$("#form2").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			setTimeout(function() {
				// Done Functions
				$.magnificPopup.open({
					items: {
						src: '.done'
					},
					type: 'inline'
				});
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	

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

$('#countdown4').ClassyCountdown({
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
	responsive : {
    // breakpoint from 0 up
    0 : {
    	items: 1,
    },
    // breakpoint from 480 up
    480 : {
    	items: 1
    },
    // breakpoint from 768 up
    768 : {
    	items: 2
    },
    1000 : {
    	items: 2
    },
    1200 : {
    	items: 2
    }
  },
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
