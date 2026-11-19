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

    if(main){
        foot.style.position = "fixed";
        foot.style.bottom = "0";
    }
}
