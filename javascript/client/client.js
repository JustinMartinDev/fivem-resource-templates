import { myRandomData } from "./MyOther.client";

on("onResourceStart", (resName) => {
  if (resName === GetCurrentResourceName()) {
    console.log(myRandomData);
    console.log("TypeScript boilerplate started!");
  }
});
