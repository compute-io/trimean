'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	trimean = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-trimean', function tests() {

	it( 'should export a function', function test() {
		expect( trimean ).to.be.a( 'function' );
	});

	it( 'should throw an error if provided a non-array', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			function(){},
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				trimean( value, {} );
			};
		}

	});

	it( 'should throw an error if provided options is not an object', function test() {
		var values = [
			'5',
			5,
			[],
			undefined,
			null,
			NaN,
			function(){},
			true
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				trimean( [], value );
			};
		}

	});

	it( 'should compute the trimean', function test() {
		var data, expected;

		// Quartile indices rounded up
		data = [ 5, 8, 9, 1, 7, 6, 2 ];
		expected = 5.5;

		// Unsorted test:
		assert.strictEqual( trimean( data ), expected );

		// Sort the data:
		data.sort( function sort( a, b ) {
			return a - b;
		});

		// Sorted test:
		assert.strictEqual( trimean( data, {'sorted': true} ), expected );

		// Quartile indices are integers
		//
		data = [ 1, 2, 5, 6, 7, 8, 8, 9 ];
		expected = 6.125;

		assert.strictEqual( trimean( data, {'sorted': true} ), expected );
	});

});
