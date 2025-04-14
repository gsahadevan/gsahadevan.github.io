'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const ThemeSwitcher = () => {

    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="pointer-events-auto">
            <button
                type="button"
                aria-label="Switch to light theme"
                className="group px-3 py-2 transition cursor-pointer"
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
                {resolvedTheme === 'dark' ? <MoonIcon className="h-5 w-5 text-rose-500 dark:text-rose-400" /> : <SunIcon className="h-5 w-5" />}
            </button>
        </div>
    )
};

ThemeSwitcher.displayName = 'ThemeSwitcher';
export default ThemeSwitcher;
