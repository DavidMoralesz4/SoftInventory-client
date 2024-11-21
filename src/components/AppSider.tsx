"use client";

import { Menu, MenuProps } from "antd";
// import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type MenuItem = Required<MenuProps>["items"][number];

export default function AppSider() {
  // const { data: session } = useSession();

  const items: MenuItem[] = [
    {
      key: "g1",
      type: "group",
      children: [
        {
          key: "1",
          label: (
            <Link href="/dashboard" className="">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.7em"
                  height="1.7em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    d="M3 12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1zm0 8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1zm1-17a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"
                  ></path>
                </svg>
                <p className="text-gray-100 font-sans font-light text-[18px] flex justify-start items-center">
                  Inicio
                </p>
              </div>
            </Link>
          ),
        },
        {
          key: "3",
          label: (
            <Link href="/productos">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.7em"
                  height="1.7em"
                  viewBox="0 0 48 48"
                >
                  <g
                    fill="none"
                    stroke="white"
                    strokeLinejoin="round"
                    strokeWidth={4}
                  >
                    <path d="M44 14L24 4L4 14v20l20 10l20-10z"></path>
                    <path
                      strokeLinecap="round"
                      d="m4 14l20 10m0 20V24m20-10L24 24M34 9L14 19"
                    ></path>
                  </g>
                </svg>
                <p className="text-gray-100 font-sans font-light text-[18px]">
                  Productos
                </p>
              </div>
            </Link>
          ),
        },
        {
          key: "2",
          label: (
            <Link href="/tienda" className="text-white">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.7em"
                  height="1.7em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    fillRule="evenodd"
                    d="M5.586 4.586C5 5.172 5 6.114 5 8v9c0 1.886 0 2.828.586 3.414S7.114 21 9 21h6c1.886 0 2.828 0 3.414-.586S19 18.886 19 17V8c0-1.886 0-2.828-.586-3.414S16.886 4 15 4H9c-1.886 0-2.828 0-3.414.586M9 8a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <p className="text-gray-100 font-sans font-light text-[18px]">
                  Tienda
                </p>
              </div>
            </Link>
          ),
        },
        // {
        //   key: "4",
        //   label: (
        //     <Link href="/envios" className="text-white">
        //       <div className="flex justify-start items-center gap-2">
        //         <svg
        //           xmlns="http://www.w3.org/2000/svg"
        //           width="1.7em"
        //           height="1.7em"
        //           viewBox="0 0 24 24"
        //         >
        //           <path
        //             fill="white"
        //             d="M21.6 11.22L17 7.52V5a1.91 1.91 0 0 0-1.81-2H3.79A1.91 1.91 0 0 0 2 5v10a2 2 0 0 0 1.2 1.88a3 3 0 1 0 5.6.12h6.36a3 3 0 1 0 5.64 0h.2a1 1 0 0 0 1-1v-4a1 1 0 0 0-.4-.78M20 12.48V15h-3v-4.92ZM7 18a1 1 0 1 1-1-1a1 1 0 0 1 1 1m12 0a1 1 0 1 1-1-1a1 1 0 0 1 1 1"
        //           ></path>
        //         </svg>
        //         <p className="text-gray-100 font-sans font-light text-[18px]">
        //           Envios
        //         </p>
        //       </div>
        //     </Link>
        //   ),
        // },
      ],
    },

    // {
    //   key: "g2",
    //   // label: <p className="font-semibold text-gray-950">Inventario</p>,
    //   type: "group",
    //   children: [

    //   ],
    // },
  ];

  return (
    <>
      <div className="p-[1px]">
        <div className=" flex justify-center items-center p-3 mt-3 ">
          <Image
            src="/logoBlanco.png"
            alt="logoPrin.png"
            width={80}
            height={26}
            className="flex lg:hidden"
          />
          <h1 className="text-gray-100 text-2xl font-semibold font-sans hidden lg:flex">
            V
          </h1>
        </div>

        <div className="ant-menu-item-selected">
          <Menu
            mode="inline"
            items={items}
            theme="dark"
            className="custom-menu"
            style={{
              borderRight: "0px solid #FFFFFF",

              backgroundColor: "#0d1111", // Personaliza el fondo si lo deseas
            }}
          />
        </div>
      </div>
    </>
  );
}
