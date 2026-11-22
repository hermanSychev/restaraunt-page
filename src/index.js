import { createHomePage } from "./home.js";
import { createContactPage } from "./contact.js";
import { createMenuPage } from "./menu.js";

import "./styles.css";

const contDiv = document.getElementById("content");

const about = document.getElementById("about");

about.addEventListener("click", () => {
	contDiv.innerHTML = "";
	createHomePage();
});

const menu = document.getElementById("menu");
menu.addEventListener("click", () => {
	contDiv.innerHTML = "";
	createMenuPage();
});

const contact = document.getElementById("contact");
contact.addEventListener("click", () => {
	contDiv.innerHTML = "";
	createContactPage();
});

document.addEventListener("DOMContentLoaded", () => {
	createHomePage();
});
