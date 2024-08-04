import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import {
  mockTriggerNuiEvent,
  mockTriggerNuiEvents,
} from "./utils/mockTriggerNuiEvent";
import { isEnvBrowser } from "./utils/misc";

declare global {
  interface Window {
    invokeNative?: unknown;
    GetParentResourceName?: () => string;
    mockTriggerNuiEvents: typeof mockTriggerNuiEvents;
    mockTriggerNuiEvent: typeof mockTriggerNuiEvent;
  }
}

if (import.meta.env.MODE === "development" && isEnvBrowser()) {
  window.mockTriggerNuiEvent = mockTriggerNuiEvent;
  window.mockTriggerNuiEvents = mockTriggerNuiEvents;
}

createApp(App).mount("#app");
