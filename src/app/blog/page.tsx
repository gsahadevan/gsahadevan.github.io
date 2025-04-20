import React, { JSX } from 'react';
import { getPosts } from '../../api';
import { Typography } from 'src/components/Typography';
import { Blogs } from 'src/components/Blogs';

const BlogListPage = (): JSX.Element => {
    return (
        <>
            <header className='max-w-2xl'>
                <Typography type='title'>
                    Writing on software design, coding tools, and the software industry in general.
                </Typography>
                <Typography type='copy'>
                    All of my long-form thoughts on programming, leadership, product design, and more, collected in
                    chronological order.
                </Typography>
            </header>
            <div className='mt-16 sm:mt-20'>
                <div className='md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40'>
                    <div className='flex max-w-3xl flex-col space-y-16'>
                        <Blogs blogs={getPosts()} />
                    </div>
                </div>
            </div>
        </>
    );
};

BlogListPage.displayName = 'BlogListPage';
export default BlogListPage;
