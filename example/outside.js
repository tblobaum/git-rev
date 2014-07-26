
var git = require('./index');
var cwd = process.env.ORIGINAL;
console.log('dir', __dirname);
console.log('original', cwd);
git.cwd(cwd);
git.short(function (str) {
  console.log('short', str)

})

