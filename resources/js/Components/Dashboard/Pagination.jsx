import React from 'react'

function Pagination({data, ziggy}) {
    return (
        <footer className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
            aria-label="Table navigation">
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Showing
                <span className="font-semibold text-gray-900 dark:text-white">{data.from}-{data.to}</span>
                of
                <span className="font-semibold text-gray-900 dark:text-white">{data.total}</span>
            </span>
            <ul className="inline-flex items-stretch -space-x-px">
                {
                    data.prev_page_url &&
                    <li>
                        <a href={data.prev_page_url}
                            className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span className="sr-only">Previous</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                    clipRule="evenodd" />
                            </svg>
                        </a>
                    </li>
                }
                {
                    data.current_page > 3 &&
                    <ul className='flex'>
                        <li>
                            <a href={data.first_page_url}
                                className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                        </li>
                        <li>
                            <span
                                className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</span>
                        </li>
                    </ul>
                }
                <li>
                    {
                        data.current_page > 1 &&
                        <ul className='flex'>
                            {
                                data.current_page - 2 >= 1 &&
                                <li>
                                    <a href={`${ziggy.location}?page=${data.current_page - 2}`}
                                        className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{data.current_page - 2}</a>
                                </li>
                            }
                            {
                                data.current_page - 1 >= 1 &&
                                <li>
                                    <a href={`${ziggy.location}?page=${data.current_page - 1}`}
                                        className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{data.current_page - 1}</a>
                                </li>
                            }
                        </ul>
                    }
                </li>
                <li>
                    <a href={`${ziggy.location}?page=${data.current_page}`} aria-current="page"
                        className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">{data.current_page}</a>
                </li>
                <li>
                    {
                        data.current_page <= data.last_page - 1 &&
                        <ul className='flex'>
                            {
                                data.current_page + 1 <= data.last_page &&
                                <li>
                                    <a href={`${ziggy.location}?page=${data.current_page + 1}`}
                                        className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{data.current_page + 1}</a>
                                </li>
                            }
                            {
                                data.current_page + 2 <= data.last_page &&
                                <li>
                                    <a href={`${ziggy.location}?page=${data.current_page + 2}`}
                                        className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{data.current_page + 2}</a>
                                </li>
                            }
                        </ul>
                    }
                </li>
                {
                    data.current_page < data.last_page - 2 &&
                    <ul className='flex'>
                        <li>
                            <span
                                className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</span>
                        </li>
                        <li>
                            <a href={data.last_page_url}
                                className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{data.last_page}</a>
                        </li>
                    </ul>
                }
                {
                    data.next_page_url &&
                    <li>
                        <a href={data.next_page_url}
                            className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span className="sr-only">Next</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd" />
                            </svg>
                        </a>
                    </li>
                }
            </ul>
        </footer>
    )
}

export default Pagination