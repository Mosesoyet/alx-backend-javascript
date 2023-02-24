const calculateNumber = require('./1-calcul.js');
const assert = require("assert");

describe("calculateNumber", () => {

	describe("SUM", () => {

		it("Should sum two numbers and round off float numbers", () => {

			assert.equal(6, calculateNumber('SUM',1.4,4.5));

		});

	});

	describe("SUBTRACT", () => {

		it("Should subtract two numbers, if float number then should round the folat", () => {

			assert.equal(-4, calculateNumber('SUBTRACT', 1.4, 4.5));

		});
	});

	describe("DIVIDE", () => {

		it("Should divide two numbers, if b is 0, should return error", () => {

			assert.equal(0.2, calculateNumber('DIVIDE', 1.4, 4.5));
			assert.equal("Error", calculateNumber('DIVIDE', 1.4, 0));

		});
	});
});
