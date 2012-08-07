var exec = require('child_process').exec

function _command (cmd, cb) {
  exec(cmd, function (err, stdout, stderr) {
    cb(stdout.split('\n')[0])
  })
}

function short (cb) { 
  _command('git rev-parse --short HEAD', cb)
}

function long (cb) { 
  _command('git rev-parse HEAD', cb)
}

function branch (cb) { 
  _command('git rev-parse --abbrev-ref HEAD', cb)
}

function tag (cb) { 
  _command('git describe --always --tag', cb)
}

module.exports = { short : short, long : long, branch : branch, tag : tag }
