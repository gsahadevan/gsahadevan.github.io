import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export interface IPostMetadata {
    title: string;
    excerpt: string;
    date: string;
    image: string;
    slug: string;
};

const postsDirectory = join(process.cwd(), 'src/posts');

export const getPostContent = (slug: string) => {
    const fullPath = join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return { data, content, slug };
}

export const getBlogMetadata = (slug: string): IPostMetadata => {
    const fullPath = join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return {
        title: data.title,
        excerpt: data.description,
        image: data.image,
        date: data.date,
        slug: slug
    };
}

export const generateStaticParams = () => {
    const blogs = getBlogMetadata();
    return blogs.map((blog) => ({ slug: blog.slug }));
}

export const getPostSlugs = () => {
    return fs.readdirSync(postsDirectory);
}

export const getPostBySlug = (slug: string) => {
    const realSlug = slug.replace(/\.mdx$/, '');
    return getPostContent(realSlug);
}

export const getPosts = () => {
    const slugs = getPostSlugs();
    const posts = slugs.map(slug => getPostBySlug(slug));
    return posts;
}

export const getAllSlugs = () => {
    const slugs = getPostSlugs();
    return slugs.map(slug => slug.replace(/\.mdx$/,  ''));
}
