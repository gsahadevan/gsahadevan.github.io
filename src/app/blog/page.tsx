import React, { JSX } from 'react';
import { getPosts } from '../../api';
import Blogs from '@/components/Navbar/Blogs';

const BlogListPage = (): JSX.Element => {
    return (
        <main className='max-w-2xl px-8 mx-auto my-10 lg:max-w-5xl'>
            <div className='grid grid-cols gap-4'>
                <Blogs posts={getPosts()} />
            </div>
        </main>
    );
}

BlogListPage.displayName = 'BlogListPage';
export default BlogListPage;
