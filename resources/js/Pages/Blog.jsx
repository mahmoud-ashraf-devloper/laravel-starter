import React from 'react'
import SiteLayout from '../Layouts/SiteLayout'

function Blog() {
    return (
        <SiteLayout>
            <div className="max-w-[88rem] mx-auto relative z-10 flex flex-col min-h-screen bg-white dark:bg-gray-900 dark:text-gray-400">
                <main className="grow">
                    <main className="pt-6 pb-8 bg-white lg:pb-16 dark:bg-gray-900">
                        <div className="flex justify-between px-4 mx-auto max-w-8xl">
                            <aside className='hidden lg:block text-end lg:w-80 '>
                                <div className="sticky top-24 ">
                                    asside left
                                </div>
                            </aside>
                            <article
                                className="w-full pt-10 max-w-2xl mx-auto format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                                <header className="mb-4 not-format">
                                    <h1
                                        className="mb-2 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                                        Learn how to use Flowbite Blocks with Next.js and a Headless CMS</h1>
                                    <div className="flex flex-wrap mb-4"><a
                                        className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 hover:bg-blue-200 dark:hover:bg-blue-300 dark:text-blue-800 mb-2"
                                        href="https://flowbite.com/blog/tag/flowbite/">#Flowbite</a><a
                                            className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 hover:bg-blue-200 dark:hover:bg-blue-300 dark:text-blue-800 mb-2"
                                            href="https://flowbite.com/blog/tag/next-js/">#Next.js</a></div>
                                    <div className="text-base">
                                        <address className="inline">Published by <a rel="author"
                                            className="text-gray-900 no-underline dark:text-white hover:underline"
                                            href="https://flowbite.com/blog/author/david/">David Dumont</a></address> <time
                                                pubdate="true" dateTime="2022-12-20T10:59:40.000+00:00"><time
                                                    dateTime="1671533980000">5 months ago</time></time>
                                    </div>
                                </header>
                                <div className="flex items-center justify-between">
                                    <aside aria-label="Share social media"><a
                                        href="https://twitter.com/intent/tweet?text=Learn%20how%20to%20use%20Flowbite%20Blocks%20with%20Next.js%20and%20a%20Headless%20CMS%20-%20Flowbite%20Blog%20https://flowbite.com/blog/learn-how-to-use-flowbite-blocks-with-a-headless-next-js-cms/"
                                        className="inline-flex items-center px-3 py-2 mr-2 text-xs font-medium text-gray-900 no-underline bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-slate-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><svg
                                            className="w-4 h-4 mr-2" fill="currentColor" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path
                                                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                                            </path>
                                        </svg> Tweet</a><a
                                            href="https://www.facebook.com/sharer/sharer.php?u=https://flowbite.com/blog/learn-how-to-use-flowbite-blocks-with-a-headless-next-js-cms/"
                                            className="inline-flex items-center px-3 py-2 mr-2 text-xs font-medium text-gray-900 no-underline bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-slate-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><svg
                                                className="w-4 h-4 mr-2" fill="currentColor" aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path
                                                    d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z">
                                                </path>
                                            </svg> Share</a><button type="button"
                                                className="inline-flex items-center px-3 py-2 text-xs font-medium text-gray-900 no-underline bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-slate-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><svg
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    strokeWidth="2" stroke="currentColor" aria-hidden="true" className="w-4 h-4 mr-2">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z">
                                                </path>
                                            </svg>Copy URL</button></aside>
                                </div>
                                <div>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi blanditiis quidem nesciunt accusamus ratione! Deleniti perspiciatis quibusdam est dolores doloremque exercitationem iusto omnis beatae commodi? Velit quae maxime commodi totam nesciunt voluptatibus facere eum deserunt id possimus, omnis nam nulla reprehenderit a illum veritatis! Cupiditate beatae id, veniam iusto debitis nisi nulla praesentium sit dolores. Doloribus, soluta rem labore odio quam error quae laborum reprehenderit! Nisi sunt accusamus odit minima optio itaque saepe quasi fuga vero reiciendis molestias ad inventore ullam aut, perspiciatis, error corporis explicabo recusandae sequi voluptate consectetur dolorem repellendus laboriosam a. Quos, quis minus? Odio, voluptatem ipsum?</p>
                                </div>

                            </article>
                            <aside className='hidden lg:block lg:w-80 '>
                                <div className="sticky top-24 ">
                                    asside right
                                </div>
                            </aside>
                        </div>
                    </main>
                </main>


            </div>
        </SiteLayout>
    )
}

export default Blog