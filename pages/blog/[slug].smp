import ReactMarkdown from 'react-markdown';
import { getPost, getPostSlugs } from '../api';

function PostPage({ data, content, slug }) {
    return (
        <>
            <main className='max-w-2xl px-8 mx-auto my-10 lg:max-w-5xl prose'>
                <ReactMarkdown>{content}</ReactMarkdown>
            </main>
        </>
    );
}

export async function getStaticPaths() {
    const files = getPostSlugs();
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.mdx', ''),
        },
    }));
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }) {
    const { data, content } = getPost(slug);
    return {
        props: {
            data,
            content,
            slug,
        },
    };
}

export default PostPage;
