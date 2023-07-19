import React from 'react'
// import Categories from './../../../Pages/Dashboard/Categories';
import { usePage } from '@inertiajs/inertia-react';

function ProductPreview({ product }) {
    return (
        <div id="drawer-read-product-advanced" className="overflow-y-auto fixed top-0 left-0 z-50 p-4 w-full max-w-lg h-screen bg-white transition-transform -translate-x-full dark:bg-gray-800" tabIndex="-1" aria-labelledby="drawer-label" aria-hidden="true">
            <div>
                <h4 id="read-drawer-label" className="mb-1.5 leading-none text-xl font-semibold text-gray-900 dark:text-white">{product.title}</h4>
                <h5 className="mb-5 text-xl font-bold text-gray-900 dark:text-white">${product.price}</h5>
            </div>
            <button type="button" data-drawer-dismiss="drawer-read-product-advanced" aria-controls="drawer-read-product-advanced" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Close menu</span>
            </button>
            <div className="grid grid-cols-3 gap-4 mb-4 sm:mb-5">
                {
                    product.images &&
                    product.images.map((image, index) => (
                        <div key={index} className="p-2 w-auto bg-gray-100 rounded-lg dark:bg-gray-700">
                            <img src={image.url} alt="iMac Side Image" />
                        </div>
                    ))
                }
            </div>
            <dl className="sm:mb-5">
                <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Details</dt>
                <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{product.desc}</dd>
            </dl>

            <dl className="sm:mb-5">
                <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Categories</dt>
                <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400 flex space-x-2">
                    {
                        product.categories.map((item, id) => (
                            <a key={id} href={route('category.products', item.slug)}
                                className="text-blue-600 hover:underline">#{item.name}</a>
                        ))
                    }
                </dd>
            </dl>

            <div className="flex bottom-0 left-0 justify-center pb-4 space-x-4 w-full">
                <button type="button" className="text-white w-full inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg aria-hidden="true" className="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                        <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                    </svg>
                    Edit
                </button>
                <button type="button" className="inline-flex w-full items-center text-white justify-center bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
                    <svg aria-hidden="true" className="w-5 h-5 mr-1.5 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" />
                    </svg>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default ProductPreview