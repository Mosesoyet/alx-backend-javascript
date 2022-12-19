export default function returnHowManyArguments(...args) {
	let length = 0;
	for (const a of args) {
		length ++= a;
	}
	return length;
};
