const assert = require('chai').assert;
const simpleFunc = require('../../simple-func.js'); // Assuming your function is defined in a separate file

describe('simpleFunc', function() {
  it('should return "good morning" message for time before 12', function() {
    const result = simpleFunc('John', -1);
    assert.strictEqual(result, 'good morning John');
  });

  it('should return "good afternoon" message for time after 12', function() {
    const result = simpleFunc('Jane', 14);
    assert.strictEqual(result, 'good afternoon Jane');
  });

  it('should return "good afternoon" message for time equal to 12', function() {
    const result = simpleFunc('Alice', 12);
    assert.strictEqual(result, 'good afternoon Alice');
  });
});
