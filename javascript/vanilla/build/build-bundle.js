const esbuild = require("esbuild");
const { existsSync } = require("fs");

const IS_WATCH_MODE = process.env.IS_WATCH_MODE;

const TARGET_ENTRIES = [];

if (existsSync("server/server.js")) {
  TARGET_ENTRIES.push({
    name: "server",
    esbuild: {
      target: "node16",
      entryPoints: ["server/server.js"],
      platform: "node",
      outfile: "./dist/server/server.js",
    },
  });
}

if (existsSync("client/client.js")) {
  TARGET_ENTRIES.push({
    name: "client",
    esbuild: {
      target: "es2020",
      entryPoints: ["client/client.js"],
      outfile: "./dist/client/client.js",
    },
  });
}

const buildBundle = async () => {
  try {
    const baseOptions = {
      logLevel: "info",
      bundle: true,
      charset: "utf8",
      minifyWhitespace: true,
      absWorkingDir: process.cwd(),
    };

    for (const targetOpts of TARGET_ENTRIES) {
      const mergedOpts = { ...baseOptions, ...targetOpts.esbuild };

      const context = await esbuild.context(mergedOpts);

      if (IS_WATCH_MODE) {
        console.log(
          `[ESBuild Watch] (${targetOpts.name}) Watching for changes...`
        );
        await context.watch();
      }
    }
  } catch (e) {
    console.log("[ESBuild] Build failed with error");
    console.error(e);
    process.exit(1);
  }
};

buildBundle().catch(() => process.exit(1));
