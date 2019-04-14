$(document).ready(function(){
	$('.tour-slider').slick({
		infinite: true,
		slidesToShow: 3,
		prevArrow: '<button class="prev arrow"></button>',
		nextArrow: '<button class="next arrow"></button>',
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
				prevArrow: '<button class="prev arrow"></button>',
				nextArrow: '<button class="next arrow"></button>',
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				prevArrow: '<button class="prev arrow"></button>',
				nextArrow: '<button class="next arrow"></button>',
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 560,
			settings: {
				slidesToShow: 1,
				prevArrow: '<button class="prev arrow"></button>',
				nextArrow: '<button class="next arrow"></button>',
				slidesToScroll: 1
			}
		}
		]
	});
	$('.slider').slick({
		infinite: true,
		slidesToShow: 1,
		prevArrow: '<button class="prev arrow"></button>',
		nextArrow: '<button class="next arrow"></button>',
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 1,
				prevArrow: '<button class="prev arrow"></button>',
				nextArrow: '<button class="next arrow"></button>',
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
				prevArrow: '<button class="prev arrow"></button>',
				nextArrow: '<button class="next arrow"></button>',
				slidesToScroll: 1
			}
		}
		]
	});
	let linkup = $('#linkup');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
			linkup.addClass('linkup');
		} else {
			linkup.removeClass('linkup');
		}
	});
	$('.btn-filter').mousedown(function(event) {
		$(this).css('background', '#3f3f3f');
	});
	$('.btn-filter').mouseup(function(event) {
		$(this).css('background', 'linear-gradient(to right, #ff801e, #ffbb21)');
	});		
	$('.btn-filter').mouseover(function(event) {
		$(this).css('background', 'linear-gradient(to right, #ffbb21, #ff801e)');
	});
	$('.btn-filter').mouseout(function(event) {
		$(this).css('background', 'linear-gradient(to right, #ff801e, #ffbb21)');
	});

	$('.btn-footer').mousedown(function(event) {
		$(this).css('background', '#3f3f3f');
	});
	$('.btn-footer').mouseup(function(event) {
		$(this).css('background', '#00a3dd');
	});
	$('.btn-footer').mouseover(function(event) {
		$(this).css('background', '#01bcfe');
	});
	$('.btn-footer').mouseout(function(event) {
		$(this).css('background', '#00a3dd');
	});

	/* datepicker */

	$('#datepicker').daterangepicker({
		"autoApply": true,
		"locale": {
			"format": "D.MM.YY",
			"separator": " - ",
			"applyLabel": "Применить",
			"cancelLabel": "Отмена",
			"fromLabel": "От",
			"toLabel": "До",
			"customRangeLabel": "Свой",
			"daysOfWeek": [
			"Вс",
			"Пн",
			"Вт",
			"Ср",
			"Чт",
			"Пт",
			"Сб"
			],
			"monthNames": [
			"Ciчень",
			"Лютий",
			"Безрезень",
			"Квiтень",
			"Травень",
			"Червень",
			"Липень",
			"Серпень",
			"Вересень",
			"Жовтень",
			"Листопад",
			"Грудень"
			],
			"firstDay": 1,
		}
	});


	$('.daterangepicker').prepend('<p class="someclass">Виберіть дату, щоб продовжити</p><hr>');
	
	

	$('.minus').click(function () {
		var $input = $(this).parent().find('.result');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 0 : count;
		$input.val(count);
		$input.change();
		var a = $(".res1").val(),

		b = $(".res2").val(),
		c = $(".res3").val();
		if (a>5) {
			a=a+" номерiв • "
		}else if (a==1) {
			a=a+" номер • "
		}else {
			a=a+" номера • "
		}
		if (b==1) {
			b=b+" дорослий • "
		}else {
			b=b+" дорослих • "
		}
		if (c==1) {
			c=c+" дитина "
		}else {
			c=c+" дiтей "
		}
		var q = a+b+c;
		$('#someid').val(q);
		return false;
	});
	$('.plus').click(function () {
		var $input = $(this).parent().find('.result');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		var a = $(".res1").val(),
		b = $(".res2").val(),
		c = $(".res3").val();
		
		if (a>5) {
			a=a+" номерiв • "
		}else if (a==1) {
			a=a+" номер • "
		}else {
			a=a+" номера • "
		}
		if (b==1) {
			b=b+" дорослий • "
		}else {
			b=b+" дорослих • "
		}
		if (c==1) {
			c=c+" дитина "
		}else {
			c=c+" дiтей "
		}
		var q = a+b+c;
		$('#someid').val(q);
		return false;
	});
	$('#someid').click(function(event) {
		$('.calculation').show();
	});

	$(document).mouseup(function (e) {
		var container = $(".calculation");
		if (container.has(e.target).length === 0){
			container.hide();
		}
	});
	


});