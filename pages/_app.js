import { ThemeProvider } from 'next-themes';
import Nav from '../pages/layouts/Nav';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
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
