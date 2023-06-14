import { usePage } from '@inertiajs/inertia-react'
import React from 'react'
import { Carousel } from 'flowbite-react';
import SiteLayout from '../Layouts/SiteLayout';
import ProductCard from '../Components/Site/ProductCard';
import AddToCartButton from '../Components/Site/AddToCartButton';


function Product() {
    const { product, related } = usePage().props;
    return (
        <SiteLayout>
            <section>
                <div className="antialiased">
                    <div className="py-6">
                        {/* <!-- Breadcrumbs --> */}
                        <div className="max-w-7xl mx-auto px-4 pt-10 sm:px-6 lg:px-8">
                            <div className="flex items-center space-x-2 text-gray-400 text-sm">
                                <a href={route('home')} className="hover:underline hover:text-gray-600">Home</a>
                                <span>
                                    <svg className="h-5 w-5 leading-none text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                                <a href={route('shop')} className="hover:underline hover:text-gray-600">Shop</a>
                                <span>
                                    <svg className="h-5 w-5 leading-none text-gray-300" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                                <span>Product</span>
                            </div>
                        </div>
                        {/* <!-- ./ Breadcrumbs --> */}

                        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 h-[80vh]">
                            <div className="flex flex-col md:flex-row -mx-4">
                                <div className="md:flex-1 px-4 h-full">
                                    <div className="pt-2 h-full">
                                        <div className="h-64 md:h-96 rounded-lg  mb-4">
                                            <Carousel slide={false}>
                                                {
                                                    product.images.map((image, index) => (

                                                        <img
                                                            key={index}
                                                            className=" h-full w-full"
                                                            alt="Product Image"
                                                            src={image.url}
                                                        />
                                                    ))
                                                }
                                            </Carousel>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:flex-1 px-4">
                                    <h2
                                        className="dark:text-white mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                                        {product.title}</h2>
                                    <div className="text-gray-500 text-sm flex space-x-2">
                                        <span>Categories </span>
                                        <ul className="flex space-x-2">
                                            {
                                                product.categories.map(item => (
                                                    <li key={item.category.id}><a href={route('category.products', item.category.slug)}
                                                        className="text-blue-600 hover:underline">#{item.category.name}</a></li>
                                                ))
                                            }
                                        </ul>
                                    </div>

                                    <div className="flex items-center space-x-4 my-4">
                                        <div>
                                            <div className="rounded-lg  flex py-2 px-3 font-bold text-blue-600 text-3xl">
                                                <span className="">$</span>
                                                <span className="">{product.price}</span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-blue-500 text-xl font-semibold">Save 12%</p>
                                            <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p>
                                        </div>
                                    </div>

                                    <p className="text-gray-500 dark:text-gray-400">
                                        {product.desc}
                                    </p>

                                    <div className="flex py-4 space-x-4">
                                        <AddToCartButton product={product} text="Add to Cart" classes='flex items-center justify-center gap-4 h-14 px-6 py-2 font-semibold rounded-xl bg-blue-600 hover:bg-blue-500 text-white' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* {{-- latest Review --}} */}
            <section className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mt-20">
                <div className="bg-white dark:bg-gray-900 py-8 lg:py-16">
                    <div className=" mx-auto px-4">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Reviews (20)</h2>
                        </div>
                        <form className="mb-6">
                            <div
                                className="py-2 px-2 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                                <label htmlFor="comment" className="sr-only">Your comment</label>
                                <textarea id="comment" rows="6"
                                    className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                                    placeholder="Write a comment..." required></textarea>
                            </div>
                            <button type="submit"
                                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                Add Review
                            </button>
                        </form>
                        <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
                            <footer className="flex justify-between items-center mb-2">
                                <div className="flex items-center">
                                    <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"><span className="mr-2 w-6 h-6 rounded-full"><i className="fa-sharp fa-solid fa-user fa-lg"></i></span>Michael Gough</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Feb. 8, 2022</p>
                                </div>
                                <button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1"
                                    className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                    type="button">
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                                        </path>
                                    </svg>
                                    <span className="sr-only">Comment settings</span>
                                </button>
                                {/* <!-- Dropdown menu --> */}
                                <div id="dropdownComment1"
                                    className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdownMenuIconHorizontalButton">
                                        <li>
                                            <a href="#"
                                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                                        </li>
                                    </ul>
                                </div>
                            </footer>
                            <p className="text-gray-500 dark:text-gray-400">Very straight-to-point article. Really worth time reading.
                                Thank you! But tools are just the
                                instruments for the UX designers. The knowledge of the design tools are as important as the
                                creation of the design strategy.</p>
                            <div className="flex items-center mt-4 space-x-4">
                                <button type="button"
                                    className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
                                    <svg aria-hidden="true" className="mr-1 w-4 h-4" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z">
                                        </path>
                                    </svg>
                                    Reply
                                </button>
                            </div>
                        </article>
                        <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
                            <footer className="flex justify-between items-center mb-2">
                                <div className="flex items-center">
                                    <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"><span className="mr-2 w-6 h-6 rounded-full"><i className="fa-sharp fa-solid fa-user fa-lg"></i></span>Michael Gough</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Feb. 8, 2022</p>
                                </div>
                                <button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1"
                                    className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                    type="button">
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                                        </path>
                                    </svg>
                                    <span className="sr-only">Comment settings</span>
                                </button>
                                {/* <!-- Dropdown menu --> */}
                                <div id="dropdownComment1"
                                    className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdownMenuIconHorizontalButton">
                                        <li>
                                            <a href="#"
                                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                                        </li>
                                    </ul>
                                </div>
                            </footer>
                            <p className="text-gray-500 dark:text-gray-400">Very straight-to-point article. Really worth time reading.
                                Thank you! But tools are just the
                                instruments for the UX designers. The knowledge of the design tools are as important as the
                                creation of the design strategy.</p>
                            <div className="flex items-center mt-4 space-x-4">
                                <button type="button"
                                    className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
                                    <svg aria-hidden="true" className="mr-1 w-4 h-4" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z">
                                        </path>
                                    </svg>
                                    Reply
                                </button>
                            </div>
                        </article>
                        <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
                            <footer className="flex justify-between items-center mb-2">
                                <div className="flex items-center">
                                    <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"><span className="mr-2 w-6 h-6 rounded-full"><i className="fa-sharp fa-solid fa-user fa-lg"></i></span>Michael Gough</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Feb. 8, 2022</p>
                                </div>
                                <button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1"
                                    className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                    type="button">
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                                        </path>
                                    </svg>
                                    <span className="sr-only">Comment settings</span>
                                </button>
                                {/* <!-- Dropdown menu --> */}
                                <div id="dropdownComment1"
                                    className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdownMenuIconHorizontalButton">
                                        <li>
                                            <a href="#"
                                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                                        </li>
                                    </ul>
                                </div>
                            </footer>
                            <p className="text-gray-500 dark:text-gray-400">Very straight-to-point article. Really worth time reading.
                                Thank you! But tools are just the
                                instruments for the UX designers. The knowledge of the design tools are as important as the
                                creation of the design strategy.</p>
                            <div className="flex items-center mt-4 space-x-4">
                                <button type="button"
                                    className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
                                    <svg aria-hidden="true" className="mr-1 w-4 h-4" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z">
                                        </path>
                                    </svg>
                                    Reply
                                </button>
                            </div>
                        </article>

                    </div>
                </div>
            </section>

            {/* {{-- Relative Products --}} */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
                <h4 className="text-2xl font-bold dark:text-white my-10">See Also</h4>
                {/* <!-- ✅ Grid Section - Starts Here 👇 --> */}
                <section className=" grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-10 gap-x-6 mt-10 mb-5">
                    {/* <!--   ✅ Product card 1 - Starts Here 👇 --> */}
                    {
                        related.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))
                    }
                </section>
                {/* <!-- 🛑 Grid Section - Ends Here --> */}
            </section>
        </SiteLayout>
    )
}

export default Product