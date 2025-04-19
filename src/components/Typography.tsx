import { ReactNode } from "react";

export interface ITypographyProps {
    children: ReactNode;
    type: 'copy' | 'display' | 'headling' | 'overline' | 'subtitle' | 'tag' | 'title';
}

export const Typography = ({
    children,
    type = 'copy',
}, ITypographyProps): JSX.Element => {

    switch (type) {
        case 'copy':
            return <div className='mt-8 text-base leading-7 text-zinc-600 dark:text-zinc-400'>{children}</div>;
        case 'display':
            return <div className='text-8xl my-10'>{children}</div>;
        case 'headling':
            return <div className='text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100'>{children}</div>;
        case 'overline':
            return <div className='flex items-center text-sm text-zinc-400 dark:text-zinc-500'>{children}</div>;
        case 'subtitle':
            return <div className='mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100'>{children}</div>;
        case 'tag':
            return <div className='mt-6 text-xl font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100'>{children}</div>;
        case 'title':
            return <div className='mt-6 text-xl font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100'>{children}</div>;
        default:
            return <>{children}</>;
    };
}
