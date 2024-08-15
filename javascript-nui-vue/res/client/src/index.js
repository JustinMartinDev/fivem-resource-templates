import { initNui, toggleNuiFrame } from "./nui";

initNui();

on("onResourceStart", (resName) => {
  if (resName === GetCurrentResourceName()) {
    console.log("Javascript/Nui/Vue client-side boilerplate started!");
  }
});

on("onClientGameTypeStart", () => {
  toggleNuiFrame(false);
});
