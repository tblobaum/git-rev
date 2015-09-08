'use strict';

var git = require('../')

console.log('git.short() => ' + git.short());
// 75bf4ee

console.log('git.long() => ' + git.long());
// 75bf4eea9aa1a7fd6505d0d0aa43105feafa92ef

console.log('git.branch() => ' + git.branch());
// master

console.log('git.tag() => ' + git.tag());
// master
