# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @bulabd/lotide`

**Require it:**

`const _ = require('@bulabd/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns the head of an array
* `tail(array)`: returns the tail of an array
* `middle(array))`: returns the body of an array
* `assertArraysEqual(actual, expected)`: asserts if actual array is equal to expected
* `assertEqual(actual, expected)`: asserts if actual value is equal to expected value
* `assertObjectsequal(actual, expected)`: asserts if actual object is equal to expected object
* `countLetters(str)`: returns the amount of letters in a string
* `countOnly()`: description
* `eqArrays(array1, array2)`: returns true if actual array is equal to expected array and false if not
* `eqObjects(object1, object2)`: returns true if actual object is equal to expected object and false if not
* `findKey(obj, callback)`: returns the first key that matches the callback requirements
* `findKeyByValue(obj, value)`: returns the key whose value matches the value argument
* `flatten(array)`: returns an array with all the internal arrays flatten out
* `letterPositions(str)`: returns an object of all the letters in the string and their positions as an array
* `map(array, callback)`: returns the array but with the callback applied on it
* `takeUntil(array, callback)`: returns the array up until the callback condition is met
* `without(array, erase)`: returns array with the erase argument deleted from it