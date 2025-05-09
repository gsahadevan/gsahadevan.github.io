import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import '../../styles/globals.css';
import React from 'react';
import { ThemeProvider } from 'next-themes';
import { Header } from 'src/components/Header';
import { Main } from 'src/components/Main';
import { Footer } from 'src/components/Footer';

const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-space-monserrat',
});

export const metadata: Metadata = {
    title: 'Gauthaman Sahadevan',
    description: 'Gauthaman Sahadevan',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' className={`${montserrat.variable} scroll-smooth`} suppressHydrationWarning>
            <body className={`${montserrat.className} h-full bg-zinc-50 dark:bg-black`}>
                <div className='flex w-full'>
                    <div className='fixed inset-0 flex justify-center sm:px-8'>
                        <div className='flex w-full max-w-7xl lg:px-8'>
                            <div className='w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20'></div>
                        </div>
                    </div>
                    <div className='relative flex w-full flex-col'>
                        <ThemeProvider attribute='class' defaultTheme={'dark'} enableSystem>
                            <Header />
                            <Main>{children}</Main>
                            <Footer />
                        </ThemeProvider>
                    </div>
                </div>
            </body>
        </html>
    );
}
