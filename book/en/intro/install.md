# Installation

## Install

```shell
npm install --save route4me-node
```

## Usage

Simple use case - without additional options

```javascript

const Route4Me = require("route4me-node")	// module and constructor instance

const route4me = new Route4Me()
route4me.Optimizations.list( function callback(err, optimizations) {
	console.log(err)
	console.log(optimizations)
})
```
