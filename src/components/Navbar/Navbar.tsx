import Link from 'next/link';
import { JSX } from 'react';

const Navbar = (): JSX.Element => {
    return (
        <nav className='max-w-2xl py-4 px-8 mx-auto lg:max-w-10xl'>
            <div className='flex items-center justify-between'>
                <Link href='/'>Gauthaman Sahadevan</Link>
                <ul className='hidden md:flex justify-end space-x-12'>
                    <li>
                        <Link href='/blog'>
                            <span>Blog</span>
                        </Link>
                    </li>
                    <li>
                        <Link href='/hire-me'>
                            <span className='px-6 py-2 text-yellow-100 bg-yellow-600 rounded-full'>
                                Hire Me
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

Navbar.displayName = 'Navbar';
export default Navbar;
