import React from 'react'
import SiteLayout from '../Layouts/SiteLayout'
import { usePage } from '@inertiajs/inertia-react'

function Orders({ orders, message, error }) {
    const {currency} = usePage().props
    return (
        <SiteLayout>
            <div className="max-w-7xl mx-auto mt-20">
                {
                    message
                    &&
                    <div className="flex p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-300 dark:border-green-800" role="alert">
                        <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Info</span>
                        <div>
                            {message}
                        </div>
                    </div>
                }
                {
                    error
                    &&
                    <div className="flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-300 dark:border-green-800" role="alert">
                        <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Info</span>
                        <div>
                            {error}
                        </div>
                    </div>
                }

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Order Id
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <div className="flex items-center">
                                        Tracking Number
                                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" /></svg></a>
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <div className="flex items-center">
                                        Number Of Items
                                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" /></svg></a>
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <div className="flex items-center">
                                        Price
                                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" /></svg></a>
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <div className="flex items-center">
                                        Payment Status
                                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" /></svg></a>
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <div className="flex items-center">
                                        Products
                                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" /></svg></a>
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <div className="flex items-center">
                                        Date
                                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" /></svg></a>
                                    </div>
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((item, index) => (
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.id}
                                        </th>
                                        <td className="px-6 py-4">
                                            {item.tracking_number}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.products.length}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className=''>
                                                <div className="flex justify-between mt-1 mb-2">
                                                    <span className="font-semibold text-sm uppercase dark:text-white">({item.products.length}) Items </span>
                                                    <span className="font-semibold text-sm dark:text-white">{currency.symbol}{item.total_price}</span>
                                                </div>
                                                <div className="flex justify-between mt-1 mb-2">
                                                    <span className="font-semibold text-sm uppercase text-red-500">Shipping Cost</span>
                                                    <span className="font-semibold text-sm  text-red-500">+{currency.symbol}{item.shipping_cost}</span>
                                                </div>
                                                {
                                                    item.coupon_id
                                                    &&
                                                    <div className="flex justify-between mt-1 mb-2">
                                                        <span className="font-semibold text-sm uppercase text-green-500">Discount</span>
                                                        <span className="font-semibold text-sm  text-green-500">-{currency.symbol}{item.discount}</span>
                                                    </div>
                                                }
                                                <div className="flex font-semibold justify-between py-2 text-sm uppercase">
                                                    <span className=" dark:text-white">Total cost</span>
                                                    <span className=" dark:text-white">{currency.symbol}{item.total_price + item.shipping_cost - item.discount}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            {
                                                item.payment_status ?
                                                    <span className='uppercase bg-green-100 text-green-800 text-xs font-bold mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 border border-green-200 dark:text-green-300'>Completed</span>
                                                    :
                                                    <a href={route('payment', { 'order': item.id })} className='uppercase bg-yellow-100 text-yellow-800 text-xs font-bold mr-2 px-2.5 py-1 hover:brightness-95 rounded dark:bg-yellow-900 border border-yellow-200 dark:text-yellow-300'>Complete Order...</a>

                                            }
                                        </td>
                                        <td className="px-6 py-4 text-right flex flex-col space-y-2">
                                            {
                                                item.products.map((item, index) => (
                                                    <div key={index} className='flex space-x-2'>
                                                        <a href={route('product', item.slug)}>
                                                            <img className='hover:scale-105 transition-all ease-in-out rounded-lg w-10 h-10' src={item.images[0].url} alt={item.title} srcset="" />
                                                        </a>
                                                        <span>Q({item.pivot.quantity})</span>
                                                        <span>({currency.symbol+(item.price * item.pivot.quantity).toFixed(2)})</span>
                                                    </div>
                                                ))
                                            }
                                        </td>
                                        <td className="px-6 py-4 ">
                                            {item.created_at}
                                        </td>
                                    </tr>
                                ))
                            }


                        </tbody>
                    </table>
                </div>

            </div>
        </SiteLayout>
    )
}

export default Orders