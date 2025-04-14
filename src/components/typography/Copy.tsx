import React, { JSX, ReactNode } from "react";

export const Copy = ({ children }: { children: ReactNode }): JSX.Element => {
    return <div className='mt-8 text-base leading-7 text-zinc-600 dark:text-zinc-400'>{children}</div>;
}
