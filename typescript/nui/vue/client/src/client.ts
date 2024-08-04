on("onResourceStart", (resName: string) => {
  if (resName === GetCurrentResourceName()) {
    console.log("TypeScript/Nui/Vue cleint-side boilerplate started!");
  }
});
