git-rev-sync
============

Synchronously get the current git commit hash, tag, or branch. Forked from [git-rev](https://github.com/tblobaum/git-rev).


## Example

```js
var git = require('git-rev-sync');

console.log(git.short());
// 75bf4ee

console.log(git.long());
// 75bf4eea9aa1a7fd6505d0d0aa43105feafa92ef

console.log(git.branch());
// master

console.log(git.tag());
// 0.1.0

console.log(git.log());
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

```

You can also run these examples via: `npm run examples`


## Install

`npm install git-rev-sync --save`


## Methods

``` js
var git = require('git-rev-sync');
```

### .log() => &lt;Array: &lt;Tuple&gt;&gt;

return the git log of `process.cwd()` as an array; each array contains the long commit hash, commit message, fuzzy commit time, and user


### .short() => &lt;String&gt;

return the result of `git rev-parse --short HEAD`

### .long() => &lt;String&gt;
return the result of `git rev-parse HEAD`


### .tag() => &lt;String&gt;
return the current tag


### .branch() => &lt;String&gt;
return the current branch


## Warning

Not tested outside of a *nix system. See the [execSync module notes](https://github.com/mgutz/execSync#notes) on this topic.


## License

[MIT](https://github.com/kurttheviking/git-rev-sync/blob/master/LICENSE)
