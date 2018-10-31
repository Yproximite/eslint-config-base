# eslint-config-base
ESLint base configuration for our projects.

## Features

- Configure ESLint to [parse](https://eslint.org/docs/user-guide/configuring#specifying-parser-options) JavaScript code as ES6 code. 

## Installation

```bash
$ yarn add --dev @yproximite/eslint-config-base
```

Dont forget to install ESLint too:

```bash
$ yarn add --dev eslint
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

```bash
$ git checkout master
$ yarn release # increase package.json version, update CHANGELOG.md, create a new git tag, create a new git commit
$ yarn publish && git push --follow-tags
```
