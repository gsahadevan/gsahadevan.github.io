import React, { JSX } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Typography } from '@/components/Typography';

const Home = (): JSX.Element => {
    return (
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
            <div className="lg:pl-20">
                <div className="max-w-xs px-2.5 lg:max-w-none">
                    <Image alt="" loading="lazy" width="800" height="800" decoding="async" data-nimg="1"
                        className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                        sizes="(min-width: 1024px) 32rem, 20rem"
                        src="/images/portrait.jpg" />
                </div>
            </div>

            <div className="lg:order-first lg:row-span-2">

                <Typography type='headling'>I am Gauthaman Sahadevan</Typography>

                <Typography type='copy'>I am a Software Development Engineer I hold a Masters Degree in Computer Application from PSG College of Technology, Coimbatore - India. I have a total of 12+ years of experience in developing applications using Java and its associated technologies. I have played multiple roles as a Technology Consultant for Fortune #1 company, as a SME in the Cards and Payments domain for a Netherlands based Banking Group and so on.</Typography>


                <Typography type='copy'>Apart from my work, I prefer to read, review and write technical blogs, answer questions on Stack Overflow and work on projects involving Data Visualization. I enjoy creating mock up projects by reverse engineering. I also like to research and implement latest features released as part of the technology stack of my interest and develop personal pet projects.
                </Typography>

                <Typography type='title'>My current interests include</Typography>

                <Typography type='copy'>
                    <ul className='list-disc list-outside pl-5 leading-7'>
                        <li>Design Systems</li>
                        <li>React</li>
                        <li>Micro Frontends</li>
                        <li>Tailwind CSS</li>
                        <li>Styled Components</li>
                        <li>Next.js</li>
                    </ul>
                </Typography>
            </div>

            <div className="lg:pl-20">
                <ul role="list">
                    <li className="mt-4 flex border-t border-zinc-100 pt-8 dark:border-zinc-700/40 ">
                        <Link className="group flex text-sm font-medium text-zinc-800 transition hover:text-rose-500 dark:text-zinc-200 dark:hover:text-rose-500 items-center"
                            href="https://github.com/gsahadevan/"
                            target="_blank">
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-rose-500">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path>
                            </svg>
                            <span className="ml-4">github.com/gsahadevan</span>
                        </Link>
                    </li>
                    <li className="mt-4 flex">
                        <Link className="group flex text-sm font-medium text-zinc-800 transition hover:text-rose-500 dark:text-zinc-200 dark:hover:text-rose-500 items-center"
                            href="https://www.linkedin.com/in/gsahadevan/"
                            target="_blank">
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-rose-500">
                                <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
                            </svg>
                            <span className="ml-4">linkedin.com/in/gsahadevan</span>
                        </Link>
                    </li>
                    <li className="mt-4 flex">
                        <Link className="group flex text-sm font-medium text-zinc-800 transition hover:text-rose-500 dark:text-zinc-200 dark:hover:text-rose-500 items-center"
                            href="mailto:gsahadevan@outlook.com">
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-rose-500">
                                <path fillRule="evenodd" d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"></path>
                            </svg>
                            <span className="ml-4">gsahadevan@outlook.com</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

Home.displayName = 'Home';
export default Home;
