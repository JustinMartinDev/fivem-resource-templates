<h1 align="center">
    <res>
</h1>

<div align="center">
    <description>
</div>

## Requirements

- Node > v16
- Yarn

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

## Production Build

Once you have completed the development phase of your resource,
you must create an optimized & minimized production build, using
the `build` script.

```sh
npm run build
```

### Automatic Builds (Optional)

_This is not recommended as the embedded version of yarn is
ocassionally prone to performance and environment problems. We
highly recomend, you manually run the build script_

If desired, the `fxmanifest.lua` can be setup to allow for
FXServer to automatically build on resource start. This utilizes
the embedded `yarn` & `webpack` default resources.

To enable this, add the following to your `fxmanifest.lua`

```lua
dependency {
    'yarn',
    'webpack'
}

webpack_config 'webpack.config.js'
```

## Client commands

| cmd | args | description | usage |
| --- | ---- | ----------- | ----- |
|     |      |             |       |

## Server commands

| cmd | args | description | usage |
| --- | ---- | ----------- | ----- |
|     |      |             |       |
