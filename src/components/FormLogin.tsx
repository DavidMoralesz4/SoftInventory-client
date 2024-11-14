"use client";

import { authLoginSesion } from "@/app/(auth)/login/components/LoginAuth";
// import axios from "axios";
import Link from "next/link";
import React, { FormEvent, useState } from "react";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    await authLoginSesion({ email, password });
  };

  return (
    <div className="flex justify-center xl:bg-inherit  items-center sm:relative flex-col rounded-lg xl:mt-24 p-12 sm:w-[500px] xl:shadow-none 2xl:mt-0 xl:bottom-16 xl:w-[460px] 2xl:w-[550px]">
      <h1 className="relative text-2xl md:text-4xl 2xl:text-4xl text-white text-shadow-lg font-bold animate-fadeIn font-sans">
        X
      </h1>
      <p className="relative text-lg md:text-xl 2xl:text-2xl text-gray-500 animate-fadeIn font-sans 2xl:mt-10 xl:mt-8">
        BIENVENIDO
      </p>
      <p className="text-gray-400 relative text-base md:text-lg 2xl:text-xl animate-fadeIn font-light 2xl:mb-10 xl:mb-5 font-sans">
        Ingresa tus datos para continuar
      </p>

      <form
        onSubmit={handleLogin}
        className="flex justify-center items-center flex-col w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg gap-3"
      >
        <div className="w-full ">
          <label
            htmlFor="email"
            className="text-start text-sm font-semibold text-gray-500 block font-sans"
          >
            Nombre de usuario o email
          </label>
          <input
            type="email"
            placeholder="Ingresa tu correo electrónico"
            name="email"
            className="2xl:w-full w-[230px] 2xl:h-[45px] h-[40px] sm:w-full bg-gray-600 text-white form-control mb-2 px-4 bg-opacity-20 rounded-md"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <label
            htmlFor="password"
            className="text-start text-sm font-semibold text-gray-500 block font-sans"
          >
            Contraseña
          </label>
          <input
            type="password"
            placeholder="Ingresa tu contraseña"
            name="password"
            className="2xl:w-full h-[40px] 2xl:h-[45px] w-[230px] sm:w-full bg-gray-600 text-white form-control mb-2 px-4 bg-opacity-20 rounded-md"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div className="flex flex-col gap-3 pt-5 w-full">
          <button
            type="submit"
            className="w-full h-[35px] btn btn-primary bg-[#F97300] text-gray-500 rounded-md bg-opacity-20 font-sans"
          >
            Iniciar Sesión
          </button>

          <button
            type="button"
            className="flex justify-center items-center w-full h-[40px] btn btn-primary bg-gray-950 text-white rounded-md border-purple-300 border font-sans"
            // onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          >
            {/* <img
              src="googleIcon.png"
              alt="google.png"
              className="h-6 w-6 mr-2"
            /> */}
            Iniciar sesión con Google
          </button>
        </div>
        <div>
          <div className="flex gap-2 ">
            <p className="text-gray-500 font-sans">¿No estás registrado? </p>
            <Link href="/register" className="text-[#F97300] font-sans">
              Regístrate aquí
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
