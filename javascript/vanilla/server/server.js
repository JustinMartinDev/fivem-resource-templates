import { myRandomData } from "./MyOther.server";

on("onResourceStart", (resName) => {
  if (resName === GetCurrentResourceName()) {
    console.log("TypeScript boilerplate started!");
    console.log(myRandomData);
  }
});
