import Link from "next/link";
import React from "react";

export default function OverPage() {
  return (
    <>
      <Link href={"/productos"}>Volver</Link>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
        doloremque nemo dolorem voluptatum numquam officiis voluptatibus in
        fugiat adipisci itaque accusamus, velit ullam, quidem sed, perspiciatis
        incidunt soluta necessitatibus explicabo.
      </div>
    </>
  );
}
