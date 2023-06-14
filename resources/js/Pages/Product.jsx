import { usePage } from '@inertiajs/inertia-react'
import React from 'react'
import { Carousel } from 'flowbite-react';
import SiteLayout from '../Layouts/SiteLayout';
import ProductCard from '../Components/Site/ProductCard';
import AddToCartButton from '../Components/Site/AddToCartButton';
import Reviews from '../Components/Site/Reviews';


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

            {/* {{-- Reviews --}} */}
            <Reviews product_id={product.id} product_slug={product.slug} />

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