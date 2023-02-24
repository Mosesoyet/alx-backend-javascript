const calculateNumber = require('./1-calcul.js');
const assert = require("assert");

describe("calculateNumber", () => {

	describe("SUM", () => {

		it("Should sum two numbers and round off float numbers", () => {

			assert.equal(6, calculateNumber('SUM',1.4,4.5));

		});

	});

});
