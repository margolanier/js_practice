function refine(menu) {
	return menu.map(getInfo);
}

function getInfo(item) {
	return item.message;
}

module.exports = refine;