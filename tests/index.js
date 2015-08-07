var assert = require('assert');
var git = require('../index');

var result;

result = git.short();
assert.equal(result.length, 7, 'short() returns string of length 7');

result = git.long();
assert.equal(result.length, 40, 'long() returns string of length 7');

result = git.branch();
assert.equal(!!result.length, true, 'branch() returns a string with non-zero length');

result = git.message();
assert.equal(!!result.length, true, 'message() returns a string with non-zero length');

console.log('tests passed');
