import React from 'react';
import { getPosts } from '../../api';
import Blogs from '@/components/Navbar/Blogs';

export default function BlogListPage() {
    return (
        <main className='max-w-2xl px-8 mx-auto my-10 lg:max-w-5xl'>
            <h1 className='mb-8 text-4xl font-extrabold text-gray-700'>Blog List Here</h1>
            <Blogs posts={getPosts()} />
        </main>
    );
}
