import React, { JSX, ReactNode } from "react";

export const Display = ({ children }: { children: ReactNode }): JSX.Element => {
    return <div className='text-8xl my-10'>{children}</div>;
}
