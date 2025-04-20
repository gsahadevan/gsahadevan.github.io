import { Typography } from '@/components/Typography';
import Image from 'next/image';
import React, { JSX } from 'react';

const HireMePage = (): JSX.Element => {
    return (
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col">
                <header className="max-w-2xl">
                    <Typography type='title'>Hire me</Typography>
                </header>
                <Typography type='copy'>Not looking for any new roles at the moment!!! Happy where I am right now.</Typography>
                <Typography type='copy'>You could contact me via e-mail if you are looking for someone to meet the below descriptions:</Typography>
                <Typography type='copy'>
                    <ul className='list-disc list-outside pl-5 leading-7'>
                        <li>Work location - Munich, Germany (or) Remote</li>
                        <li>Senior Full Stack Developer</li>
                        <li>3+ years of <strong>Angular, TypeScript, Bootstrap</strong> experience</li>
                        <li>2+ years of <strong>Node + Express, Mongo DB</strong> experience</li>
                        <li>Strong communication with creative writing skills</li>
                        <li>Support with contructive criticism</li>
                        <li>Agile and Test Driven Development</li>
                        <li>6+ months of <strong>WordPress + SEO</strong> experience</li>
                        <li>4+ years of <strong>Team Lead</strong> experience</li>
                    </ul>
                </Typography>
            </div>

            <div className="space-y-10 lg:pl-16 xl:pl-24">
                <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                    <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100 items-center">
                        <svg className="w-6 h-6 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7H5a2 2 0 0 0-2 2v4m5-6h8M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m0 0h3a2 2 0 0 1 2 2v4m0 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6m18 0s-4 2-9 2-9-2-9-2m9-2h.01" />
                        </svg>
                        <span className="ml-3">Work</span>
                    </h2>
                    <ol className="mt-6 space-y-4">
                        <li className="flex gap-4">
                            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                <Image src="/images/sixt_logo.jpeg" alt="" loading="lazy" width="28" height="28" decoding="async" data-nimg="1" className="h-7 w-7 rounded-full" />
                            </div>
                            <dl className="flex flex-auto flex-wrap gap-x-2">
                                <dt className="sr-only">Company</dt>
                                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">Sixt</dd>
                                <dt className="sr-only">Role</dt>
                                <dd className="text-xs text-zinc-500 dark:text-zinc-400">Software Development Engineer</dd>
                                <dt className="sr-only">Date</dt>
                                <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="2022 until Present">
                                    <time dateTime="2022">2022</time> <span aria-hidden="true">-</span> <time dateTime="2025">Present</time>
                                </dd>
                            </dl>
                        </li>
                        <li className="flex gap-4">
                            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                <Image src="/images/innospot_logo.jpeg" alt="" loading="lazy" width="28" height="28" decoding="async" data-nimg="1" className="h-7 w-7 rounded-full" />
                            </div>
                            <dl className="flex flex-auto flex-wrap gap-x-2">
                                <dt className="sr-only">Company</dt>
                                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">INNOSPOT</dd>
                                <dt className="sr-only">Role</dt>
                                <dd className="text-xs text-zinc-500 dark:text-zinc-400">Software Engineer</dd>
                                <dt className="sr-only">Date</dt>
                                <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="2019 until 2022">
                                    <time dateTime="2019">2019</time> <span aria-hidden="true">-</span> <time dateTime="2022">2022</time>
                                </dd>
                            </dl>
                        </li>
                        <li className="flex gap-4">
                            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                <Image src="/images/cognizant_logo.jpeg" alt="" loading="lazy" width="28" height="28" decoding="async" data-nimg="1" className="h-7 w-7 rounded-full" />
                            </div>
                            <dl className="flex flex-auto flex-wrap gap-x-2">
                                <dt className="sr-only">Company</dt>
                                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">Cognizant</dd>
                                <dt className="sr-only">Role</dt>
                                <dd className="text-xs text-zinc-500 dark:text-zinc-400">Senior Associate</dd>
                                <dt className="sr-only">Date</dt>
                                <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="2009 until 2018">
                                    <time dateTime="2009">2009</time> <span aria-hidden="true">-</span> <time dateTime="2018">2018</time>
                                </dd>
                            </dl>
                        </li>
                    </ol>
                    <a className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full" href="#">Download CV<svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50">
                        <path d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        </path>
                    </svg>
                    </a>
                </div>
                <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                    <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100 items-center">
                        <svg className="w-6 h-6 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.78552 9.5 12.7855 14l9-4.5-9-4.5-8.99998 4.5Zm0 0V17m3-6v6.2222c0 .3483 2 1.7778 5.99998 1.7778 4 0 6-1.3738 6-1.7778V11" />
                        </svg>
                        <span className="ml-3">Education</span>
                    </h2>
                    <ol className="mt-6 space-y-4">
                        <li className="flex gap-4">
                            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                <Image src="/images/psg_logo.jpeg" alt="" loading="lazy" width="28" height="28" decoding="async" data-nimg="1" className="h-7 w-7 rounded-full" />
                            </div>
                            <dl className="flex flex-auto flex-wrap gap-x-2">
                                <dt className="sr-only">University</dt>
                                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">PSG Tech</dd>
                                <dt className="sr-only">Course</dt>
                                <dd className="text-xs text-zinc-500 dark:text-zinc-400">Master of Computer Applications</dd>
                                <dt className="sr-only">Date</dt>
                                <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="2006 until 2009">
                                    <time dateTime="2006">2006</time> <span aria-hidden="true">-</span> <time dateTime="2009">2009</time>
                                </dd>
                            </dl>
                        </li>
                        <li className="flex gap-4">
                            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                <Image src="/images/gac_logo.png" alt="" loading="lazy" width="28" height="28" decoding="async" data-nimg="1" className="h-7 w-7 rounded-full" />
                            </div>
                            <dl className="flex flex-auto flex-wrap gap-x-2">
                                <dt className="sr-only">University</dt>
                                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">Government Arts College</dd>
                                <dt className="sr-only">Course</dt>
                                <dd className="text-xs text-zinc-500 dark:text-zinc-400">BSc, Physics</dd>
                                <dt className="sr-only">Date</dt>
                                <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="2003 until 2006">
                                    <time dateTime="2003">2003</time> <span aria-hidden="true">-</span> <time dateTime="2006">2006</time>
                                </dd>
                            </dl>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

HireMePage.displayName = 'HireMePage';
export default HireMePage;
