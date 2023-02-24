const calculateNumber = require('./2-calcul_chai.js');
const expect = require('chai').expect

describe("calculateNumber", () => {

	describe("SUM", () => {

		it("Should sum two numbers and round off float numbers", () => {
			
			expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);

		});

	});
});
