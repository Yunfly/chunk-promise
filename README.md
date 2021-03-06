# chunk-promise [![Build Status](https://travis-ci.org/Yunfly/chunk-promise.svg?branch=master)](https://travis-ci.org/Yunfly/chunk-promise) [![Coverage Status](https://coveralls.io/repos/github/Yunfly/chunk-promise/badge.svg?branch=master)](https://coveralls.io/github/Yunfly/chunk-promise?branch=master) ![GitHub](https://img.shields.io/github/license/yunfly/chunk-promise) [![npm](https://img.shields.io/npm/v/@yunfly/chunk-promise)](https://www.npmjs.com/package/@yunfly/chunk-promise) ![npm](https://img.shields.io/npm/dw/@yunfly/chunk-promise) [![HitCount](http://hits.dwyl.com/qinfy/Yunfly/chunk-promise.svg)](http://hits.dwyl.com/qinfy/Yunfly/chunk-promise)

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
