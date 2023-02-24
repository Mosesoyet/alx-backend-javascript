const calculateNumber = require('./2-calcul_chai.js');
const expect = require('chai').expect

describe("calculateNumber", () => {

	describe("SUM", () => {

		it("Should sum two numbers and round off float numbers", () => {
			
			expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);

		});

	});

	describe("SUBTRACT", () => {

		it("Should subtract two numbers", () => {

			expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);

		});
	});

	describe("DIVIDE", () => {

		it("Should divide two numbers", () => {

			expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
			expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal("Error");

		});

	});
});
