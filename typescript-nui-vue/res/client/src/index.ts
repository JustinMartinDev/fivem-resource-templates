import { initNui } from "./nui";

initNui();

on("onResourceStart", (resName: string) => {
  if (resName === GetCurrentResourceName()) {
    console.log("Typescript/Nui/Vue client-side boilerplate started!");
  }
});
