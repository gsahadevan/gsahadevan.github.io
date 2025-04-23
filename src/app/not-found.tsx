import Link from 'next/link';
import { Typography } from 'src/components/Typography';

const NotFoundPage = () => {
    return (
        <div className='flex flex-col items-center'>
            <p className='text-base font-semibold text-zinc-400 dark:text-zinc-500'>404</p>

            <Typography type='title'>Page not found</Typography>

            <p className='mt-4 text-base text-zinc-600 dark:text-zinc-400'>
                Sorry, we couldn't find the page you're looking for.
            </p>

            <Link
                className='inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 mt-4'
                href='/'>
                Go back home
            </Link>
        </div>
    );
};

NotFoundPage.displayName = 'NotFoundPage';
export default NotFoundPage;
