var exec = require('child_process').exec

function _command (cmd, cb) {
  exec(cmd, function (err, stdout, stderr) {
    cb(stdout.slice(0, -1));
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
      _command('git log --no-color --pretty=format:\'%H  |  %cr  |  %an  |  %s\' --abbrev-commit', function (str) {
        var logs = [];
        (str.split('\n')).forEach(function(line, line_idx) {
            var parsed_line = line.split('  |  ');
            logs.push([
                parsed_line[0],
                parsed_line[3],
                parsed_line[1],
                parsed_line[2]
            ]);
        });
        cb(logs)
      })
    }
}
