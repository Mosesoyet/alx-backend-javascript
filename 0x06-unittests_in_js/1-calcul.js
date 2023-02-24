function calculateNumber(type, a, b) {

	switch( type ) {
		case "SUM":
			return (Math.round(a) + Math.round(b));
			break;

		case "SUBTRACK":
			return (Math.round(a) - Math.round(b));
			break;

		case "DIVIDE":
			if ( Math.round(b) === 0 ) {
				return "Error";
			} else {
				return (Math.round(a) / Math.round(b));
			};
			break;
	};
}

module.exports = calculateNumber;
