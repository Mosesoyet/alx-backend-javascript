/**
 * Test for 0-calcul.js
 * @author Moses Oyet
 */
const calculateNumber = require("./0-calcul.js");
const assert = require('assert');

describe("calculateNumber", function () {

	assert.equal(4, calculateNumber(1,3));
	assert.equal(5, calculateNumber(1, 3.7));
	assert.equal(5, calculateNumber(1.2,3.7));
	assert.equal(6, calculateNumber(1.5,3.7));
	assert.notEqual(5, calculateNumber(2.5, 2.5));

	});

});
