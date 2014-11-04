Trimean
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Compute module to find the [trimean](http://en.wikipedia.org/wiki/Trimean) for an array of numeric values.

The trimean (or Tukey's trimean) is defined as the weighted average of a distribution's median and its two quartiles. The statistic measures a probability distribution's location and is a statistically resistant L-estimator, having a breakdown point of 25%. The statistic combines the robustness of the median, while accounting for a distribution's shape.


## Installation

``` bash
$ npm install compute-trimean
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var trimean = require( 'compute-trimean' );
```

#### trimean( arr[, opts] )

Computes the trimean of a numeric `array`.

``` javascript
var unsorted = [ 5, 8, 9, 1, 7, 6, 2 ];

var tri = trimean( unsorted );
// returns 5.5
```

If the input `array` is already `sorted` in __ascending__ order, set the `sorted` options flag to `true`.

``` javascript
var sorted = [ 1, 2, 5, 6, 7, 8, 9 ];

var tri = trimean( sorted, {'sorted': true} );
// returns 5.5
```

Additional options are the same as for the [quantile](https://github.com/compute-io/quantile) module and apply __only__ when computing the first and third quartiles.


## Examples

``` javascript
var data = new Array( 100 );

for ( var i = 0; i < data.length; i++ ) {
    data[ i ] = Math.round( Math.random()*100 );
}

console.log( trimean( data ) );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Rebekah Smith.


[npm-image]: http://img.shields.io/npm/v/compute-trimean.svg
[npm-url]: https://npmjs.org/package/compute-trimean

[travis-image]: http://img.shields.io/travis/compute-io/trimean/master.svg
[travis-url]: https://travis-ci.org/compute-io/trimean

[coveralls-image]: https://img.shields.io/coveralls/compute-io/trimean/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/trimean?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/trimean.svg
[dependencies-url]: https://david-dm.org/compute-io/trimean

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/trimean.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/trimean

[github-issues-image]: http://img.shields.io/github/issues/compute-io/trimean.svg
[github-issues-url]: https://github.com/compute-io/trimean/issues
