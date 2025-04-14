'use client'

import { ThemeProvider } from 'next-themes'
import siteMetadata from '@/utils/siteMetadata'
import { JSX } from 'react';

export const ThemeProviders = ({ children }: { children: React.ReactNode }) : JSX.Element => {
    return (
        <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme} enableSystem>
            {children}
        </ThemeProvider>
    );
};
