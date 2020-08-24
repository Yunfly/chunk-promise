# chunk-promise [![Build Status](https://travis-ci.org/Yunfly/chunk-promise.svg?branch=master)](https://travis-ci.org/Yunfly/chunk-promise) [![Coverage Status](https://coveralls.io/repos/github/Yunfly/chunk-promise/badge.svg)](https://coveralls.io/github/Yunfly/chunk-promise)
这个模块将Promise分成多个块，并依次执行它

This module breaks the Promise into chunks and executes it in turn

# Install
```shell
  npm i @yunfly/chunk-promise
```

## USE 
```javascript
  import { chunkPromise } from '../lib/index';

  var promises = [
      () => Promise.resolve('a'),
      () => Promise.resolve('b'),
      () => Promise.resolve('c'),
      () => Promise.resolve('d'),
      () => Promise.resolve('e'),
      () => Promise.resolve('f'),
      () => Promise.resolve('g'),
    ]

    chunkPromise(promises, 2)
      .then(results => {
        // ["a", "b", "c", "d", "e", "f", "g"]
        // do something
      });
```