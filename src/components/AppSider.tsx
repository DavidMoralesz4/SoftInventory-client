// import { UserAddOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
// import Avatar from "antd/es/avatar/avatar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type MenuItem = Required<MenuProps>["items"][number];

export default function AppSider() {
  const items: MenuItem[] = [
    {
      key: "g1",
      label: <p className="font-semibold text-white">Vista Previa</p>,
      type: "group",
      children: [
        { key: "1", label: <Link href="/dashboard" className="text-white"><p className="text-white">Inicio</p></Link> },
        { key: "2", label: <Link href="/ordenes" className="text-white"><p className="text-white">Ordenes</p></Link> },
      ],
    },

    {
      key: "g2",
      label: <p className="font-semibold text-white">Inventario</p>,
      type: "group",
      children: [
        { key: "3", label: <Link href="/productos" ><p className="text-white">Productos</p></Link> },
        { key: "4", label: <Link href="/envios" className="text-white"> <p className="text-white">Envios</p></Link> },
      ],
    },
  ];

  return (
    <>
      <div className="flex justify-between flex-col bg-[#0d1111]">
        <div className=" flex justify-center items-center p-3 mt-2 ">
          <Image
            src="/logoBlanco.png"
            alt="logoPrin.png"
            width={80}
            height={26}
          />
        </div>

        <hr className="m-4" />
        <div className="flex justify-center">
          <Menu
            mode="inline"
            items={items}
            theme="dark"
            style={{ borderRight: "0px solid #FFFFFF", backgroundColor: "#0d1111"}} 
          >

          </Menu>
        </div>

        {/* <div className="flex  items-center px-3 h-12 w-[180px] m-2 border-[#DDDDDD] border rounded-lg cursor-pointer bottom-2  ">
          <Avatar size={30} icon={<UserAddOutlined />} />
          <div className="flex flex-col items-center px-4 ">
            <p className="font-semibold text-[12px]">Admin</p>
            <p className="text-[12px]">Jose Morales</p>
          </div>
        </div> */}

      </div>
    </>
  );
}