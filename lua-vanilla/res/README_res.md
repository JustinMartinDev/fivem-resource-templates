<h1 align="center">
    <res>
</h1>

<div align="center">
    <description>
</div>

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

### Client commands

| cmd | args | description | usage |
| --- | ---- | ----------- | ----- |
|     |      |             |       |

### Server commands

| cmd | args | description | usage |
| --- | ---- | ----------- | ----- |
|     |      |             |       |
