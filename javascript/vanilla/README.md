<h1 align="center">FiveM Javascript Resource Boilerplate</h1>

<div align="center">
This is a simple boilerplate for getting started with Javascript game-scripts, in FiveM.
</div>

<div align="center">

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/project-error/pe-utils/master/LICENSE)

</div>

This repository is a basic boilerplate for getting started
with Javascript resources in FiveM.

## Foreword

This boilerplate is based off [TypeScript boilerplate](https://github.com/JustinMartinDev/fivem-resource-templates/blob/typescript) himself based off this [boilerplate](https://depfu.com/github/project-error/fivem-typescript-boilerplate)

## Requirements

- Node > v16

## Getting Started

First clone the repository or use the template option
and place it within your `resources` folder

**Install Dependencies**

Navigate into the newly cloned folder and execute
the following command, to install dependencies.

```sh
npm i
```

## Development

### Hot Building

While developing your resource, this boilerplate offers
a `watch` script that will automatically hot rebuild on any
change within the `client` or `server` directories.

```sh
npm run watch
```

_This script still requires you restart the resource for the
changes to be reflected in-game_

### Entry Points

**Client** - `./client/client.js`

**Server** - `./server/server.js`

### Additional Notes

This template is used in `create-fivem-resource` <---- lien du npm publique ----> CLI

<---- GIF de l'utilisation ----->
