/* eslint-disable */
export default function appendToEachArrayValue(array, appendString) {
	const temp_array = [];
	for (const val of array) {
		temp_array.push(appendString + val)
	}
	return temp_array;
}
