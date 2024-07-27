const { existsSync } = require("fs");
const { execSync } = require("child_process");

const CLIENT_TS_CONFIG = "client/tsconfig.json";
const SERVER_TS_CONFIG = "server/tsconfig.json";

if (existsSync(CLIENT_TS_CONFIG)) {
  console.log("\nChecking client TypeScript files...");
  try {
    const result = execSync(`tsc --noEmit -p ${CLIENT_TS_CONFIG}`);
    console.log("[client] Done with success", result.toString());
  } catch (error) {
    console.error("[client] error", Buffer.from(error.output[1]).toString());
  }
}

if (existsSync(SERVER_TS_CONFIG)) {
  console.log("\nChecking server TypeScript files...");

  try {
    const result = execSync(`tsc --noEmit -p ${SERVER_TS_CONFIG}`);
    console.log("[server] Done with success", result.toString());
  } catch (error) {
    console.error("[server] error", Buffer.from(error.output[1]).toString());
  }
}
