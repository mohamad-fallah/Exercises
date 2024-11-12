
import type { Metadata } from "next";
import './globals.css';
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

export const metadata: Metadata = {
  title: {
    template: "ahaonline | %s", // %s template for dynamic meta title for layouts
    default: "test | 1", // default title all layout and page
  },
  description: "Ahan online component test app router",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <ThemeProvider theme={theme}>
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
