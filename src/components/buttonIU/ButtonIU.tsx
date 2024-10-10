import { CustomButtonProps } from "@/interfaces/IProducts";

export default function ButtonIU({ children, onClick }: CustomButtonProps) {
  return (
    <button className="text-white bg-[#c55a02] flex justify-center items-center h-10 w-[200px] p-4 rounded-sm font-sans" onClick={onClick}>
      {children}
    </button>
  );
}
