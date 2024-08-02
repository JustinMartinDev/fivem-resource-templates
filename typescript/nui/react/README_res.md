<h1 align="center">
    <res>
</h1>

<div align="center">
    <description>
</div>

## Requirements

- Node > v16
- Yarn

## Development

### Hot Building

While developing your resource, this boilerplate offers
a `watch` script that will automatically hot rebuild on any
change within the `client` or `server` directories.

```sh
yarn watch
```

_This script still requires you restart the resource for the
changes to be reflected in-game_

### Entry Points

**Client** - `./client/client.ts`

**Server** - `./server/server.ts`

### Nui

Nui is available through a react application you can find in `web` folder.
The file `client/nui.ts` contain `RegisterNUICallback` method, which work like the lua implementation to avoid complexity.

## Production Build

Once you have completed the development phase of your resource,
you must create an optimized & minimized production build, using
the `build` script.

```sh
yarn build
```

## Client commands

| cmd       | args | description                                 | usage      |
| --------- | ---- | ------------------------------------------- | ---------- |
| show-nui  | N/A  | display the Nui window in client game       | `show-nui` |

## Server commands

| cmd | args | description | usage |
| --- | ---- | ----------- | ----- |
|     |      |             |       |
