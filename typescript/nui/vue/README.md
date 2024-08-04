<h1 align="center">FiveM TypeScript/Nui-Vue Resource Boilerplate</h1>

<div align="center">
This is a simple boilerplate for getting started with TypeScript game-scripts, with Nui as Vue app in FiveM.
</div>

<div align="center">
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/project-error/pe-utils/master/LICENSE)
</div>

This repository is a basic boilerplate for getting started
with TypeScript resources in FiveM. This boilerplate only comes with
development dependencies needed for FiveM-centered TypeScript transpilation, the rest
is up to you.

## Foreword

This boilerplate was originally based off a previous popular TypeScript boilerplate,
made by [d0p3t](https://github.com/d0p3t/fivem-ts-boilerplate). He heartbeakingly passed
in 2021, leaving the original unmaintained. This boilerplate was an up-to-date alternative.

Since then, this boilerplate has been updated to take advantage of tooling progress made
in the greater NPM ecosystem.

## Requirements

- Node > v16
- Pnpm

## Getting Started

First clone the repository or use the template option
and place it within your `resources` folder

**Install Dependencies**

Navigate into the newly cloned folder and execute
the following command, to install dependencies.

```sh
pnpm install
```

## Development

### Hot Building

While developing your resource, this boilerplate offers
a `watch` script that will automatically hot rebuild on any
change within the `client`, `server` or `web` directories.

```sh
pnpm watch
```

_This script still requires you restart the resource for the
changes to be reflected in-game_

### Entry Points

**Client** - `./client/src/client.ts`

**Server** - `./server/src/server.ts`

## Production Build

Once you have completed the development phase of your resource,
you must create an optimized & minimized production build, using
the `build` script.

```sh
pnpm build
```
