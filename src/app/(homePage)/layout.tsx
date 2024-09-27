"use client";

import AppFooter from "@/components/AppFooter";
import AppSider from "@/components/AppSider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Layout } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import React from "react";

export default function layoutDashboardPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AntdRegistry>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="60"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
          style={{
            backgroundColor: "#0d1111",
            borderRight: "1px solid #E8E2E2",
          }}
        >
          <AppSider />
        </Sider>
        <Layout style={{ backgroundColor: "#E8E2E2" }}>
          <Content
            style={{
              margin: "20px 22px 22px",
              minHeight: "calc(100vh - 70px)",
            }}
          >
            <div
              style={{
                padding: 24,
                minHeight: 360,
                backgroundColor: "#DDDDDD",
                borderRadius: 20,
                background: "linear-gradient(145deg, #f6f6f6, #cfcfcf)",
                boxShadow: "20px 20px 60px #bebebe, -20px -20px 60px #ffffff",
              }}
            >
              {children}
            </div>
          </Content>
          <Footer
            style={{
              backgroundColor: "#0d1111",
            }}
          >
            <AppFooter />
          </Footer>
        </Layout>
      </Layout>
    </AntdRegistry>
  );
}

// 787A91
//0d1111
