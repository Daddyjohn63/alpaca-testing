import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import ThemeProvider from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from "@/site-config";
import { getSEOMetadata } from "@/lib/seo";

export const metadata = getSEOMetadata()

const inter = Inter({ subsets: ["latin"] });

const RootLayout = async ({ children, }: Readonly<{ children: React.ReactNode; }>) => {
  const session = await auth();
  const themeColor = siteConfig.themeColor;

  return (
    <SessionProvider session={session}>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme={themeColor}
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  );
}

export default RootLayout
