# Contributing

The rules here are designed to be open and anyone is free to make their own hacks. You can get involved, propose changes or copy the rules on [Github](https://github.com/grislyeye/three-meet). See the [license](license.md) for more information.

Contributions should follow the high-level goals in the [design notes](design-notes.md).

You can [report issues](https://github.com/grislyeye/three-meet/issues/new) and get involved in design on our [Github page](https://github.com/grislyeye/three-meet).

Related projects include:

- [Three Meet character sheet](https://github.com/grislyeye/three-meet-char-sheet)
- [Docsify](https://docsify.js.org)

## Install

This project has the following requirements:

- [Node.js/NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Butler](https://itch.io/docs/butler/installing.html)

Execute:

```sh
$ git clone->
-> git@github.com:grislyeye/three-meet.git
$ cd three-meet
```

## Run

Execute:

```sh
$ npm install
$ npm start
```

## Deploy

Execute:

```sh
$ git tag vX.X.X
$ git push origin vX.X.X
$ npm run deploy
```

Deploy to itch.io:

```sh
$ npm run itch:deploy
```

**Note:** Three Meet uses [semantic versioning](https://semver.org/).

## Style Guide

### 1. Punctuation

1. Introduce bulleted or numbered lists with a full sentence.
2. Each list item begins with a capital letter.
3. Use closing punctuation if the lists contains full sentences.

### 2. Terminology

1. Key terms should be in bold and capitalised for emphasis, e.g. **Proficiency**.
2. Key terms should be linked, e.g. [Proficiency](pages/rules/proficiency).
3. Exceptions to linking include:
4. Where a term has been defined nearby in the text.
5. Avoid using too many key terms in a text block to prevent visual overload.

### 3. Numerals

1. Whole numbers from 0 to 101 should be spelled out.
2. Exceptions include:
3. Game traits with numerical values.

## Future Work

My main design goal with **Three Meet** is to keep things focussed and simple, while not losing the solid 5E core rules.

There are plans to expand **Three Meet**, but I hope these will be limited so as not overly complicate the system (see the [design notes](design-notes.md)). If you'd like to see the progress or find what we need help with, see the [task board](https://github.com/orgs/grislyeye/projects/1).
