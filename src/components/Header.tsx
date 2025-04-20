'use client';

import Link from 'next/link';
import React, { JSX, useEffect } from 'react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { usePathname, useSearchParams } from 'next/navigation'
import Image from 'next/image';

export const Header = (): JSX.Element => {

    const pathname = usePathname()
    // const searchParams = useSearchParams()
    // useEffect(() => {
    //     console.log(`Pathname: ${pathname}`);
    //     console.log(`searchParams: ${searchParams}`);
    // }, [pathname, searchParams])

    return (
        <header className="pointer-events-none relative z-50 flex flex-none flex-col">
            <div className="top-0 z-10 h-16 pt-6">
                <div className="sm:px-8 top-(--header-top,--spacing(6)) w-full">
                    <div className="mx-auto w-full max-w-7xl lg:px-8">
                        <div className="relative px-4 sm:px-8 lg:px-12">
                            <div className="mx-auto max-w-2xl lg:max-w-5xl">
                                <div className="relative flex gap-4">
                                    <div className="flex flex-1">
                                        <div className="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10">
                                            <Link aria-label="Home" className="pointer-events-auto" href="/">
                                                <Image src="/images/avatar.jpg" alt="" width="512" height="512" className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-9 w-9" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flex flex-1 justify-end md:justify-center">
                                        <div className="pointer-events-auto md:hidden" data-headlessui-state="">
                                            <button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20" type="button" aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:Rbmiqja:">Menu<svg viewBox="0 0 8 6" aria-hidden="true" className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400">
                                                <path d="M1.75 1.75 4 4.25l2.25-2.5" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                            </svg>
                                            </button>
                                        </div>
                                        <nav className="pointer-events-auto hidden md:block">
                                            <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                                                <li>
                                                    <Link className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/">About</Link>
                                                </li>
                                                <li>
                                                    <Link className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/blog">Articles</Link>
                                                </li>
                                                {/* <li> */}
                                                {/*     <a className="relative block px-3 py-2 transition text-teal-500 dark:text-teal-400" href="/projects">Projects<span className="absolute inset-x-1 -bottom-px h-px bg-linear-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"> */}
                                                {/*     </span> */}
                                                {/*     </a> */}
                                                {/* </li> */}
                                                {/* <li> */}
                                                {/*     <a className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/speaking">Speaking</a> */}
                                                {/* </li> */}
                                                <li>
                                                    <Link className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/hire-me">For-Hire</Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="flex justify-end md:flex-1">
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
