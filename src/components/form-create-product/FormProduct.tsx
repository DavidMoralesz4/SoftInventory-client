"use client";

import { IProducts } from "@/interfaces/IProducts";
import axios from "axios";
import React, { FormEventHandler, useState } from "react";

type HandleCancel = {
  openModal: boolean;
  onClose: () => void;
};

export default function FormProduct({ onClose, openModal }: HandleCancel) {
  if (!openModal) return <></>;

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    stock: "",
    image_url: "",
    price: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const productData = {
        ...formData,
        price: Number(formData.price),
      };

      const newProduct = await axios.post(
        "http://localhost:3005/api/products/create",
        productData
      );

      console.log("Success:", newProduct.data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-40 flex justify-center items-center "
      >
        <div className="relative left-[455px] bottom-44">
          <button
            className="text-2xl text-white hover:text-red-600 font-light"
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
              </div>

              <div className="flex gap-4">
                <div>
                  <label className="text-start text-sm font-semibold text-gray-500 block font-sans">
                    Introduce un precio
                  </label>
                  <input
                    type="text"
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
                className="w-full h-[35px] btn btn-primary bg-[#F97300] hover:bg-[#F97300] hover:text-gray-100 text-gray-500 rounded-md bg-opacity-20 font-sans"
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
