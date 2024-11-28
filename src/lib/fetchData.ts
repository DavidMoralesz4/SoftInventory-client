import axios from "axios";

export const asyncDataCsv = async (formData: FormData) => {
  try {
    const response = await axios.post(
      "http://localhost:4001/api/brand/6747a0d7fcae916239798b0d/products/csv",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error al subir el archivo CSV:", error);
    throw new Error("Error al procesar el archivo CSV.");
  }
};

export const getDataProds = async () => {
  try {
    const reponse = await axios(
      "http://localhost:4001/api/brand/6747a0d7fcae916239798b0d/products"
    );
    return reponse;
  } catch (error) {
    console.error("Error Interno al mostrar productos", error);
    throw new Error("Error");
  }
};
