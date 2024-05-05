"use client";
import React from "react";
import Head from "next/head";
import { QueryClientProvider } from "react-query";
import queryClient from "./utils/queryClient";
import { Inter } from "next/font/google";
import "./globals.css";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext.tsx";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>MKS Sistemas</title>
        <link rel="icon" href="@/../public/Vector.svg" />
      </Head>
      <html lang="en">
        <body className={inter.className}>
          <ShoppingCartProvider>{children}</ShoppingCartProvider>
        </body>
      </html>
    </QueryClientProvider>
  );
}
