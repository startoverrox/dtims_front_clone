import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface Toast {
  message: string;
  type: "success" | "error" | "warning" | "info";
}

interface ToastStore {
  toast: Toast | null;
  setToast: (toast: Toast) => void;
  clearToast: () => void;
}

const useToastStore = create<ToastStore>()(
  devtools(
    (set) => ({
      toast: null,
      setToast: (toast: Toast) => {
        set({ toast });
      },
      clearToast: () => {
        set({ toast: null });
      },
    }),
    { name: "toastStore" },
  ),
);

export default useToastStore;
