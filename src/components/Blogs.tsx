import { JSX } from 'react';
import { BlogTile } from './BlogTile';
import type { Blog } from 'contentlayer/generated';

export const Blogs = ({ blogs }: { blogs: Blog[] }): JSX.Element => {
    if (!blogs) {
        return <> </>;
    }

    const sortedBlogs = blogs
        .filter((blog: Blog) => !blog.draft)
        .sort((blogA: Blog, blogB: Blog) => {
            if (blogA.date > blogB.date) return -1;
            if (blogA.date < blogB.date) return 1;
            return 0;
        });

    return (
        <>
            {sortedBlogs.map((blog: Blog, index: number) => (
                <BlogTile key={index} blog={blog} />
            ))}
        </>
    );
};
