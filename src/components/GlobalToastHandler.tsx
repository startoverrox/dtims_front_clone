import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";
import { toast as systemToast } from "react-toastify";
import useToastStore from "@/stores/toastStore";

const GlobalToastHandler = () => {
  const { toast, clearToast } = useToastStore(
    useShallow((state) => ({
      toast: state.toast,
      clearToast: state.clearToast,
    })),
  );

  useEffect(() => {
    if (toast) {
      systemToast[toast.type](toast.message, {
        position: "bottom-right",
        autoClose: 1000,
      });
      clearToast();
    }
  }, [toast, clearToast]);

  return null;
};

export default GlobalToastHandler;
