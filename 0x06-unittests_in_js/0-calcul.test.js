/**
 * Test for 0-calcul.js
 * @author Moses Oyet
 */
const calculateNumber = require("./0-calcul.js");
const assert = require('assert');

describe("calculateNumber", function () {

	describe("sum numbers", () => {

		it("Should sum two numbers and round off float to whole number", () => {

			assert.equal(4, calculateNumber(1,3));

		});

	});
});
