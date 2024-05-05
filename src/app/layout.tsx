"use client";
import React from "react";
import Head from "next/head";
import { QueryClientProvider } from "react-query";
import queryClient from "./utils/queryClient";
import "./globals.css";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext.tsx";


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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
        />
        <link rel="icon" href="@/../public/Vector.svg" />
      </Head>
      <html lang="en">
        <body>
          <ShoppingCartProvider>{children}</ShoppingCartProvider>
        </body>
      </html>
    </QueryClientProvider>
  );
}
