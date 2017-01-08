function refine(menu) {
	return menu.map(getInfo);
}

function getInfo(item) {
	return item.title;
}

module.exports = refine;