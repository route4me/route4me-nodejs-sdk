# Maintainer guideline

## Dev tools

We use [GULP](http://gulpjs.com/) as an task-automation tool. All gulp-tasks are described below.

### task: default

By default `gulp` will `lint` and `test` the sources.

### task:lint

Provides linting for `*.js` sources

```shell
gulp lint
```

One useful feature: **autofix style-issues**. You could significantly reduce the amount
of the manual fixes with this command:

```shell
gulp lint --fix
```

### task:test

Run `mocha` tests

```shell
gulp test

# or with grep:
gulp test --grep=integration

# run all tests (including examples and integration)
# for Geocoding functionality:
export TEST_INTEGRATION=1
gulp test --grep geocoding
```

#### Options

By default the hardest and most time-expensive tests (**integration**) are skipped. To run all tests use **environment** variable: `TEST_INTEGRATION`:

```shell
TEST_INTEGRATION=1 gulp test
```

### task:doc

Task generates documentation for this package (to the `./docs` folder)

```shell
gulp doc
```

## Useful links

* Documentation for [`superagent` module](http://visionmedia.github.io/superagent)
* JsonSchema validation tool: [by NewtonSoft](http://www.jsonschemavalidator.net/)
