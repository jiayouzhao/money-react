let id = parseFloat(window.localStorage.getItem("tagsId") || "0");

function createId() {
	id++;
	window.localStorage.setItem("tagsId", JSON.stringify(id));
	return id;
}

export default createId;