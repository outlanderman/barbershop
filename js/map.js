let mapOpen = document.querySelector(".js-open-map");
let mapPopup = document.querySelector(".modal-content-map");
let mapClose = mapPopup.querySelector(".modal-content-close");
let mapOverlay = document.querySelector(".modal-overlay");


mapOpen.addEventListener("click", function (event) {
	event.preventDefault();
	mapPopup.classList.add("modal-content-show");
	mapOverlay.classList.add("modal-content-show");
});
mapClose.addEventListener("click", function (event) {
	event.preventDefault();
	mapPopup.classList.remove("modal-content-show");
	mapOverlay.classList.remove("modal-content-show");
});
window.addEventListener("keydown", function (KeyboardEvent) {
	if (KeyboardEvent.code === 'Escape') {
		if (mapPopup.classList.contains("modal-content-show")) {
			mapPopup.classList.remove("modal-content-show");
			mapOverlay.classList.remove("modal-content-show");
		}
	}
});
mapOverlay.addEventListener("click", function () {
	mapPopup.classList.remove("modal-content-show");
	overlay.classList.remove("modal-content-show");
})