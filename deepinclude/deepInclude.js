/**
 * 
 * @param {Array} dataList 
 * @param {value} data 
 * @param {key in array object} key 
 * 
 * @returns true is element is in array else false
 */
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