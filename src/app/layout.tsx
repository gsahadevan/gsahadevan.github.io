import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../../styles/globals.css';
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Gauthaman Sahadevan - Homepage',
    description: 'Gauthaman\'s homepage',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <ThemeProvider attribute='class' defaultTheme={'dark'} enableSystem>
                    <Navbar />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
