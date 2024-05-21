import Link from 'next/link';
import formatDate from '../../utils/format';
import Tag from '../typography/Tag';
import BlogTile from './BlogTile';

const Blogs = ({ posts }: { posts: any }): JSX.Element => {
    if (!posts) {
        return <> </>;
    }

    const sortedPosts = posts.sort((a: any, b: any) => {
        if (a.data.date > b.data.date) return -1;
        if (a.data.date < b.data.date) return 1;
        return 0;
    });

    return (
        <>
            {sortedPosts.map((post: any) => (
                <BlogTile post={post} />
            ))}
        </>
    );
}

export default Blogs;
