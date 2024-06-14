---
index: 602
permalink: false
tags: pages
---
### Contributing

Guide

The rules here are designed to be open and anyone is free to make their own hacks. You can get involved, propose changes or copy the rules on [Github](https://github.com/grislyeye/three-meet). See the [license](./license.md) for more information.

Contributions should follow the high-level goals in the [design notes](./design-notes.md).

You can [report issues](https://github.com/grislyeye/three-meet/issues/new) and get involved in design on our [Github page](https://github.com/grislyeye/three-meet).

Related projects include:

- [Three Meet character sheet](https://github.com/grislyeye/three-meet-char-sheet)
- [Docsify](https://docsify.js.org)

#### Install

Instructions

This project has the following requirements:

- [Node.js/NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Butler](https://itch.io/docs/butler/installing.html)

Execute:

```sh
$ git clone git@github.com:grislyeye/three-meet.git
$ cd three-meet
```

#### Run

Instructions

Execute:

```sh
$ npm install
$ npm start
```

#### Deploy

Instructions

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

#### Style Guide

Guide

##### 1. Punctuation

1. Introduce bulleted or numbered lists with a full sentence.
2. Each list item begins with a capital letter.
3. Use closing punctuation if the lists contains full sentences.

##### 2. Terminology

  1. Key terms should be in bold and capitalised for emphasis, e.g. **Proficiency**.
  2. Key terms should be linked, e.g. [Proficiency](./pages/rules/proficiency.md).
  3. Exceptions to linking include:
     1. Where a term has been defined nearby in the text.
  4. Avoid using too many key terms in a text block to prevent visual overload.
  5. Dice rolls should be in bold, including modifiers.

##### 3. Numerals

  1. Whole numbers from 0 to 101 should be spelled out.
  2. Exceptions include:
  3. Game traits with numerical values.

##### 4. Person

  1. Rules should be addressed to the reader, in the first person. For example, "you roll for" rather than "the player rolls".

##### 5. Space

  1. Where reasonable, attempts should be made to keep pages short enough that the text doesn't scroll on a typical desktop view.
     1. Exclusions to this include:
        1. Directories of items, such as lists of skill descriptions.
        2. Large amounts of reference material that would be important to a player, such as a class or background.

##### 6. Spelling

  1. British English spelling should be used.

#### Rules Guide

##### Features

  1. Good features can:
     1. Make an exception to the rules.
     2. Take a feature from another [Background](./pages/backgrounds/index.md) or [Class](./pages/classes/index.md).
  2. Features should **not**:
     1. Give situational [Advantage](./pages/rules/advantage.md) or [Disadvantage](./pages/rules/advantage.md) (they are both situational anyway).
  3. Good [Class](./pages/backgrounds/index.md) features can:
     1. Have combat utility.
  4. Good [Class](./pages/backgrounds/index.md) features should **not**:
     1. Have non-combat utility.
     2. Give permission to do something already covered by a [Skill](./pages/characters/skills.md).
  5. Good [Background](./pages/backgrounds/index.md) features can:
     1. Allow you to substitute one proficiency for another (effectively doubling the proficiency's utility).
     2. Give metagame information not normally available to the player (opponent's [Stamina](../../rules/combat/stamina.md), etc.).
     3. Award [Resources](./pages/rules/usage.md), such as [Retainers](./pages/equipment/retainers.md) or [Treasure](./pages/equipment/wealth.md).
     4. Give a [Proficiency](./pages/rules/proficiency.md).
  6. [Background](./pages/backgrounds/index.md) features should **not**:
     1. Have combat utility.
     2. Replicate the [Cunning Expertise](./pages/classes/cunning.md#expertise) class feature.
     3. Award negative or positive modifiers to [Checks](./pages/rules/rolling/checks.md), [Saves](./pages/rules/rolling/checks.md) and [Attacks](./pages/combat/attacks.md).
     4. Give too many [Proficiencies](./pages/rules/proficiency.md) (usually more than 1).
     5. Duplicate a **Skill**.

#### Future Work

Guide

My main design goal with **Three Meet** is to keep things focussed and simple, while not losing the solid 5E core rules.

There are plans to expand **Three Meet**, but I hope these will be limited so as not overly complicate the system (see the [design notes](./design-notes.md)). If you'd like to see the progress or find what we need help with, see the [task board](https://github.com/orgs/grislyeye/projects/1).
