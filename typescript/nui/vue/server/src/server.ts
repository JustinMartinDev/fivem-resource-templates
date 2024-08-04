on("onResourceStart", (resName: string) => {
  if (resName === GetCurrentResourceName()) {
    console.log("TypeScript/Nui/Vue server-side boilerplate started!");
  }
});
