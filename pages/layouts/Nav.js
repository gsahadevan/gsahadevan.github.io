import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { SunIcon, MoonIcon, MenuIcon } from '@heroicons/react/solid';

function Nav() {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const renderThemeChanger = () => {
        // if (!mounted) {
        //     return null;
        // }

        const currentTheme = theme === 'system' ? systemTheme : theme;

        if (currentTheme === 'dark') {
            return <SunIcon className='w-5 h-6' role='button' onClick={() => setTheme('light')} />;
        } else {
            return <MoonIcon className='w-5 h-6' role='button' onClick={() => setTheme('dark')} />;
        }
    };

    const toggleMobileMenu = () => {
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.toggle('hidden');
    };

    const hideMobileMenu = () => {
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.add('hidden');
    };
    return (
        <>
            <nav className='text-indigo-100 bg-indigo-600 dark:bg-gray-800 dark:text-gray-200'>
                <div className='max-w-2xl py-4 px-8 mx-auto lg:max-w-5xl'>
                    <div className='flex items-center justify-between'>
                        <Link href='/'>
                            <a>Gauthaman Sahadevan</a>
                        </Link>

                        <ul className='hidden md:flex justify-end space-x-12'>
                            <li>
                                <Link href='/'>
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/blog'>
                                    <a>Blog</a>
                                </Link>
                            </li>
                            <li>{renderThemeChanger()}</li>
                            <li>
                                <Link href='/hire-me'>
                                    <a className='px-6 py-2 text-yellow-100 bg-yellow-600 rounded-full'>Hire Me</a>
                                </Link>
                            </li>
                        </ul>

                        <div className='md:hidden flex items-center'>
                            <div className='px-6'>{renderThemeChanger()}</div>
                            <button onClick={toggleMobileMenu}>
                                <MenuIcon className='w-6 h-6' />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <div
                id='mobile-menu'
                className='hidden md:hidden flex flex-col absolute w-full px-8 bg-gray-100 dark:bg-gray-600'>
                <Link href='/'>
                    <a className='py-2 px-4 text-sm' onClick={hideMobileMenu}>
                        Home
                    </a>
                </Link>
                <Link href='/blog'>
                    <a className='py-2 px-4 text-sm' onClick={hideMobileMenu}>
                        Blog
                    </a>
                </Link>
                <Link href='/hire-me'>
                    <a className='py-2 px-4 text-sm' onClick={hideMobileMenu}>
                        Hire Me
                    </a>
                </Link>
            </div>
        </>
    );
}

export default Nav;
