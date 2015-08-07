git-rev-sync
============

[![Build Status](https://travis-ci.org/kurttheviking/git-rev-sync.svg?branch=master)](https://travis-ci.org/kurttheviking/git-rev-sync.svg?branch=master)

Synchronously get the current git commit hash, tag, branch or commit message. Forked from [git-rev](https://github.com/tblobaum/git-rev).


## Example

```js
var git = require('git-rev-sync');

console.log(git.short());
// 75bf4ee

console.log(git.long());
// 75bf4eea9aa1a7fd6505d0d0aa43105feafa92ef

console.log(git.branch());
// master

console.log(git.message());
// initial commit

console.log(git.tag());
// not implemented

console.log(git.log());
// not implemented
```

You can also run these examples via: `npm run examples`


## Install

`npm install git-rev-sync --save`


## API

``` js
var git = require('git-rev-sync');
```

#### git.short() &rarr; &lt;String&gt;

return the result of `git rev-parse --short HEAD`

#### git.long() &rarr; &lt;String&gt;

return the result of `git rev-parse HEAD`

#### git.branch() &rarr; &lt;String&gt;

return the current branch

#### git.message() &rarr; &lt;String&gt;

return the current commit message; this method will fail if the `git` command is not found in your `PATH`


## License

[MIT](https://github.com/kurttheviking/git-rev-sync/blob/master/LICENSE)
