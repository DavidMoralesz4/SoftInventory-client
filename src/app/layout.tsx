import type { Metadata } from "next";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { Roboto_Mono, Josefin_Sans } from 'next/font/google'
 
const josefin_sans = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-josefin-sans',
})
 
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
  title: "SoftInventory",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${josefin_sans.variable} ${roboto_mono.variable}`} >
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AntdRegistry>
          <Layout>
            <Layout>
              <Content
                style={{
                  minHeight: "calc(100vh - 0px)",
                  overflow: "initial",
                  backgroundColor: "#080B0C",
                }}
              >
                <div className="flex items-center justify-center ">
                  {children}
                </div>
              </Content>
            </Layout>
          </Layout>
        </AntdRegistry>
      </body>
    </html>
  );
}
