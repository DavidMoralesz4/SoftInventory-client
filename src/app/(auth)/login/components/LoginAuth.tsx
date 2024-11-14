import axios from "axios";
import Toastify from 'toastify-js'


export const authLoginSesion = async (credentials: {email: string; password: string}) => {
  try {
    const response = await axios.post(
      `http://localhost:4001/auth/login`,
      credentials
    );
    Toastify({
        text: response.data.message,
        gravity: "bottom",
        close: true,
        className: "text-[20px] text-black",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
    return response.data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    const errorMessage = error.response?.data?.error
    Toastify({
      text: errorMessage,
      gravity: "bottom",
      close: true,
      className: "text-[20px] text-black",
      style: {
        background: "linear-gradient(to right, #ff5f6d, #ffc371)", // Diferente color para errores
      },
    }).showToast();

  }
};

