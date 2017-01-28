# Maintainer guideline

## Dev tools

We use [GULP](http://gulpjs.com/) as an task-automation tool. And there are several useful
development gulp-tasks, described below.

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

#or with grep:
gulp test --grep=integration
```

### task:doc

Task generates documentation for this package (to the `./docs` folder)

```shell
gulp doc
```

## Useful links

* Documentation for [`superagent` module](http://visionmedia.github.io/superagent)
* JsonSchema validation tool: [by NewtonSoft](http://www.jsonschemavalidator.net/)
