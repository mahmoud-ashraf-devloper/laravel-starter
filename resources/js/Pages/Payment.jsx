import React, { useEffect, useState } from 'react'
import SiteLayout from '../Layouts/SiteLayout'

import Cookies from 'js-cookie';
import { loadScript } from "@paypal/paypal-js";

function Payment({ order }) {



    const [cookieCoupon, setCookieCoupon] = useState('');
    useEffect(() => {
        if (Cookies.get('coupon')) {
            setCookieCoupon(JSON.parse(Cookies.get('coupon')))
            console.log(JSON.parse(Cookies.get('coupon')));
        }
    }, [])

    console.log(order);

    return (
        <SiteLayout>
            <div className="max-w-7xl pt-10 mx-auto px-4 sm:px-6 lg:px-8 ">

                <ol className="flex items-center py-6">
                    <li className="relative w-full mb-6">
                        <div className="flex items-center">
                            <div
                                className="z-10 flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                <svg aria-hidden="true" className="w-4 h-4 text-blue-100 dark:text-blue-300" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"></path>
                                </svg>
                            </div>
                            <div className="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                        </div>
                        <div className="mt-3">
                            <h3 className="font-medium text-gray-900 dark:text-white">Login</h3>
                        </div>
                    </li>
                    <li className="relative w-full mb-6">
                        <div className="flex items-center">
                            <div
                                className="z-10 flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                <svg aria-hidden="true" className="w-4 h-4 text-blue-100 dark:text-blue-300" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"></path>
                                </svg>
                            </div>
                            <div className="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                        </div>
                        <div className="mt-3">
                            <h3 className="font-medium text-gray-900 dark:text-white">Billing Info</h3>
                        </div>
                    </li>

                    <li className="relative w-full mb-6">
                        <div className="flex items-center">
                            <div
                                className="z-10 flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                <svg aria-hidden="true" className="w-4 h-4 text-blue-100 dark:text-blue-300" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="mt-3">
                            <h3 className="font-medium text-gray-900 dark:text-white">Payment</h3>
                        </div>
                    </li>
                </ol>

                <div className='flex flex-col border border-slate-300 dark:border-slate-600 bg-slate-50 md:dark:bg-slate-800  dark:bg-gray-800 dark:dark:bg-gray-800 rounded-lg '>
                    <div className="w-full px-2 py-4 md:px-4   ">
                        <div className='grid md:grid-cols-6 gap-x-8'>

                            <div className='col-span-4 overflow-auto'>
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase  dark:bg-gray-800 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className=" py-4">
                                                Product
                                            </th>
                                            <th scope="col" className=" py-4">
                                                quantity
                                            </th>
                                            <th scope="col" className=" py-4">
                                                Price
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            order.products.map((item, index) => (
                                                <tr key={index} className=" border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                    <td scope="row" className=" py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        <span className='flex space-x-1 items-center'>
                                                            <img className='w-14 ' src={item.images[0].url} alt="" />
                                                            <span className='hidden md:block '>{item.title}</span>
                                                        </span>
                                                    </td>
                                                    <td className=" py-4">
                                                        {item.pivot.quantity}

                                                    </td>
                                                    <td className=" py-4">
                                                        ${item.price}
                                                    </td>

                                                </tr>
                                            ))
                                        }

                                    </tbody>
                                </table>
                            </div>
                            <div className='col-span-2'>
                                <h1 className="text-blue-600 text-lg font-bold pb-2">Order Summary</h1>
                                <div className='max-w-md'>
                                    <div className="flex justify-between mt-10 mb-5">
                                        <span className="font-semibold text-sm uppercase dark:text-white">({order.products.length}) Items </span>
                                        <span className="font-semibold text-sm dark:text-white">${order.total_price}</span>
                                    </div>
                                    <div className="flex justify-between mt-10 mb-5">
                                        <span className="font-semibold text-sm uppercase text-red-500">Shipping Cost</span>
                                        <span className="font-semibold text-sm  text-red-500">+${order.shipping_cost}</span>
                                    </div>
                                    {
                                        order.coupon_id
                                        &&
                                        <div className="flex justify-between mt-10 mb-5">
                                            <span className="font-semibold text-sm uppercase text-green-500">Discount</span>
                                            <span className="font-semibold text-sm  text-green-500">-${order.discount}</span>
                                        </div>
                                    }
                                    <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                        <span className=" dark:text-white">Total cost</span>
                                        <span className=" dark:text-white">${order.total_price + order.shipping_cost - order.discount}</span>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>
                    <div className="w-full flex py-20 justify-center">
                        <a href={route('payment.paypal.create.order', order.id)}
                            className="w-80 h-20 justify-center text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-bold rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2">

                            Pay with <i class="fa-brands fa-cc-paypal fa-2xl pl-2"></i>


                        </a>
                        <a href={route('payment.stripe', order.id)} type="button"
                            className="w-80 h-20 font-bold justify-center text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 mr-2 mb-2">
                            Pay with
                            <i class="fa-brands fa-stripe-s fa-xl rotate-6 pl-4"></i>
                            tripe
                        </a>

                    </div>

                </div>

            </div>
        </SiteLayout>
    )
}

export default Payment