import React from 'react';
import { getPosts } from '../../api';
import Blogs from '@/components/Navbar/Blogs';

export default function BlogListPage() {
    return (
        <main className='max-w-2xl px-8 mx-auto my-10 lg:max-w-5xl'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <Blogs posts={getPosts()} />
            </div>
        </main>
    );
}
