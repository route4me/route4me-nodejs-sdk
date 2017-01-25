# Maintainer guideline

## Dev tools

We use [GULP](http://gulpjs.com/) as an task-automation tool. It has several useful
development task, described below.

### lint

Provides linting for `*.js` sources

```shell
gulp lint
```

One useful feature: **autofix style-issues**. You could significantly reduce the amount
of the manual fixes with this command:

```shell
gulp lint --fix
```

### test

Run `mocha` tests

```shell
gulp test

#or with grep:
gulp test --grep=integration
```

## Useful links

* Documentation for [`superagent` module](http://visionmedia.github.io/superagent)
* JsonSchema validation tool: [by NewtonSoft](http://www.jsonschemavalidator.net/)
