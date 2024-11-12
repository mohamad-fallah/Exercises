import React, { ReactNode } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Header from "@/src/_components/Header";
import type { Metadata } from "next";

interface LayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "hello main page",
  description: "Ahan online component test app router",
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <AppRouterCacheProvider>
        <main>{children}</main>
      </AppRouterCacheProvider>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
