import formatDate from '@/utils/format';
import Link from 'next/link';

const BlogTile = ({ post }: { post: any }): JSX.Element => {
    return (
        <div key={post.slug} className='shadow-lg transition-colors duration-100 ease-in-out rounded-md hover:bg-gray-300 p-4'>
            <Link href={'/blog/' + post.slug}>
                <img className='rounded-t-lg' src={post.image} alt='' />
                <h2 className='text-2xl font-extrabold text-gray-600'>
                    {post.data.title}
                </h2>
                <p className='py-4 leading-7 text-gray-700'>
                    {post.data.excerpt}
                </p>
                <p className='text-sm text-gray-700'>
                    {formatDate(post.data.date)}
                </p>
            </Link>
        </div>
    );
};

export default BlogTile;
