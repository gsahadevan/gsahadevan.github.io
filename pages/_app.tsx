import { ThemeProvider } from 'next-themes';
import Nav from '../pages/layouts/Nav';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <ThemeProvider enableSystem={true} attribute='class'>
                <Nav />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}

export default MyApp;
