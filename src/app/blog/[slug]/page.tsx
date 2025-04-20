import React from 'react';
import ReactMarkdown from 'react-markdown';
import { getAllSlugs, getPostContent } from '../../../api';
import Link from 'next/link';
import { formatDate } from 'src/utils/format';
import { Blog } from 'contentlayer/generated';

export const generateStaticParams = async () => {
    const slugs = getAllSlugs();
    return slugs.map(slug => ({
        slug: slug,
    }));
};

const BlogPage = (blog: Blog) => {
    const slug = blog.slug;
    const { data, content } = getPostContent(slug);

    return (
        <div className='xl:relative'>
            <div className='mx-auto max-w-2xl'>
                <Link
                    href={'/blog/'}
                    className='group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 transition lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20'>
                    <svg
                        viewBox='0 0 16 16'
                        fill='none'
                        aria-hidden='true'
                        className='h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400'>
                        <path
                            d='M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'></path>
                    </svg>
                </Link>
                <article>
                    <header className='flex flex-col'>
                        <h1 className='mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100'>
                            {data.title}
                        </h1>
                        <time
                            dateTime='2022-09-05'
                            className='order-first flex items-center text-base text-zinc-400 dark:text-zinc-500'>
                            <span className='h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500'></span>
                            <span className='ml-3'>{formatDate(data.date)}</span>
                        </time>
                    </header>
                    <div className='mt-8 prose dark:prose-invert' data-mdx-content='true'>
                        <ReactMarkdown>{content}</ReactMarkdown>
                    </div>
                </article>
            </div>
        </div>
    );
};

BlogPage.displayName = 'BlogPage';
export default BlogPage;
