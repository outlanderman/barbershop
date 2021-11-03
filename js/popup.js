let link = document.querySelector(".login");
let popup = document.querySelector(".modal-content");
let close = popup.querySelector(".modal-content-close");
let form = popup.querySelector("form");
let login = popup.querySelector("[name = login]");
let password = popup.querySelector("[name = password]");
let storage = localStorage.getItem("login");
let overlay = document.querySelector(".modal-overlay");

link.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.add("modal-content-show");
	overlay.classList.add("modal-content-show");

	if (storage) {
		login.value = storage;
		password.focus();
	} else {
		login.focus();
	}
});
close.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.remove("modal-content-show");
	popup.classList.remove("modal-error");
	overlay.classList.remove("modal-content-show");
});
form.addEventListener("submit", function (event) {
	if (!login.value || !password.value) {
		event.preventDefault();
		popup.classList.add("modal-error");
	} else {
		localStorage.setItem("login", login.value);
	}
});
window.addEventListener("keydown", function (KeyboardEvent) {
	if (KeyboardEvent.code === 'Escape') {
		if (popup.classList.contains("modal-content-show")) {
			popup.classList.remove("modal-content-show");
			overlay.classList.remove("modal-content-show");
		}
	}
});
overlay.addEventListener("click", function () {
	popup.classList.remove("modal-content-show");
	overlay.classList.remove("modal-content-show");
});