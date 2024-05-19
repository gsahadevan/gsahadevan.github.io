import Link from 'next/link';
import formatDate from '../../utils/format';
import Tag from '../typography/Tag';

const Blogs = ({ posts }: { posts: any}): JSX.Element => {
    if (!posts) {
        return <> </>;
    }

    const sortedPosts = posts.sort((a: any, b: any) => {
        if (a.data.date > b.data.date) return -1;
        if (a.data.date < b.data.date) return 1;
        return 0;
    });

    return (
        <div className='space-y-6'>
            {sortedPosts.map((post: any) => (
                <div key={post.slug}>
                    <Link href={'/blog/' + post.slug}>
                        <div className='flex items-start justify-between px-4 py-2 mb-2 -mx-4 space-x-4 transition-colors duration-100 ease-in-out rounded-md hover:bg-gray-50'>
                            <div>
                                <span className='block text-sm text-gray-700 md:hidden'>
                                    {formatDate(post.data.date)}
                                </span>
                                <h2 className='text-2xl font-extrabold text-gray-600'>
                                    {post.data.title}
                                </h2>
                                <p className='py-4 md:pr-48 leading-7 text-gray-700'>
                                    {post.data.excerpt}
                                </p>
                                <div className='inline-block space-x-2 text-gray-700'>
                                    {post.data.tags.map((tag: string) => (
                                        <Tag key={tag}>
                                            <a>#{tag}</a>
                                        </Tag>
                                    ))}
                                </div>
                            </div>
                            <div className='flex-shrink-0'>
                                <span className='hidden text-sm text-gray-700 md:block'>
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

export default Blogs;
