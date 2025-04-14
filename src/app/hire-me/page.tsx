import Image from 'next/image';
import React from 'react';

export default function HireMePage() {
    return (

        <main className="flex-auto">
            <div className="sm:px-8 mt-16 sm:mt-32">
                <div className="mx-auto w-full max-w-7xl lg:px-8">
                    <div className="relative px-4 sm:px-8 lg:px-12">
                        <div className="mx-auto max-w-2xl lg:max-w-5xl">
                        </div>
                    </div>
                </div>
            </div>

            <div className="sm:px-8 mt-24 md:mt-28">
                <div className="mx-auto w-full max-w-7xl lg:px-8">
                    <div className="relative px-4 sm:px-8 lg:px-12">
                        <div className="mx-auto max-w-2xl lg:max-w-5xl">
                            <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                                <div className="flex flex-col">
                                    <header className="max-w-2xl">
                                        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">Hire me</h1>
                                    </header>
                                    <div className="mt-8">
                                        <p>Not looking for any new roles at the moment!!! Happy where I am right now.</p>
                                        <p className='py-2 leading-7'>
                                            You could contact me via e-mail if you are looking for someone to meet the below descriptions:
                                        </p>
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
                                    </div>
                                </div>
                                <div className="space-y-10 lg:pl-16 xl:pl-24">
                                    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                                        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100 items-center">
                                            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6 flex-none">
                                                <path d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500">
                                                </path>
                                                <path d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5" className="stroke-zinc-400 dark:stroke-zinc-500">
                                                </path>
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
                                                        <time dateTime="2022">2022</time> <span aria-hidden="true">—</span> <time dateTime="2025">Present</time>
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
                                                        <time dateTime="2019">2019</time> <span aria-hidden="true">—</span> <time dateTime="2022">2022</time>
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
                                                        <time dateTime="2009">2009</time> <span aria-hidden="true">—</span> <time dateTime="2018">2018</time>
                                                    </dd>
                                                </dl>
                                            </li>
                                        </ol>
                                        <a className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full" href="#">Download CV<svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50">
                                            <path d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                            </path>
                                        </svg>
                                        </a>
                                    </div>
                                    <form action="/thank-you" className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                                        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100 items-center">
                                            <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" className="h-6 w-6 flex-none">
                                                <path d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500">
                                                </path>
                                                <path d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6" className="stroke-zinc-400 dark:stroke-zinc-500">
                                                </path>
                                            </svg>
                                            <span className="ml-3">Stay up to date</span>
                                        </h2>
                                        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Get notified when I publish something new, and unsubscribe at any time.</p>
                                        {/* <div className="mt-6 flex"> */}
                                        {/*     <input placeholder="Email address" aria-label="Email address" required="" className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(--spacing(2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 focus:outline-hidden sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10" type="email"> */}
                                        {/*         <button className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 ml-4 flex-none" type="submit">Join</button> */}
                                        {/* </div> */}
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
