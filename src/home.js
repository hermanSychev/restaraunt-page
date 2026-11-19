 export function createHomePage() {
	const contentDiv = document.getElementById("content");

	const mainChild = document.createElement("main");

	const foot = document.createElement("footer");

	const fPara = document.createElement("p");

	fPara.textContent = "All Rights Are Reserved";
	foot.appendChild(fPara);
	contentDiv.appendChild(mainChild);
	contentDiv.appendChild(foot);

	const divchild1 = document.createElement("div");
	divchild1.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias
					numquam rem! Minus, iure est tempora nulla natus suscipit eaque labore
					magni eveniet delectus amet, recusandae architecto, vitae provident
					facere!
					\n
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
					necessitatibus illum voluptatibus beatae natus et ratione ex alias
					temporibus aut velit harum voluptatum nostrum voluptas optio, deserunt
					laboriosam nobis iure?`;

	const divchild2 = document.createElement("div");
	divchild2.textContent = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex quisquam
					pariatur nulla fugiat iusto assumenda quia corrupti enim, itaque dolor
					quos veniam, tempore vero voluptatem modi velit et. Animi, voluptate?
					\n
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
					libero sequi cupiditate corrupti dicta doloremque eos culpa harum,
					voluptatem vero. Ipsa cum provident ab et, itaque ipsum autem soluta
					inventore!`;

	const divchild3 = document.createElement("div");
	divchild3.textContent = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam ipsa
					laborum expedita delectus officiis eligendi quia in impedit iure
					tempore quaerat, fugit repellat cupiditate labore voluptates
					asperiores nisi illo! Ipsa.
					\n
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
					mollitia dolore dolores laboriosam quaerat veniam sed exercitationem
					doloribus. `;

	mainChild.appendChild(divchild1);
	mainChild.appendChild(divchild2);
	mainChild.appendChild(divchild3);
}

