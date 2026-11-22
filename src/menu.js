import noodles from "./img/pasta.jpg";
import meat from "./img/steak.jpg";
import bone from "./img/ribs.jpg";
import wopper from "./img/burger.jpg";
import frenchfries from "./img/fries.jpg";
import bread from "./img/buns.jpg";

export function createMenuPage() {
	const card1 = document.createElement("div");
	const card2 = document.createElement("div");
	const card3 = document.createElement("div");
	const card4 = document.createElement("div");
	const card5 = document.createElement("div");
	const card6 = document.createElement("div");

	const menuHolder = document.createElement("main");
	menuHolder.classList.add("menu");
	const content = document.getElementById("content");
	content.appendChild(menuHolder);
	menuHolder.appendChild(card1);
	menuHolder.appendChild(card2);
	menuHolder.appendChild(card3);
	menuHolder.appendChild(card4);
	menuHolder.appendChild(card5);
	menuHolder.appendChild(card6);

	if (menuHolder) {
		menuHolder.style.display = "flex";
	}

	const pasta = document.createElement("img");
	const pastaDes = document.createElement("p");
	pastaDes.textContent = "The Most Generic Pasta";
	pasta.src = noodles;
	pasta.style.width = "130px";
	pasta.style.height = "auto";
    card1.appendChild(pastaDes)
	card1.appendChild(pasta);

    const steak = document.createElement("img");
	const steakDes = document.createElement("p");
	steakDes.textContent = "The Most Generic Steak";
	steak.src = meat;
	steak.style.width = "100px";
	steak.style.height = "auto";
    card2.appendChild(steakDes)
	card2.appendChild(steak);

    const ribs = document.createElement("img");
	const ribsDes = document.createElement("p");
	ribsDes.textContent = "The Most Generic Ribs";
	ribs.src = bone;
	ribs.style.width = "100px";
	ribs.style.height = "auto";
    card3.appendChild(ribsDes)
	card3.appendChild(ribs);

    const burger = document.createElement("img");
	const burgerDes = document.createElement("p");
	burgerDes.textContent = "The Most Generic burger";
	burger.src = wopper;
	burger.style.width = "80px";
	burger.style.height = "auto";
    card4.appendChild(burgerDes)
	card4.appendChild(burger);

    const fries = document.createElement("img");
	const friesDes = document.createElement("p");
	friesDes.textContent = "The Most Generic Fries";
	fries.src = frenchfries;
	fries.style.width = "70px";
	fries.style.height = "auto";
    card5.appendChild(friesDes)
	card5.appendChild(fries);

    const buns = document.createElement("img");
	const bunsDes = document.createElement("p");
	bunsDes.textContent = "The Most Generic Buns";
	buns.src = bread;
	buns.style.width = "120px";
	buns.style.height = "auto";
    card6.appendChild(bunsDes)
	card6.appendChild(buns);
}
