const { execSync } = require("child_process");
const esbuild = require("esbuild");
const { existsSync } = require("fs");

const IS_WATCH_MODE = process.env.IS_WATCH_MODE;

console.log("[ESBuild] Building project...");

const TARGET_ENTRIES = [];

if (existsSync("server/server.ts")) {
  TARGET_ENTRIES.push({
    name: "server",
    esbuild: {
      target: "node16",
      entryPoints: ["server/server.ts"],
      platform: "node",
      outfile: "./dist/server/server.js",
    },
  });
}

if (existsSync("client/client.ts")) {
  TARGET_ENTRIES.push({
    name: "client",
    esbuild: {
      target: "es2020",
      entryPoints: ["client/client.ts"],
      outfile: "./dist/client/client.js",
    },
  });
}

if (existsSync("web/package.json")) {
  execSync("cd web && npm run build");
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
      } else {
        await context.rebuild();
        console.log(`[ESBuild] Done building ${targetOpts.name}\n`);
      }
    }
  } catch (e) {
    console.log("[ESBuild] Build failed with error");
    console.error(e);
    process.exit(1);
  }
};

buildBundle()
  .catch(() => process.exit(1))
  .then(() => process.exit(0));
