import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../../styles/globals.css';
import '../../styles/prism.css';
// import '../../styles/spotlight.css';
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ThemeProviders } from './ThemeProvider';

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
            <body className="h-full bg-zinc-50 dark:bg-black">
                <div className="flex w-full">
                    <div className="fixed inset-0 flex justify-center sm:px-8">
                        <div className="flex w-full max-w-7xl lg:px-8">
                            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20">
                            </div>
                        </div>
                    </div>
                    <div className="relative flex w-full flex-col">
                        <ThemeProviders>
                            <Header />
                            {children}
                            <Footer />
                        </ThemeProviders>
                    </div>
                </div>
            </body>
        </html>
    );
}

export default RootLayout;
