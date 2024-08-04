import { ref, onMounted, onUnmounted, watch, Ref } from "vue";
import { noop } from "../utils/misc";

interface NuiMessageData<T = unknown> {
  action: string;
  data: T;
}

type NuiHandlerSignature<T> = (data: T) => void;

export function useNuiEvent<T = unknown>(
  action: string,
  handler: (data: T) => void
) {
  const savedHandler: Ref<NuiHandlerSignature<T>> = ref(noop);

  // Make sure we handle for a reactive handler
  watch(
    () => handler,
    (newHandler) => {
      savedHandler.value = newHandler;
    }
  );

  onMounted(() => {
    const eventListener = (event: MessageEvent<NuiMessageData<T>>) => {
      const { action: eventAction, data } = event.data;

      if (savedHandler.value) {
        if (eventAction === action) {
          savedHandler.value(data);
        }
      }
    };

    window.addEventListener("message", eventListener);

    onUnmounted(() => {
      window.removeEventListener("message", eventListener);
    });
  });
}
