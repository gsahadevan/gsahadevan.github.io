import PostsList from '../layouts/PostsList';
import { getPosts } from '../api';

function Blog({ posts }) {
    return (
        <>
            <main className='max-w-2xl px-8 mx-auto my-10 lg:max-w-5xl'>
                <h1 className='mb-8 text-4xl font-extrabold text-gray-700 dark:text-gray-300'>Blog</h1>
                <PostsList posts={posts} />
            </main>
        </>
    );
}

export async function getStaticProps() {
    const posts = getPosts();
    return { props: { posts } };
}

export default Blog;
