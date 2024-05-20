import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), 'src/posts');

export function getPostContent(slug) {
    const fullPath = join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return { data, content, slug };
}

export function getBlogMetadata(slug) {
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

export function generateStaticParams() {
    const blogs = getBlogMetadata();
    return blogs.map((blog) => ({ slug: blog.slug }));
}

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug) {
    const realSlug = slug.replace(/\.mdx$/, '');
    return getPostContent(realSlug);
}

export function getPosts() {
    const slugs = getPostSlugs();
    const posts = slugs.map(slug => getPostBySlug(slug));
    return posts;
}

export function getAllSlugs() {
    const slugs = getPostSlugs();
    return slugs.map(slug => slug.replace(/\.mdx$/,  ''));
}
