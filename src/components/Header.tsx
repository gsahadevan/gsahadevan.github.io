'use client';

import Link from 'next/link';
import React, { Fragment, JSX, useEffect, useState } from 'react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Popover, Transition } from '@headlessui/react';

export const Header = (): JSX.Element => {
    const pathname = usePathname();
    const [currentPath, setCurrentPath] = useState<string>('/');

    useEffect(() => {
        setCurrentPath(pathname);
    }, [pathname]);

    return (
        <header className='pointer-events-none relative z-50 flex flex-none flex-col'>
            <div className='top-0 z-10 h-16 pt-6'>
                <div className='sm:px-8 top-(--header-top,--spacing(6)) w-full'>
                    <div className='mx-auto w-full max-w-7xl lg:px-8'>
                        <div className='relative px-4 sm:px-8 lg:px-12'>
                            <div className='mx-auto max-w-2xl lg:max-w-5xl'>
                                <div className='relative flex gap-4'>
                                    <div className='flex flex-1'>
                                        <div className='h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10'>
                                            <Link aria-label='Home' className='pointer-events-auto' href='/'>
                                                <Image
                                                    src='/images/avatar.jpg'
                                                    alt=''
                                                    width='512'
                                                    height='512'
                                                    className='rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-9 w-9'
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className='flex flex-1 justify-end md:justify-center'>
                                        <div className='pointer-events-auto md:hidden'>
                                            <Popover className=''>
                                                <>
                                                    <Popover.Button
                                                        className='cursor-pointer group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20'
                                                        type='button'
                                                        aria-expanded='false'>
                                                        Menu
                                                        <svg
                                                            viewBox='0 0 8 6'
                                                            aria-hidden='true'
                                                            className='ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400'>
                                                            <path
                                                                d='M1.75 1.75 4 4.25l2.25-2.5'
                                                                fill='none'
                                                                strokeWidth='1.5'
                                                                strokeLinecap='round'
                                                                strokeLinejoin='round'></path>
                                                        </svg>
                                                    </Popover.Button>
                                                    <Popover.Overlay className='fixed inset-0 bg-black opacity-30 blur-lg backdrop-blur-3xl' />
                                                    <Popover.Panel>
                                                        {({ close }) => (
                                                            <div
                                                                className='top-4 fixed inset-x-4 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 duration-150 data-closed:scale-95 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in dark:bg-zinc-900 dark:ring-zinc-800'
                                                                id='headlessui-popover-panel-:Rrmiqja:'
                                                                data-headlessui-state='open'
                                                                data-open=''>
                                                                <div className='flex flex-row-reverse items-center justify-between'>
                                                                    <button
                                                                        aria-label='Close menu'
                                                                        className='-m-1 p-1 cursor-pointer'
                                                                        type='button'
                                                                        onClick={() => close()}
                                                                        data-headlessui-state='open active'
                                                                        data-open=''
                                                                        data-active=''>
                                                                        <svg
                                                                            viewBox='0 0 24 24'
                                                                            aria-hidden='true'
                                                                            className='h-6 w-6 text-zinc-500 dark:text-zinc-400'>
                                                                            <path
                                                                                d='m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5'
                                                                                fill='none'
                                                                                stroke='currentColor'
                                                                                strokeWidth='1.5'
                                                                                strokeLinecap='round'
                                                                                strokeLinejoin='round'></path>
                                                                        </svg>
                                                                    </button>
                                                                    <h2 className='text-sm font-medium text-zinc-600 dark:text-zinc-400'>
                                                                        Navigation
                                                                    </h2>
                                                                </div>
                                                                <nav className='mt-6'>
                                                                    <ul className='-my-2 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300'>
                                                                        <li>
                                                                            <Link
                                                                                className={`relative block py-2 transition hover:text-teal-500 dark:hover:text-teal-400 ${currentPath === '/' ? 'text-teal-500' : ''}`}
                                                                                href='/'
                                                                                onClick={() => close()}>
                                                                                About
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                className={`relative block py-2 transition hover:text-teal-500 dark:hover:text-teal-400 ${currentPath === '/blog' ? 'text-teal-500' : ''}`}
                                                                                href='/blog'
                                                                                onClick={() => close()}>
                                                                                Articles
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                className={`relative block py-2 transition hover:text-teal-500 dark:hover:text-teal-400 ${currentPath === '/hire-me' ? 'text-teal-500' : ''}`}
                                                                                href='/hire-me'
                                                                                onClick={() => close()}>
                                                                                For-Hire
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </nav>
                                                            </div>
                                                        )}
                                                    </Popover.Panel>
                                                </>
                                            </Popover>
                                        </div>

                                        <nav className='pointer-events-auto hidden md:block'>
                                            <ul className='flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10'>
                                                <li>
                                                    <Link
                                                        className={`relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400 ${currentPath === '/' ? 'text-teal-500' : ''}`}
                                                        href='/'>
                                                        About
                                                        {currentPath === '/' && (
                                                            <span className='absolute inset-x-1 -bottom-px h-px bg-linear-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0'></span>
                                                        )}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className={`relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400 ${currentPath === '/blog' ? 'text-teal-500' : ''}`}
                                                        href='/blog'>
                                                        Articles
                                                        {currentPath === '/blog' && (
                                                            <span className='absolute inset-x-1 -bottom-px h-px bg-linear-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0'></span>
                                                        )}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className={`relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400 ${currentPath === '/hire-me' ? 'text-teal-500' : ''}`}
                                                        href='/hire-me'>
                                                        For-Hire
                                                        {currentPath === '/hire-me' && (
                                                            <span className='absolute inset-x-1 -bottom-px h-px bg-linear-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0'></span>
                                                        )}
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className='flex justify-end md:flex-1'>
                                        <ThemeSwitcher />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
