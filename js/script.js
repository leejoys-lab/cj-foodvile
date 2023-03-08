$(document).on("click", 'a[href="#"]', function (e) {
	e.preventDefault();
});

$(document).ready(function () {
	mainInit();

	//비주얼
	$("#visual .visual-img ul li").on("mouseover", function () {
		var idx = $(this).index();

		$("#visual .visual-img ul li").removeClass("on");
		$("#visual .visual-txt ul li").removeClass("on");

		$(this).addClass("on");
		$("#visual .visual-txt ul li").eq(idx).addClass("on");
	});

	// 메인페이지
	function mainInit() {
		menu();
		top_btn();
		lang();
		brand();
	}

	//메뉴
	function menu() {
		let allMenu = document.querySelector(".all-menu");
		let close = document.querySelector(".close");
		let navWrap = document.querySelector(".nav-wrap");

		allMenu.addEventListener("click", function (e) {
			navWrap.classList.add("on");
			allMenu.classList.add("on");
		});

		close.addEventListener("click", function (e) {
			navWrap.classList.remove("on");
			allMenu.classList.remove("on");
		});
	}

	//언어선택
	function lang() {
		let $ko = $("#header .lan ul li.kor");
		let $en = $("#header .lan ul li.eng");

		$en.hide();
		$ko.on("click", function () {
			$en.slideToggle();
		});
	}

	//탑버튼
	function top_btn() {
		let $top = $(".top");
		let ty = 0;
		let h = $("#header").height();

		$(window).on("scroll", function () {
			ty = $(window).scrollTop();
			if (ty > h + 400) {
				$top.show();
			} else {
				$top.hide();
			}
		});
		$top.click(function () {
			$("html, body").animate({ scrollTop: 0 }, 400);
			return false;
		});
	}

	//브랜드 클릭
	function brand() {
		let $brandli = $(".brand .brand-nav ul li");
		let $article = $(".brand .brand-article ul li");
		let $bigli = $(".brand .brand-img .big-img li");
		let $smallli = $(".brand .brand-img .small-img li");
		let next = document.querySelector(".brand .brand-nav .next");
		let prev = document.querySelector(".brand .brand-nav .prev");
		let total = $brandli.length;
		let cnt = 0;
		let timer = null,
			interval = 5000;

		timer = setInterval(make, interval);
		function make() {
			cnt++;
			if (cnt > total - 1) {
				cnt = 0;
			}
			change();
		}

		$article.removeClass("on").eq(cnt).addClass("on");
		$bigli.removeClass("on").eq(cnt).addClass("on");
		$smallli.removeClass("on").eq(cnt).addClass("on");

		$brandli.on("click", function () {
			cnt = $(this).index();
			change();
			clearInterval(timer);
			timer = setInterval(make, interval);
		});

		next.addEventListener("click", function () {
			cnt++;
			if (cnt > total - 1) {
				cnt = 0;
			}
			change();
			clearInterval(timer);
			timer = setInterval(make, interval);
		});

		prev.addEventListener("click", function () {
			cnt--;
			if (cnt < 0) {
				cnt = total - 1;
			}
			change();
			clearInterval(timer);
			timer = setInterval(make, interval);
		});

		function change() {
			$brandli.removeClass("on").eq(cnt).addClass("on");
			$article.removeClass("on").eq(cnt).addClass("on");
			$bigli.removeClass("on").eq(cnt).addClass("on");
			$smallli.removeClass("on").eq(cnt).addClass("on");
		}
	}
});
