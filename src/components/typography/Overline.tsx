import React, { JSX, ReactNode } from "react";

export const Overline = ({ children }: { children: ReactNode }): JSX.Element => {
    return <div className='flex items-center text-sm text-zinc-400 dark:text-zinc-500'>{children}</div>;
}
