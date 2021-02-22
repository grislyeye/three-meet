# Contributing

The rules here are designed to be open and anyone is free to make their own hacks. You can get involved, propose changes or copy the rules on [Github](https://github.com/grislyeye/three-meet). See the [license](license.md) for more information.

This project has the following requirements:

  * [Node.js/NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
  * [Butler](https://itch.io/docs/butler/installing.html)

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

## Future Work

My main design goal with **Three Meet** is to keep things focussed and simple, while not losing the solid 5E core rules.

There are plans to expand **Three Meet**, but I hope these will be limited so as not overly complicate the system. If you'd like to see the progress or find what we need help with see the [task board](https://github.com/grislyeye/three-meet/projects/1).
