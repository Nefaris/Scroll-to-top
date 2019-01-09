let stt_background_color = "#000";
let stt_border_radius = "50%";
let stt_right_pos = "50px";
let stt_bottom_pos = "50px";
let stt_width = "60px";
let stt_height = "60px";

let stt_icon = '<i class="fas fa-angle-up"></i>';
let stt_icon_size = '1em';
let stt_icon_color = "#fff";

window.onload = () => {
	document.head.innerHTML +=
		('<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">' + '<style>html{scroll-behavior: smooth;}</style>');

	let stt = document.createElement("div");
	stt.innerHTML = stt_icon;
	stt.style.cssText = 'transition: 500ms;' + 'opacity: 1;' + 'cursor: pointer;' + 'position: fixed; ' + 'display: flex;' + 'justify-content: center;' + 'align-items: center;' + 'width:' + stt_width + '; height: ' + stt_height + '; border-radius: ' + stt_border_radius + '; right: ' + stt_right_pos + '; bottom: ' + stt_bottom_pos + '; color: ' + stt_icon_color + '; background-color: ' + stt_background_color + '; font-size: ' + stt_icon_size;

	document.body.appendChild(stt);

	stt.addEventListener("click", () => {
		document.body.scrollIntoView();
	});

	window.addEventListener('scroll', () => {
		let scroll_h = window.scrollY;
		let window_h = window.innerHeight;

		if (scroll_h > window_h) {
			fadeIn(stt);
		} else {
			fadeOut(stt);
		}
	});
};

function fadeOut(element) {
	element.style.opacity = 0;
	element.style.zIndex = -999;
}

function fadeIn(element) {
	element.style.opacity = 1;
	element.style.zIndex = 999;
}