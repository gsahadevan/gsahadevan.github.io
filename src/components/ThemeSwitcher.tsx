'use client';

import { useState, useEffect, JSX } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export const ThemeSwitcher = (): JSX.Element => {

    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <></>;
    }

    return (
        <div className="pointer-events-auto">
            <button
                type="button"
                aria-label="Switch to light theme"
                className="group rounded-full bg-white/90 px-3 py-2 cursor-pointer shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
                {resolvedTheme === 'dark' ? <MoonIcon className="h-5 w-5 text-teal-500 dark:text-teal-400" /> : <SunIcon className="h-5 w-5" />}
            </button>
        </div>
    )
};
