# eslint-config-base


![Node CI](https://github.com/Yproximite/eslint-config-base/workflows/Node%20CI/badge.svg)

> ESLint base configuration for our projects.

## Features

- Configure ESLint environments to `browser` and `es6`
- Configure ESLint to [parse](https://eslint.org/docs/user-guide/configuring#specifying-parser-options) JavaScript code as ES6 code
- Configure indentation to 2 spaces

## Installation

This package is hosted on [GitHub Packages](https://github.com/features/packages), so you must tell to npm/yarn where to download it.
Please read [Authenticating to GitHub Packages](https://help.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages#authenticating-to-github-packages).

You can run `npm login --registry=https://npm.pkg.github.com --scope=@yproximite` **or** create a `.npmrc` file with the following content:
```
@yproximite:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=<access token>
```

Then run: 
```bash
$ yarn add --dev @yproximite/eslint-config-base eslint^6.0.0 babel-eslint@^10.0.0
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

This is automatically done by GitHub Actions and [semantic-release](https://github.com/semantic-release/semantic-release) when you merge a pull request.
