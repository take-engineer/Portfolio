//プリローダー
var setTime = 3000;
$('#status').delay(setTime).fadeOut();
$('#preloader').delay(setTime).fadeOut('slow');
$('body').delay(setTime).css({
	overflow: 'visible',
});

//スクロールイベント系
$(window).on('scroll', function () {
	//ヘッダー色変更処理
	var scroll = $(window).scrollTop();
	var navbar_height = $('nav.navbar').height() + 80;
	var kv_bottom_pos = $('#home + .section').offset().top - navbar_height;

	if (scroll >= kv_bottom_pos) {
		$('.sticky').addClass('stickyadd');
	} else {
		$('.sticky').removeClass('stickyadd');
	}

	//スムーススクロール　フローティングボタン
	if ($(this).scrollTop() > 100) {
		$('.floating').fadeIn();
	} else {
		$('.floating').hide();
	}

	//スクロールスパイ　カレント表示
	var navbarHeight = 81;
	if (matchMedia('only screen and (max-width: 990px)').matches) {
		//スマホ・タブレットの時の処理
		navbarHeight = 61;
	}
	$('#navbarCollapse').scrollspy({
		offset: navbarHeight,
	});
});

//スムーススクロール
$('a[href^="#"]').on('click', function (event) {
	var $anchor = $(this).attr('href');
	var target = $($anchor == '#' || $anchor == '' ? 'html' : $anchor);
	var navbarHeight = 80;
	if (matchMedia('only screen and (max-width: 990px)').matches) {
		//スマホ・タブレットの時の処理
		navbarHeight = 59;
	}
	$('html, body')
		.stop()
		.animate(
			{
				scrollTop: target.offset().top - navbarHeight,
			},
			500,
		);
	event.preventDefault();
});

//スライダー
var swiper = new Swiper('.swiper-container', {
	// navigation: {
	//   nextEl: '.swiper-button-next',
	//   prevEl: '.swiper-button-prev',
	// },
	autoplay: {
		delay: 3500,
	},
	loop: true,
	effect: 'fade',
	speed: 3000,
});

// Typed
$('.element').each(function () {
	var $this = $(this);
	$this.typed({
		strings: $this.attr('data-elements').split(','),
		typeSpeed: 40,
		startDelay: 3200,
		backSpeed: -1000,
		backDelay: 1500,
		loop: false,
		showCursor: true,
		cursorChar: '_',
		contentType: 'html',
	});
});

//Workフィルター
$(window).on('load', function () {
	var $container = $('.work-filter');
	var $filter = $('#menu-filter');
	$container.isotope({
		filter: '*',
		layoutMode: 'masonry',
		animationOptions: {
			duration: 750,
			easing: 'linear',
		},
	});

	$filter.find('a').on('click', function () {
		var selector = $(this).attr('data-filter');
		$filter.find('a').removeClass('active');
		$(this).addClass('active');
		$container.isotope({
			filter: selector,
			animationOptions: {
				animationDuration: 750,
				easing: 'linear',
				queue: false,
			},
		});
		return false;
	});
});

//SP時　グロナビクリックされたらメニュー閉じる
$('.navbar-nav>li>a , .dropdown-menu>a').on('click', function () {
	if (this.id != 'navbarDropdown') {
		$('.navbar-collapse').collapse('hide');
	}
});

//scrolla
$('.js-animate').scrolla({
	mobile: true, //sp時も適用
	once: true, //発火は1度のみ
});
