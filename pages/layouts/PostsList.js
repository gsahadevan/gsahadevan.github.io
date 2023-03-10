import Link from 'next/link';
import Tag from '../components/typography/Tag';
import formatDate from '../utils/format';

function PostsList({ posts }) {
    if (!posts) {
        return <> </>;
    }

    const sortedPosts = posts.sort((a, b) => {
        if (a.data.date > b.data.date) return -1;
        if (a.data.date < b.data.date) return 1;
        return 0;
    });

    return (
        <div className='space-y-6'>
            {sortedPosts.map(post => (
                <div key={post.slug}>
                    <Link href={'/blog/' + post.slug}>
                        <div className='flex items-start justify-between px-4 py-2 mb-2 -mx-4 space-x-4 transition-colors duration-100 ease-in-out rounded-md hover:bg-gray-50 dark:hover:bg-gray-900'>
                            <div>
                                <span className='block text-sm text-gray-700 dark:text-gray-600 md:hidden'>
                                    {formatDate(post.data.date)}
                                </span>
                                <h2 className='text-2xl font-extrabold text-gray-600 dark:text-gray-500'>
                                    {post.data.title}
                                </h2>
                                <p className='py-4 md:pr-48 leading-7 text-gray-700 dark:text-gray-600'>
                                    {post.data.excerpt}
                                </p>
                                <div className='inline-block space-x-2 text-gray-700 dark:text-gray-500'>
                                    {post.data.tags.map(tag => (
                                        <Tag key={tag}>
                                            <a>#{tag}</a>
                                        </Tag>
                                    ))}
                                </div>
                            </div>
                            <div className='flex-shrink-0'>
                                <span className='hidden text-sm text-gray-700 dark:text-gray-600 md:block'>
                                    {formatDate(post.data.date)}
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default PostsList;
