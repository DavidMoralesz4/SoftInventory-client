"use client"
import ButtonIU from "@/components/buttonIU/ButtonIU";
import React from "react";
import Toastify from "toastify-js";

function ShoppApp() {
  const showAlert = () => {
    Toastify({
      text:  "Login successful",
      duration: 3000, // Duración de la notificación
      close: true,
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
        fontSize: "16px", // Ajusta el tamaño de fuente
        color: "white", // Asegura que el texto sea visible
        textAlign: "center", // Centra el texto
        padding: "12px", // Añade un poco de espacio para mejorar la visibilidad
        width: "100px",
        
      },
       // Callback after click
    }).showToast();
  };
  return (
    <div>
      <ButtonIU onClick={showAlert}>send</ButtonIU>

      <h1 className="text-black text-3xl">Tu tienda</h1>
    </div>
  );
}

export default ShoppApp;
