export function createContactPage() {
	const contentDiv = document.getElementById("content");

	const main = document.createElement("main");
	main.classList.add("contactMain");
	contentDiv.appendChild(main);

	const foot = document.createElement("footer");

	const fPara = document.createElement("p");
	fPara.textContent = "All Rights Are Reserved";
	foot.appendChild(fPara);
	contentDiv.appendChild(foot);

	if (main) {
		foot.style.position = "fixed";
		foot.style.bottom = "0";
		main.style.display = "block";
	}
	const para1 = document.createElement("p");
	para1.textContent = "contact number: +123456789";
	main.appendChild(para1);

	const email = document.createElement("p");
	email.textContent = "email: example@gmail.com";
	main.appendChild(email);

	const iframe = document.createElement("iframe");
	const location = document.createElement("p");
	location.textContent = "Our location";
	iframe.setAttribute("src", "https://www.openstreetmap.org/#map=17/59.987088/30.168951");
	iframe.width = "80%";
	iframe.height = "auto";
	main.appendChild(location)
	main.appendChild(iframe);
}
