const deepInclude = (dataList, data, key) => {
	let found = false;

	for (let i = 0, len = dataList.length; i < len; i++) {
		if (dataList[i][key] === data) {
			found = true;
			break;
		}
	}

	return found
}

export default deepInclude