import { JSX, ReactNode } from "react";

const Heading = ({ children }: { children: ReactNode }): JSX.Element => {
    return <div className='text-xl font-bold'>{children}</div>;
}

export default Heading;
