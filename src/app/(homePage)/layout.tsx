"use client"

import AppFooter from "@/components/AppFooter";
import AppSider from "@/components/AppSider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import React from "react";

export default function layoutDashboardPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AntdRegistry>
      <Layout >
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
          style={{backgroundColor: "#0d1111"}}
        >
          <AppSider />
        </Sider>
        <Layout style={{backgroundColor: "#080B0C"}}>
          <Header style={{ padding: 0, backgroundColor: "#0d1111" }} />
          {/* <AppNav />
          </Header> */}
          <Content
            style={{
              margin: "20px 22px 22px",
              minHeight: "calc(100vh - 70px)",
              //   overflow: "initial",
              //   padding: 24,
            }}
          >
            <div
              style={{
                padding: 24,
                minHeight: 360,
                backgroundColor: "#0d1111",
                borderRadius: 20,
              }}
            >
              {children}
            </div>
          </Content>
          <Footer style={{backgroundColor: "#0d1111"}}>
            <AppFooter />
          </Footer>
        </Layout>
      </Layout>
    </AntdRegistry>
  );
}
