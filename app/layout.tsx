import React from 'react';
import './globals.css'
import { Inter } from 'next/font/google'
import theme from "./flowbite-theme";
import { ThemeModeScript } from 'flowbite-react';
const inter = Inter({ subsets: ['latin'] })
import { Flowbite } from 'flowbite-react';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <head>
        <ThemeModeScript />
      </head>
      <meta name="theme-color" content="#ffffff" />
      <Flowbite theme={{ theme }}>
        <body className={inter.className}>
          {children}
        </body>
      </Flowbite>
    </html>
  );
}
