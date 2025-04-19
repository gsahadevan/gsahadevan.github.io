import React, { JSX, ReactNode } from "react";

export const Headline = ({ children }: { children: ReactNode }): JSX.Element => {
    return <div className='mt-6 text-4xl leading-14 font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100'>{children}</div>;
}
