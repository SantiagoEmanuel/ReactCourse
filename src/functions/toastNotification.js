import { toast } from "react-toastify";

export function toastSuccessNotification(message) {
  toast.success(message);
}

export function toastErrorNotification(message) {
  toast.error(message);
}
