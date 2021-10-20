let mapOpen = document.querySelector(".js-open-map");
let mapPopup = document.querySelector(".modal-content-map");
let mapClose = mapPopup.querySelector(".modal-content-close");


mapOpen.addEventListener("click", function (event) {
	event.preventDefault();
	mapPopup.classList.add("modal-content-show");
});
mapClose.addEventListener("click", function (event) {
	event.preventDefault();
	mapPopup.classList.remove("modal-content-show");
});
window.addEventListener("keydown", function (KeyboardEvent) {
	if (KeyboardEvent.code === 'Escape') {
		if (mapPopup.classList.contains("modal-content-show")) {
			mapPopup.classList.remove("modal-content-show");
		}
	}
});