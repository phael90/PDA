var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  it('it has a sample test', function(){
    assert.equal(true, true);
  })

  it('it can add two numbers', function() {
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.equal(5, calculator.runningTotal);
  })

  it('it should be able to subtract two numbers', function() {
    calculator.previousTotal = 9;
    calculator.subtract(4);
    assert.equal(5, calculator.runningTotal);
  })

  it('it should be able to multiply two numbers', function() {
    calculator.previousTotal = 2;
    calculator.multiply(3);
    assert.equal(6, calculator.runningTotal);
  })

  it('it should be able to divide two numbers', function() {
    calculator.previousTotal = 28;
    calculator.divide(7);
    assert.equal(4, calculator.runningTotal);
  })

  it('should be able to concatenate multiple number button clicks', function() {
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(3);
    assert.equal(123, calculator.runningTotal);
  })

  it('it should be able to chain multiple operations together', function() {
    calculator.runningTotal = 3;
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.operatorClick('*');
    calculator.numberClick(4)
    calculator.operatorClick('=')
    assert.equal(20, calculator.runningTotal);
  })

  it('it should be able to clear the running total without changing the calculation', function() {
    calculator.runningTotal = 2;
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.clearClick();
    calculator.numberClick(6);
    calculator.operatorClick('=');
    assert.equal(8, calculator.runningTotal);
  })
});
