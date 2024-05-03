'use client'

import React from 'react';
import { QueryClientProvider } from 'react-query';

import { Inter } from 'next/font/google';
import './globals.css';
import queryClient from "./utils/queryClient";

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </QueryClientProvider>
  );
}



