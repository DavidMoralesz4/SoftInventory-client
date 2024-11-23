import { Product } from "@/interfaces/typesModal";

export default function AdidasCards({
  description,
  image_url,
  name,
  price,
  size,
  stock,
}: Product) {
  return (
    <>
      <div className="group relative flex flex-col h-full">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none  lg:h-80">
        <img
          src={image_url}
          alt={name}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          width={300}
          height={300}
        />
      </div>
      <div className="mt-4 flex flex-col flex-grow">
        <div>
          <h3 className="text-sm font-medium text-gray-900">
            <p>
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </p>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
          {size && (
            <p className="mt-1 text-sm text-gray-500">Talla: {size}</p>
          )}
          <p className="mt-1 text-sm text-gray-500">{stock}</p>
        </div>
        <div className="mt-2 flex justify-between items-center">
          <p className="text-sm font-medium text-gray-900">${price}</p>
          
        </div>
      </div>
    </div>
    </>
  );
}

/*

   

*/
