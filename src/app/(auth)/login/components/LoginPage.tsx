import React from "react";
import FormLogin from "@/components/FormLogin";
import Welcome from "@/components/Welcome";

export default function LoginPage() {
  return (
    <div className="fixed top-0 flex flex-col justify-center items-center 2xl:left-[82rem] 2xl:top-[3rem] rounded-[30px] shadow-xl xl:left-[53rem] bg-[#0d1111] h-[25rem] xl:h-[35rem] lg:h-[35rem] xl:top-[3rem] 2xl:h-[54rem] mt-32 sm:mt-32 xl:mt-0 ">
      <div className="hidden xl:flex ">
        <Welcome />
      </div>
      <div className="">
        <FormLogin/>
      </div>
    </div>
  );
}