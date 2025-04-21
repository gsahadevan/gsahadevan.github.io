import { JSX } from 'react';
import { BlogTile } from './BlogTile';
import { BlogContent } from 'src/api/blog.types';

export const Blogs = ({ blogs }: { blogs: BlogContent[] }): JSX.Element => {
    if (!blogs) {
        return <> </>;
    }

    const sortedBlogs = blogs
        .filter((blog: BlogContent) => !blog.data.draft)
        .sort((blogA: BlogContent, blogB: BlogContent) => {
            if (blogA.data.date > blogB.data.date) return -1;
            if (blogA.data.date < blogB.data.date) return 1;
            return 0;
        });

    return (
        <>
            {sortedBlogs.map((blog: BlogContent, index: number) => (
                <BlogTile key={index} blog={blog} />
            ))}
        </>
    );
};
