# Installation

## Install

```shell
npm install --save route4me-node
```

## Usage

Simple use case - without additional options

```javascript

const Route4Me = require("route4me-node")	// module and constructor instance

const apiKey = '11111111111111111111111111111111'
const route4me = new Route4Me(apiKey)
route4me.Optimizations.list( function callback(err, optimizations) {
	console.log(err)
	console.log(optimizations)
})
```

### Promisified version

It is very convenient to use **Promises** (read more on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or on [A+ Promises](https://www.promisejs.org/)).

You could enable promises for `Route4Me` library, passing an appropriate option.

#### Case 1: global Promise

Enable promises, using global `Promise` object (will fail, if global `Promise` is not defined)

```javascript

const Route4Me = require("route4me-node")	// module and constructor instance

const apiKey = '11111111111111111111111111111111'

// create promisified version
const route4me = new Route4Me(apiKey, {
	promise: true
})

route4me.Optimizations.list()
	.then((optimizations) => {
		console.log(err)
		console.log(optimizations)
	})

```

#### Case 2: Custom promises library

You could use your favourite `Promises`-library, instead of global `Promise`, just pass a link to constructor

In the example the [BlueBird](https://www.npmjs.com/package/bluebird) package will be used (should be installed separately)

```javascript

const bluebird = require("bluebird")	    // Promises library
const Route4Me = require("route4me-node")	// module and constructor instance

const apiKey = '11111111111111111111111111111111'

// create promisified version
const route4me = new Route4Me(apiKey, {
	promise: bluebird
})

route4me.Optimizations.list()
	.then((optimizations) => {
		console.log(err)
		console.log(optimizations)
	})
```
