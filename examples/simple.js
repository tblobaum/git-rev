'use strict';

var git = require('../')

console.log('git.short() => ' + git.short());
// e.g. 75bf4ee

console.log('git.long() => ' + git.long());
// e.g. 75bf4eea9aa1a7fd6505d0d0aa43105feafa92ef

console.log('git.branch() => ' + git.branch());
// e.g. master

console.log('git.tag() => ' + git.tag());
// e.g. v1.4.0
