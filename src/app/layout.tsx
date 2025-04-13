import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../../styles/globals.css';
import '../../styles/prism.css';
import React from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '@/components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Gauthaman Sahadevan',
    description: 'Gauthaman\'s homepage',
};

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}

export default RootLayout;
