# eslint-config-base


[![npm (scoped)](https://img.shields.io/npm/v/@yproximite/eslint-config-base.svg)](https://www.npmjs.com/package/@yproximite/eslint-config-base)
[![Build Status](https://travis-ci.com/Yproximite/eslint-config-base.svg?token=pNBs2oaRpfxdyhqWf28h&branch=master)](https://travis-ci.com/Yproximite/eslint-config-base)

> ESLint base configuration for our projects.

## Features

- Configure ESLint environments to `browser` and `es6`
- Configure ESLint to [parse](https://eslint.org/docs/user-guide/configuring#specifying-parser-options) JavaScript code as ES6 code

## Installation

```bash
$ yarn add --dev @yproximite/eslint-config-base eslint^5.8.0 babel-eslint@^10.0.0
```

## Usage

Edit your ESLint configuration file with:

```json
{
  "extends": ["@yproximite/base"]
}
```

## Development workflow

You need to install some dependencies first:
```bash
$ yarn
```

### Contribution

- Make a pull request, its title should follows [Angular commit message convention](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit-message-format)
- You should **Squash and Merge** your pull request

### Publishing a new release

This is automatically done by Travis and [semantic-release](https://github.com/semantic-release/semantic-release) when you merge a pull request.
