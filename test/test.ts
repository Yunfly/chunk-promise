import { describe } from 'mocha';
const assert = require('assert');
import { chunkPromise } from '../lib/index';

describe('Test chunked promise execution:', function () {
  it('all 4 chunks must execute', function () {
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
        assert(JSON.stringify(["a", "b", "c", "d", "e", "f", "g"]) === JSON.stringify(results));
      });
  });
});