export interface Blog {
    title: string;
    summary: string;
    image: string;
    date: string;
    slug: string;
}

export interface BlogContent {
    data: {
        [key: string]: any;
    };
    content: string;
    slug: string;
}
