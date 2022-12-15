function Tag({ children }) {
    return (
        <span className='inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2'>
            {children}
        </span>
    );
}

export default Tag;
