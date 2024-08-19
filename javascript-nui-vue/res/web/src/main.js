import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import {
  mockTriggerNuiEvent,
  mockTriggerNuiEvents,
} from "./utils/mockTriggerNuiEvent";
import { isEnvBrowser } from "./utils/misc";

if (import.meta.env.MODE === "development" && isEnvBrowser()) {
  window.mockTriggerNuiEvent = mockTriggerNuiEvent;
  window.mockTriggerNuiEvents = mockTriggerNuiEvents;
}

if (window.mockTriggerNuiEvent) {
  window.mockTriggerNuiEvent({ action: "setVisible", data: false });
}

createApp(App).mount("#app");
