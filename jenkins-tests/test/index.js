const sum = require('../');
const assert = require('assert');

describe('Sum', () => {
  it('should handle positive numbers', () => {
    assert.equal(sum(3, 5), 8);
  });
  it('should handle negative numbers', () => {
    assert.equal(sum(3, -5), -2);
  });
  it('should handle decimals', () => {
    assert.equal(sum(3.5, 7.1), 10.6);
  });
  it('should handle sergio numbers', () => {
    assert.equal(sum(777, 777), 1554);
  });
});
