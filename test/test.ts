import { describe } from 'mocha';
import { chunkPromise } from '../lib';
const assert = require('assert');

describe('Test params', function () {
  it('chunke return [] when pramas is []', function () {
    chunkPromise([], 2)
      .then(results => {
        assert(JSON.stringify([]) === JSON.stringify(results));
      });
  });

  it('it use default size 10 as default', function () {
    chunkPromise([])
      .then(results => {
        assert(JSON.stringify([]) === JSON.stringify(results));
      });
  });
});

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