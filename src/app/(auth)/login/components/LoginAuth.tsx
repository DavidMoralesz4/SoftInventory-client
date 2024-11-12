// import React from "react";
// import axios from "axios";
// import LoginPage from "./LoginPage";

// export const authLoginSesion = async (credentials: {
//     email: string;
//   password: string;
// }) => {
//   try {
//     const response = await axios.post(
//       `http://localhost:4001/auth/login`,
//       credentials
//     );
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

// export default function LoginAuth() {

//     const handleLogin = async (credentials: {
//     email: string;
//     password: string;
//   }) => {
//     try {
//       const data = await authLoginSesion(credentials);
//       return data
//     } catch (error) {
//       console.error("Login failed:", error);
//     }
//   };

//   return (
//     <div>
//       <LoginPage sesionLogin={handleLogin} />
//     </div>
//   );
// }
