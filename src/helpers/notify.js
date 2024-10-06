import { toast } from "react-toastify";
import translations from "../components/Translations/translations";

const notify1 = (language) => {
  toast.success(translations[language].copied_success, {
    position: "bottom-left",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    // transition: Bounce,
  });
};

const notify2 = (language) => {
  toast.info(translations[language].deleted_success, {
    position: "bottom-left",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    // transition: Bounce,
  });
};

export { notify1, notify2 };
