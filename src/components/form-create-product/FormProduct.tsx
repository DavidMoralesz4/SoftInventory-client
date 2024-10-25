"use client";

import { createProducMutation } from "@/interfaces/DataType";
// import { IProducts } from "@/interfaces/IProducts";
import { HandleCancel } from "@/interfaces/typesModal";
// import axios from "axios";
import React, { useState } from "react";
import { useMutation } from "react-query";

export default function FormProduct({ onClose, openModal }: HandleCancel) {
  const mutation = useMutation(createProducMutation);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    talla: "",
    stock: "",
    image_url: "",
    price: "",
  });

  if (!openModal) return <></>; // Deja de mostrar la modal

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      mutation.mutate({
        description: formData.description,
        image_url: formData.image_url,
        name: formData.name,
        price: Number(formData.price),
        stock: formData.stock,
        talla: Number(formData.talla),
      });
      onClose();
    } catch (error) {
      console.log("error al crear", error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-40 flex justify-center items-center "
      >
        <div className="relative left-[650px] bottom-44">
          <button
            className="text-white hover:text-red-600 font-light"
            onClick={() => onClose()}
          >
            X
          </button>
        </div>
        <div className="bg-[#0d1111] flex-col justify-center items-center p-10 mt-5 rounded-md">
          <div>
            <h2 className="text-white text-[25px] text-center font-sans">
              Agrega un producto
            </h2>
            <hr />

            <div className="flex-col gap-4 mt-10">
              <div className="flex gap-4 ">
                <div>
                  <label className="text-start text-sm font-semibold text-gray-500 block font-sans">
                    Introduce un nombre
                  </label>
                  <input
                    type="text"
                    placeholder="Introduce el nombre..."
                    name="text"
                    className="2xl:w-full h-[40px] 2xl:h-[45px] w-[230px] sm:w-full bg-gray-600 text-white form-control mb-2 px-4 bg-opacity-20 rounded-md"
                    value={formData.name}
                    onChange={(event) =>
                      setFormData({ ...formData, name: event.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="text-start text-sm font-semibold text-gray-500 block font-sans">
                    Introduce una description
                  </label>
                  <input
                    type="text"
                    placeholder="Introduce el descripcion"
                    name="text"
                    className="2xl:w-full h-[40px] 2xl:h-[45px] w-[230px] sm:w-full bg-gray-600 text-white form-control mb-2 px-4 bg-opacity-20 rounded-md"
                    value={formData.description}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        description: event.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="text-start text-sm font-semibold text-gray-500 block font-sans">
                    Introduce una Talla
                  </label>
                  <input
                    type="text"
                    placeholder="Introduce la talla"
                    name="text"
                    className="2xl:w-full h-[40px] 2xl:h-[45px] w-[230px] sm:w-full bg-gray-600 text-white form-control mb-2 px-4 bg-opacity-20 rounded-md"
                    value={formData.talla}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        talla: event.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div>
                  <label className="text-start text-sm font-semibold text-gray-500 block font-sans">
                    Introduce un precio
                  </label>
                  <input
                    type="number"
                    placeholder="Introduce el precio..."
                    name="text"
                    className="2xl:w-full h-[40px] 2xl:h-[45px] w-[230px] sm:w-full bg-gray-600 text-white form-control mb-2 px-4 bg-opacity-20 rounded-md"
                    value={formData.price}
                    onChange={(event) =>
                      setFormData({ ...formData, price: event.target.value })
                    }
                  />
                  <div>
                    <label className="text-start text-sm font-semibold text-gray-500 block font-sans">
                      Introduce un stock
                    </label>
                    <input
                      type="text"
                      placeholder="Introduce la cantidad..."
                      name="text"
                      className="2xl:w-full h-[40px] 2xl:h-[45px] w-[230px] sm:w-full bg-gray-600 text-white form-control mb-2 px-4 bg-opacity-20 rounded-md"
                      value={formData.stock}
                      onChange={(event) =>
                        setFormData({ ...formData, stock: event.target.value })
                      }
                    />
                  </div>
                </div>
                <div>
                  <label className="text-start text-sm font-semibold text-gray-500 block font-sans">
                    Introduce una url de imagen
                  </label>
                  <input
                    type="text"
                    placeholder="Introduce el url..."
                    name="password"
                    className="2xl:w-full h-[40px] 2xl:h-[45px] w-[230px] sm:w-full bg-gray-600 text-white form-control mb-2 px-4 bg-opacity-20 rounded-md"
                    value={formData.image_url}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        image_url: event.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>

            <div className="mt-5">
              <button
                type="submit"
                className={`w-full h-[35px] btn btn-primary bg-[#F97300] hover:bg-[#F97300] hover:text-gray-100 text-gray-500 rounded-md bg-opacity-20 font-sans ${
                  !formData && "opacity-50 cursor-not-allowed"
                }`}
              >
                Agregar Nuevo Producto
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
// className={`w-full h-[38px] flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#F97300] hover:bg-[#f97000dc] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F97300] ${
//   (!file || uploading) && "opacity-50 cursor-not-allowed"
// }`}
