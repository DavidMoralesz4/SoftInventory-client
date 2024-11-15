import axios from "axios";
import Toastify from "toastify-js";

export const authLoginSesion = async (credentials: {
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post(
      `http://localhost:4001/auth/login`,
      credentials
    );
    Toastify({
      text: response.data.message,
      gravity: "top", // `top` or `bottom`
      position: "left",
      // close: true,
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",

        fontSize: "16px", // Ajusta el tamaño de fuente
        color: "white", // Asegura que el texto sea visible
        textAlign: "center", // Centra el texto
        padding: "12px", // Añade un poco de espacio para mejorar la visibilidad
        position: "fixed",
        width: "202px",
      },
    }).showToast();
    return response.data.messa
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    const errorMessage = error.response?.data?.error;
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
