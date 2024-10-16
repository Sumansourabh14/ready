import localFont from "next/font/local";
import "./globals.css";
import { GlobalContextProvider } from "@/services/GlobalContext";
import Navbar from "@/components/ui/general/Navbar";
import Footer from "@/components/ui/general/Footer";
import { Toaster } from "@/components/ui/toaster";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { ThemeProvider } from "@/components/theme-provider";
config.autoAddCss = false;

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Ready | Write, Upload & Read",
  description: "Upload your PDF and spread it across!",
};

export default function RootLayout({ children }) {
  return (
    <GlobalContextProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footer />
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </GlobalContextProvider>
  );
}
