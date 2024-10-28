"use client";
import AppModal from "@/components/modal/Modal";
import Papa from "papaparse";
// import { Product, TypesModal } from "@/interfaces/typesModal";
import { AppContext } from "@/context/modalContext";
import ButtonIU from "@/components/buttonIU/ButtonIU";
import { useContext, useState } from "react";
import { Product, TypesModal } from "@/interfaces/typesModal";

// export const fetchProducts = async () => {
//   try {
//     const res = await axios.get(
//       "https://softinventory-back-production.up.railway.app/api/products"
//     );
//     return res.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const deletedProducts = async (_id: IProducts) => {
//   try {
//     const deleted = await axios.delete(
//       `https://softinventory-back-production.up.railway.app/api/product/deleted/${_id}`
//     );
//     console.log(`Producto elminado ${deleted}`);
//   } catch (error) {
//     console.log(`Error al eliminar ${error}`);
//   }
// };

export default function Products() {
  const { setExcelModalForm } = useContext(AppContext) as TypesModal;
  const [data, setData] = useState<Product[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const parseData = result.data as Product[];
        console.log("Parsed Data:", parseData); // Verifica el contenido del archivo CSV
        setData(parseData);
      },
      error: (error) => {
        console.error("Error al procesar el archivo CSV:", error.message);
      },
    });
  };

  // const columns = [
  //   {
  //     title: "Producto",
  //     dataIndex: "image_url",
  //     key: "image_url",
  //     render: (image_url: string, record: Product) => (
  //       <Image src={image_url} alt={record.name} width={60} height={60} />
  //     ),
  //   },
  //   {
  //     title: "Nombre",
  //     dataIndex: "name",
  //     key: "name",
  //   },
  //   {
  //     title: "Descripción",
  //     dataIndex: "description",
  //     key: "description",
  //     render: (description: string) => <p>{description}</p>,
  //   },
  //   {
  //     title: "Precio",
  //     dataIndex: "price",
  //     key: "price",
  //     render: (price: number) => <p>${price}</p>,
  //   },
  //   {
  //     title: "Stock",
  //     dataIndex: "stock",
  //     key: "stock",
  //   },
  //   {
  //     title: "Talla",
  //     dataIndex: "size",
  //     key: "size",
  //   },
  // ];

  return (
    <>
      <div className="flex-col gap-5 xl:flex justify-between pb-6">
        <div className="flex-row justify-center">
          <h1 className="text-3xl font-sans">Inventario de Productos</h1>
          <div className="flex gap-3">
            <ButtonIU onClick={() => setExcelModalForm(true)}>
              Subir un nuevo producto
            </ButtonIU>
          </div>
        </div>

        <div>
          {data.length > 0 && (
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-100 text-black">
                  <tr>
                    {Object.keys(data[0]).map((key) => (
                      <th
                        key={key}
                        className="py-3 px-6 text-left text-sm font-medium  border-b"
                      >
                        {key}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      {Object.values(row).map((value, inde) => (
                        <td key={inde} className="py-3 px-6 text-sm border-b">
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      <AppModal handleFileChange={handleFileChange} />
    </>
  );
}

/* <div className="flex-col gap-5 xl:flex justify-between pb-6">
        <div className="flex-row justify-center">
          <h1 className="text-3xl font-sans">Inventario de Productos</h1>
          <div className="flex gap-3">
            <ButtonIU onClick={() => setOpenModal(true)}>
              Crear un nuevo producto
            </ButtonIU>
            <ButtonIU onClick={() => setExcelModalForm(true)}>
              {/* Subir un nuevo producto */
// </ButtonIU>
// </div>
// </div>
// <div className="">
// <>
// <Table
// dataSource={data}
// columns={columns}
// className="cursor-pointer"
// pagination={false}
// // ></Table>
// <Pagination
//   className="relative top-2"
//   showSizeChanger
//   defaultCurrent={1}
//   total={100}
//       />
//     </>
//   </div>
// </div>
// <AppModal /> */}
/////////////////////////////////////////
// <div className="">
//     <>
//       <Table
//         dataSource={data}
//         columns={columns}
//         // className="cursor-pointer"
//         pagination={false}
//       ></Table>
//       <Pagination
//         className="relative top-2"
//         showSizeChanger
//         defaultCurrent={1}
//         total={100}
//       />
//     </>
//   </div>
