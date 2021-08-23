/** 
 * @desc creates a grid of squares 
 */
 function makeGrid() {
	function colorCell(event) {
		if (event.target.nodeName == "TD")
			event.target.style.backgroundColor = boxes[3].value;
	}
	let x = (gridHeight.value);
	let y = (gridWidth.value);

	const t = document.createElement("table");

	if (document.body.contains(document.querySelector("table"))) {
		document.querySelector("table").remove();
	}
	for (var i = 0; i < x; i++) {
		const tr = document.createElement("tr");
		for (var j = 0; j < y; j++) {
			const td = document.createElement("td");
			tr.appendChild(td);
		}
		t.appendChild(tr);
	}
	t.addEventListener("click", colorCell);
	document.body.appendChild(t);
}


const boxes = document.querySelectorAll("input");
const gridHeight = boxes[0];
const gridWidth = boxes[1];
const submit = boxes[2];

submit.addEventListener("click", makeGrid);