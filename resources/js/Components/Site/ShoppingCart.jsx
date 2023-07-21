import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQ, incrementQ, removeFromCart } from '../../features/cartSlice';
import { usePage } from '@inertiajs/inertia-react';
import { redirect } from "react-router-dom";

function ShoppingCart() {
    const {currency} = usePage().props

    let { cartItems, totalPrice } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    // const router = 

    return (
        <div id="shopping-cart"
            className="fixed top-0 right-0 z-50 min-h-screen lg:w-1/4 md:1/3 w-full overflow-y-auto transition-transform translate-x-full dark:bg-gray-800"
            tabIndex="-1" aria-labelledby="shopping-cart">

            <div className="flex h-screen flex-col  bg-slate-50 shadow-xl  dark:bg-gray-800 dark:text-white">
                <div className="flex items-start justify-between px-6 py-8  bg-blue-100 dark:bg-slate-700">
                    <h2 className="text-lg font-medium dark:text-white" id="slide-over-title">Shopping cart
                    </h2>
                    <div className="ml-3 flex h-7 items-center">
                        <button type="button" data-drawer-hide="shopping-cart" aria-controls="shopping-cart"
                            className="dark:text-red-600 bg-transparent hover:bg-red-200 hover:text-red-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-red-900 dark:hover:text-red-500">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"></path>
                            </svg>
                            <span className="sr-only">Close menu</span>
                        </button>
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto w-full sm:px-6">
                    <ul id="cart" role="list" className="flex flex-col space-y-2 w-full">

                        {
                            cartItems.map((item, index) => (
                                <li key={index} className="flex py-6">
                                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img src={item.images[0].url} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                        <div>
                                            <div className="flex justify-between text-base font-medium text-gray-900 dark:text-white">
                                                <h3>
                                                    <a href="#">{item.title}</a>
                                                </h3>
                                                <p className="ml-4">{currency.symbol}{item.price * item.quantity}</p>
                                            </div>
                                            <p className="mt-1 text-sm text-gray-500">Salmon</p>
                                        </div>
                                        <div className="flex flex-1 items-end justify-between text-sm">
                                            <p className="text-gray-500">Qty {item.quantity}</p>

                                            <div className="flex">
                                                <button onClick={() => { dispatch(incrementQ(item)) }} type="button" className="font-medium text-white p-1 px-3 py-2 text-xs rounded-l-md  bg-blue-600 hover:bg-blue-500"><i className="fa-solid fa-plus"></i></button>
                                                <button onClick={() => { dispatch(decrementQ(item)) }} type="button" className="font-medium text-white p-1 px-3 py-2 text-xs rounded-r-md bg-blue-600 hover:bg-blue-500"><i className="fa-solid fa-minus"></i></button>
                                                <button onClick={() => { dispatch(removeFromCart(item)) }} type="button" className="font-medium text-white p-1 px-3 py-2 text-xs rounded-full bg-red-600 hover:bg-red-500 ml-2"><i className="fa-solid fa-trash"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                            ))
                        }
                    </ul>
                </div>

                <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900 dark:text-white">
                        <p id="total">Total Price for {cartItems.length}Qty is {currency.symbol}{totalPrice}</p>

                    </div>
                    <p className="mt-0.5 text-sm text-gray-500 dark:text-white">Shipping and taxes calculated at checkout.
                    </p>
                    <div className="mt-6">
                        <a href={route('cart')}
                            className="flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700">View Cart</a>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                            or <button type="button" data-drawer-hide="shopping-cart" aria-controls="shopping-cart"
                                className="font-medium text-blue-600 hover:text-blue-500">Continue
                                Shopping<span aria-hidden="true"> &rarr;</span></button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart