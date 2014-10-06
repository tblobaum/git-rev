'use strict';

var git = require('../')

console.log('[git.short()]', git.short());
// 75bf4ee

console.log('[git.long()]', git.long());
// 75bf4eea9aa1a7fd6505d0d0aa43105feafa92ef

console.log('[git.branch()]', git.branch());
// master

console.log('[git.tag()]', git.tag());
// 0.1.0

console.log('[git.log()]', git.log());
// [
//   [
//     '75bf4eea9aa1a7fd6505d0d0aa43105feafa92ef',
//     'update pjson to include sync exec',
//     '17 minutes ago',
//     'kurttheviking'
//   ],
//   [
//     '143120ac3ecc07aeae1462b372bb2033aa20c3ee',
//     'Merge pull request #6 from shtylman/patch-1',
//     '1 year, 2 months ago',
//     'Thomas Blobaum'
//   ],
//   ...
// ]
