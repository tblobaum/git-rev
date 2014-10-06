'use strict';

var sh = require('execSync');

function _command (cmd) {
  var result = sh.exec(cmd);

  if (result.code !== 0) {
    throw new Error('failed to execute git-rev-sync command', result);
  }

  return result.stdout;
}


module.exports = {
  short : function () {
    return _command('git rev-parse --short HEAD');
  },
  long : function () {
    return _command('git rev-parse HEAD');
  },
  branch : function () {
    return _command('git rev-parse --abbrev-ref HEAD');
  },
  tag : function () {
    return _command('git describe --always --tag --abbrev=0');
  },
  log : function () {
    var out = _command('git log --no-color --pretty=format:' +
      '\'[ "%H", "%s", "%cr", "%an" ],\' --abbrev-commit');

    out = out.substr(0, out.length-1);

    return JSON.parse('[' + out + ']');
  }
}
