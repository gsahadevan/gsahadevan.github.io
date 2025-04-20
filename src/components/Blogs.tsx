import { JSX } from "react";
import { BlogTile } from "./BlogTile";

export const Blogs = ({ posts }: { posts: any }): JSX.Element => {
    if (!posts) {
        return <> </>;
    }

    const sortedPosts = posts
        .filter((a: any) => !a.data.draft)
        .sort((a: any, b: any) => {
            if (a.data.date > b.data.date) return -1;
            if (a.data.date < b.data.date) return 1;
            return 0;
        });

    return (
        <>
            {sortedPosts.map((post: any, index: number) => (
                <BlogTile key={index} post={post} />
            ))}
        </>
    );
}
