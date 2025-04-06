import Link from 'next/link';
import React, { JSX } from 'react';
import { formatDate } from '../../utils/format';
import { Overline } from '../Typography/Overline';

export const BlogTile = ({ post }: { post: any }): JSX.Element => {
    return (
        <div className='transition-colors duration-100 ease-in-out hover:bg-gray-100 rounded-lg p-4'>
            <Link href={'/blog/' + post.slug}>
                <div className='flex flex-col justify-between'>
                    <Overline>{formatDate(post.data.date)}</Overline>
                    <div className='mt-2 text-sm font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100'>{post.data.title}</div>
                    <div className='mt-4 text-sm text-zinc-600 dark:text-zinc-400'>{post.data.excerpt}</div>
                    <div className="mt-6 flex items-center text-sm font-medium text-teal-500 hover:underline">{'Read more -->'}</div>
                </div>
            </Link>
        </div>
    );
};

BlogTile.displayName = 'BlogTile';
