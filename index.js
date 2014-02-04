var exec = require('child_process').exec
  , async = require('async')
  , delimiter = '|##|^'
  , eol = '*||*}';

function _command (cmd, cb) {
  exec(cmd, { cwd: __dirname }, function (err, stdout, stderr) {
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
      _command('git log --no-color --pretty=format:"%H'+delimiter+'%s'+delimiter+'%cr'+delimiter+'%an'+eol+'" --abbrev-commit', function (str) {
        str = str.substr(0, str.length-1)
        async.mapSeries(str.split(eol), function(line, next) {
          next(null, line.split(delimiter));
        }, function(err, log) {
          cb(log);
        });
      })
    }
}
