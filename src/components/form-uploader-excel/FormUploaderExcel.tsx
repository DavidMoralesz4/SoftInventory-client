import { useState } from "react";
import { ModalExcel } from "@/interfaces/typesModal";
import Papa from "papaparse";

const allowedExtensions = ["csv"];

// Define the type for parsed data
interface ParsedData {
  [key: string]: string;
}
function FormUploaderExcel({ closeModalExcel, excelModalForm }: ModalExcel) {
  const [data, setData] = useState<[string, string][]>([]);

  // State for handling errors
  const [error, setError] = useState<string>("");

  // State to store the file uploaded by the user
  const [file, setFile] = useState<File | null>(null);

  if (!excelModalForm) return <></>;

  // Handle file input changes
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");

    // Check if user has entered the file
    if (e.target.files && e.target.files.length) {
      const inputFile = e.target.files[0];

      // Check the file extensions, if not included in allowed extensions show error
      const fileExtension = inputFile?.type.split("/")[1];
      if (!allowedExtensions.includes(fileExtension)) {
        setError("Please input a csv file");
        return;
      }

      // If input type is correct, set the state
      setFile(inputFile);
    }
  };

  const handleParse = () => {
    // Show an alert if no file is provided
    if (!file) {
      alert("Enter a valid file");
      return;
    }

    // Initialize a reader to read the file
    const reader = new FileReader();

    // Event listener on reader when the file loads
    reader.onload = ({ target }) => {
      if (!target?.result) {
        setError("Failed to read file");
        return;
      }

      const csv = Papa.parse<ParsedData>(target.result as string, {
        header: true,
      });

      if (!csv.data.length) {
        setError("No data found in CSV file");
        return;
      }

      // Extract rows and columns from the parsed data
      const parsedData = csv.data;
      const rows = Object.keys(parsedData[0]);
      const columns = Object.values(parsedData[0]);

      // Transform rows and columns into an array of tuples
      const res = rows.reduce<[string, string][]>((acc, e, i) => {
        return [...acc, [e, columns[i]]];
      }, []);

      setData(res);
    };

    reader.readAsText(file);
  };

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-[#0d1111] p-10 mt-5 rounded-md relative">
        <button
          onClick={closeModalExcel}
          className="absolute top-2 right-2 text-white hover:text-red-500 focus:outline-none w-8 h-8 flex items-center justify-center"
          aria-label="Cerrar"
        >
          X
        </button>
        <h2 className="text-white text-[25px] text-center font-sans mb-6">
          Agrega un producto
        </h2>
        <div className="mb-4">
          <h3>Read CSV file in React</h3>
          <div className="container">
            <label htmlFor="csvInput" style={{ display: "block" }}>
              Enter CSV File
            </label>
            <input
              onChange={handleFileChange}
              id="csvInput"
              name="file"
              type="file"
            />
            <div>
              <button onClick={handleParse}>Parse</button>
            </div>
            <div style={{ marginTop: "3rem" }}>
              {error ? (
                <p className="error">{error}</p>
              ) : (
                data.map((e, i) => (
                  <div key={i} className="text-white flex justify-center items-center text-center">
                    {e[0]}: {e[1]}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
        {/* {file && (
          <p className="mb-4 text-sm text-gray-300">
            Archivo seleccionado:
          </p>
        )}
        <button
          onClick={handleUpload}
          disabled={!file || uploading}
          className={`w-full h-[38px] flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#F97300] hover:bg-[#f97000dc] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F97300] ${
            (!file || uploading) && "opacity-50 cursor-not-allowed"
          }`}
        >
          {uploading ? "Subiendo..." : "Subir Archivo"}
        </button>
        {uploadStatus && (
          <div
            className={`mt-4 p-3 rounded-md ${
              uploadStatus === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {uploadStatus === "success" ? "📂" : "⚡"}
            {" " + statusMessage}
          </div>
        )} */}
      </div>
    </div>
  );
}

export default FormUploaderExcel;
