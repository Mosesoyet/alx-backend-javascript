const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {

	let spy;

	beforeEach(() => {

		if ( !spy ) {
			spy = sinon.spy(console);
		};
	});

	afterEach(() => {

		spy.log.resetHistory();
	});

	describe("Test 1", () => {

		it("Should call sendPaymentRequestToApi with 100 and 20", () => {

			sendPaymentRequestToApi(100, 20);
			expect(spy.log.calledWith("The total is: 120")).to.be.true;
			expect(spy.log.calledOnce).to.be.true;
		});
	});

	describe("Test 2", () => {

		it("Should call sendPaymentRequestToApi with 10 and 10", () => {

			sendPaymentRequestToApi(10,10);
			expect(spy.log.calledWith("The total is: 20")).to.be.true;
			expect(spy.log.calledOnce).to.be.true;
		});
	});
});
