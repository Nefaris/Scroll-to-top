let stt_background_color = "#000";
let stt_border_radius = "50%";
let stt_right_pos = "50px";
let stt_bottom_pos = "50px";
let stt_width = "60px";
let stt_height = "60px";

//import font awesome
let import_FA = true;

let stt_icon = '<i class="fas fa-angle-up"></i>';
let stt_icon_size = '1em';
let stt_icon_color = "#fff";

//display on mobile devices
let stt_display_mobile = false;

window.onload = () => {
	if (import_FA) document.head.innerHTML +=
		'<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">';

	document.head.innerHTML += '<style>html{scroll-behavior: smooth;}</style>';

	let stt = document.createElement("div");
	stt.innerHTML = stt_icon;
	stt.style.cssText = 'transition: 750ms;' + 'z-index: -999;' + 'opacity: 0;' + 'cursor: pointer;' + 'position: fixed; ' + 'display: flex;' + 'justify-content: center;' + 'align-items: center;' + 'width:' + stt_width + '; height: ' + stt_height + '; border-radius: ' + stt_border_radius + '; right: ' + stt_right_pos + '; bottom: ' + stt_bottom_pos + '; color: ' + stt_icon_color + '; background-color: ' + stt_background_color + '; font-size: ' + stt_icon_size;

	document.body.appendChild(stt);

	stt_checkWidth();
	stt_checkScroll_h();

	stt.addEventListener("click", () => {
		document.body.scrollIntoView();
	});

	window.addEventListener('resize', () => {
		stt_checkWidth();
	});

	window.addEventListener('scroll', () => {
		stt_checkScroll_h();
	});

	function stt_checkScroll_h() {
		if (window.scrollY > window.innerHeight) {
			stt_fadeIn(stt);
		} else {
			stt_fadeOut(stt);
		}
	}

	function stt_fadeOut(element) {
		element.style.opacity = 0;
		element.style.zIndex = -999;
	}

	function stt_fadeIn(element) {
		element.style.zIndex = 999;
		element.style.opacity = 1;
	}

	function stt_checkWidth() {
		if (!stt_display_mobile) {
			if (window.innerWidth < 600) stt.style.display = 'none';
			else stt.style.display = 'flex';
		}
	}
};