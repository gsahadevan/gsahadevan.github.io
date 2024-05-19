import React from 'react';
import ReactMarkdown from 'react-markdown';
import { getPostContent } from '../../../api';

const BlogPage = (props: any) => {
    const slug = props.params.slug;
    const getBlogContent = (slug: string) => {
        const { content } = getPostContent(slug);
        return content;
    }

    return (
        <article className='max-w-2xl px-8 mx-auto my-10 lg:max-w-5xl prose'>
            <ReactMarkdown>{getBlogContent(slug)}</ReactMarkdown>
        </article>
    );
}

export default BlogPage;
