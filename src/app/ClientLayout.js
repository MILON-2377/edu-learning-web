"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Banner from "@/components/Banner/Banner";
import ReduxProvider from "@/redux/ReduxProvider/provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {

  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <QueryClientProvider client={queryClient}>
            <Banner></Banner>
            <div className="h-screen">{children}</div>
          </QueryClientProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}