import Link from 'next/link';
import { MenuIcon } from '@heroicons/react/solid';

function Nav() {
    const toggleMobileMenu = () => {
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.toggle('hidden');
    };

    const hideMobileMenu = () => {
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.add('hidden');
    };
    return (
        <>
            <nav className='text-indigo-100 bg-indigo-600'>
                <div className='max-w-2xl py-4 px-8 mx-auto lg:max-w-5xl'>
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

                        <div className='md:hidden flex items-center'>
                            <button onClick={toggleMobileMenu}>
                                <MenuIcon className='w-6 h-6' />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <div
                id='mobile-menu'
                className='hidden md:hidden flex flex-col absolute w-full px-8 bg-gray-100'>
                <Link href='/blog'>
                    <span className='py-2 px-4 text-sm' onClick={hideMobileMenu}>
                        Blog
                    </span>
                </Link>
                <Link href='/hire-me'>
                    <span className='py-2 px-4 text-sm' onClick={hideMobileMenu}>
                        Hire Me
                    </span>
                </Link>
            </div>
        </>
    );
}

export default Nav;
