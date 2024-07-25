<h1 align="center">FiveM Lua Resource Boilerplate</h1>

<div align="center">
This is a simple boilerplate for getting started with Lua game-scripts in FiveM.
</div>

<div align="center">

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/project-error/pe-utils/master/LICENSE)

</div>

This repository is a basic boilerplate for getting started
with Lua resources in FiveM.

This version of the boilerplate is meant for the CfxLua runtime.

## Getting Started

First clone the repository or use the template option and place
it within your `resources` folder

## Features

This boilerplate comes with some utilities and examples to work off of.

### Lua Utils

**debugPrint**

A debug printing utility that is dependent on a convar,
if the convar is set this will print out to the console.

The convar is dependent on the name given to the resource.
It follows this format `YOUR_RESOURCE_NAME-debugMode`

To turn on debugMode add `setr YOUR_RESOURCE_NAME-debugMode 1` to
your server.cfg or use the `setr` console command instead.

Signature (Replicates `print`)

```lua
---@param ... any[] The arguments you wish to send
debugPrint(...)
```

Usage

```lua
debugPrint('wow cool string to print', true, someOtherVar)
```

### Additional Notes

This template is used in `create-fivem-resource` <---- lien du npm publique ----> CLI

<---- GIF de l'utilisation ----->
