var revision = require('../')

revision.short(function (str) {
  console.log('revision short', str)
})

revision.long(function (str) {
  console.log('revision long', str)
})

revision.branch(function (str) {
  console.log('revision branch', str)
})

revision.tag(function (str) {
  console.log('revision tag', str)
})
