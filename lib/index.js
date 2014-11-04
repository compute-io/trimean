/**
*
*	COMPUTE: trimean
*
*
*	DESCRIPTION:
*		- Computes the trimean of a numeric array.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Rebekah Smith.
*
*
*	AUTHOR:
*		Rebekah Smith. rebekahjs17@gmail.com. 2014.
*
*/

'use strict';

// MODULES //

var isObject = require( 'validate.io-object' ),
	median = require( 'compute-median' ),
	quantile = require( 'compute-quantile' );


// FUNCTIONS //

/**
* FUNCTION: ascending( a, b )
*	Function used to sort values in ascending order.
*
* @private
* @param {Number} a
* @param {Number} b
* @returns {Number} difference between `a` and `b`
*/
function ascending( a, b ) {
	return a - b;
} // end FUNCTION ascending()


// TRIMEAN //

/**
* FUNCTION: trimean( arr[, opts] )
*	Computes the trimean of a numeric array.
*
* @param {Array} arr - numeric array
* @param {Object} [opts] - quantile function options
* @returns {Number} trimean
*/
function trimean( arr, opts ) {
	if ( !Array.isArray( arr ) ) {
		throw new TypeError( 'trimean()::invalid input argument. Must provide an array.' );
	}
	if ( arguments.length > 1 ) {
		if ( !isObject( opts ) ) {
			throw new TypeError( 'trimean()::invalid input argument. Options should be an object.' );
		}
	} else {
		opts = {
			'sorted': false
		};
	}
	if ( !opts.sorted ) {
		arr = arr.slice();
		arr.sort( ascending );
		opts.sorted = true;
	}
	var q1 = quantile( arr, 0.25, opts ),
		q2 = median( arr, true ),
		q3 = quantile( arr, 0.75, opts );

	return ( q1 + 2*q2 + q3 ) / 4.0;
} // end FUNCTION trimean()


// EXPORTS //
module.exports = trimean;
