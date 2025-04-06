import React, { JSX, ReactNode } from "react";

export const Title = ({ children }: { children: ReactNode }): JSX.Element => {
    return <div className='mt-6 text-xl font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100'>{children}</div>;
}
