import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "Ingresa tu correo electrónico",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "Ingresa tu contraseña",
        },
      },
      async authorize(credentials) {
       try {
        const response = await axios.post(`http://localhost:4001/auth/login`, {
            email: credentials?.email,
            password: credentials?.password,
          });
          
          
          console.log(response.data.message);
          const user = response.data
          
          if(user) {
              return {
                  id: user.id,
                  name: user.name,
                  email: user.email
              }
          } else {
              return null
          }
       } catch (error) {
        console.error("Error durante la autenticación:", error)
        return null
       }
      },
    }),
  ],



  callbacks: {
    async jwt({user, token}){
        if(user) {
            token.email = user.email
            token.name = user.name
        }
        return token;
    },
    
  }
});

export { handler as GET, handler as POST };
