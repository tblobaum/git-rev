var exec = require('child_process').exec

function _command (cmd, cb) {
  exec(cmd, function (err, stdout, stderr) {
    cb(stdout.split('\n').join(''))
  })
}

module.exports = {
    short : function (cb) {
      _command('git rev-parse --short HEAD', cb)
    }
  , long : function (cb) {
      _command('git rev-parse HEAD', cb)
    }
  , branch : function (cb) {
      _command('git rev-parse --abbrev-ref HEAD', cb)
    }
  , tag : function (cb) {
      _command('git describe --always --tag --abbrev=0', cb)
    }
  , log : function (cb) {
      var separator = '<SEPARATOR>';
      var cmd = 'git log --no-color --pretty=format:\'[ "%H", "%s", "%cr", "%an" ],\' --abbrev-commit';
      cmd = cmd.replace(/"/g, separator);
      _command(cmd, function (str) {
        str = str.substr(0, str.length-1);
        str = str.replace(/"/g, '\\"');
        str = str.replace(new RegExp(separator,'g'), '"');
        cb(JSON.parse('[' + str + ']'))
      })
    }
}
