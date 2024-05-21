import formatDate from '@/utils/format';
import Link from 'next/link';

const BlogTile = ({ post }: { post: any }): JSX.Element => {
    return (
        <div key={post.slug} className='transition-colors duration-100 ease-in-out hover:bg-gray-100 rounded-lg'>
            <Link href={'/blog/' + post.slug}>
                <img className='rounded-t-lg' src={post.data.image} alt='' />
                <div className='p-4 flex flex-col justify-between'>
                    <h2 className='pb-4 text-2xl font-extrabold text-gray-600'>
                        {post.data.title}
                    </h2>
                    <p className='pb-4 leading-7 text-gray-700'>
                        {post.data.excerpt}
                    </p>
                    <p className='text-sm text-gray-700'>
                        {formatDate(post.data.date)}
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default BlogTile;
