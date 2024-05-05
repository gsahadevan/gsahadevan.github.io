import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), 'pages/blog/posts');

export function getPost(slug) {
    const fullPath = join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return { data, content, slug };
}

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug) {
    const realSlug = slug.replace(/\.mdx$/, '');
    return getPost(realSlug);
}

export function getPosts() {
    const slugs = getPostSlugs();
    const posts = slugs.map(slug => getPostBySlug(slug));
    return posts;
}
