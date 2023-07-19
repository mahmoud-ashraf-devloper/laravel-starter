import React, { useEffect, useState } from 'react'
import SiteLayout from '../Layouts/SiteLayout'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQ, incrementQ, removeFromCart } from '../features/cartSlice';
import axios from 'axios';
import Cookies from 'js-cookie';
import { usePage } from '@inertiajs/inertia-react';

function Cart() {
    const {currency} = usePage().props

    let { cartItems, totalPrice } = useSelector(state => state.cart);

    const [coupon, setCoupon] = useState('');
    const [cookieCoupon, setCookieCoupon] = useState('');
    const [couponFeedbackSuccessMessage, setCouponFeedbackSuccessMessage] = useState('');
    const [couponFeedbackErrorMessage, setCouponFeedbackErrorMessage] = useState('');
    const dispatch = useDispatch();

    const [priceAfterCoupon, setPriceAfterCoupon] = useState();

    const calcTotalPriceAfterCoupon = () => {
        setPriceAfterCoupon(totalPrice);

        if (Cookies.get('coupon')) {
            let couponData = JSON.parse(Cookies.get('coupon'));
            // get the discount money
            let discountAmmount = totalPrice * couponData.discount_precent / 100;
            setCookieCoupon(couponData);

            if (couponData.limit > discountAmmount) {
                setPriceAfterCoupon(totalPrice - discountAmmount);
            } else {
                setPriceAfterCoupon(totalPrice - couponData.limit);
            }
        }
    }
 
    useEffect(() => {
        calcTotalPriceAfterCoupon()
    }, [totalPrice])


    const applyCoupon = () => {
        let formData = new FormData();
        formData.append('coupon', coupon);
        axios.post(route('user.coupon.apply'), formData).then((res) => {
            var in1Minutes = new Date(new Date().getTime() + 3 * 60 * 1000);
            Cookies.set('coupon', JSON.stringify(res.data.coupon), { expires: in1Minutes });
            setCookieCoupon(res.data.coupon)
            calcTotalPriceAfterCoupon();
            setCouponFeedbackSuccessMessage(res.data.message);
        }).catch((err) => {
            console.log(err);
            setCouponFeedbackErrorMessage('Invalid Coupon');
        });
    }

    const handleChangeOfCoupon = (e) => {
        setCoupon(e.target.value)
    }

    const calcTotalPrice = () => {

    }


    return (
        <SiteLayout>
            <div className="max-w-7xl mx-auto rounded-lg overflow-hidden px-2 mt-20">
                <div className="grid gap-1 md:grid-cols-12 my-10 ">
                    <div className="px-2 py-4 md:px-4 md:py-8 overflow-x-auto md:col-span-8 w-full bg-white  dark:bg-gray-800  rounded-lg">
                        <div className=" relative overflow-x-auto sm:rounded-lg">
                            <div className="flex justify-between pb-10 text-blue-600 text-lg font-bold">
                                <h1 className="">Shopping Cart</h1>
                                <h2 className="">{cartItems.length} Items</h2>
                            </div>
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Product
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            quantity
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Price
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cartItems.map((item, index) => (
                                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    <span className='flex space-x-1 items-center'>
                                                        <img className='w-14 ' src={item.images[0].url} alt="" />
                                                        {item.title}
                                                    </span>
                                                </th>
                                                <td className="px-6 py-4">
                                                    {item.quantity}

                                                </td>
                                                <td className="px-6 py-4">
                                                    {currency.symbol}{item.price}
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <div className="flex">
                                                        <button onClick={() => { dispatch(incrementQ(item)) }} type="button" className="font-medium text-white p-1 px-3 py-2 text-xs rounded-l-md  bg-blue-600 hover:bg-blue-500"><i className="fa-solid fa-plus"></i></button>
                                                        <button onClick={() => { dispatch(decrementQ(item)) }} type="button" className="font-medium text-white p-1 px-3 py-2 text-xs rounded-r-md bg-blue-600 hover:bg-blue-500"><i className="fa-solid fa-minus"></i></button>
                                                        <button onClick={() => { dispatch(removeFromCart(item)) }} type="button" className="font-medium  p-1 px-3 py-2 text-xs rounded-full text-red-500 hover:text-red-600 ml-2"><i className="fa-solid fa-trash fa-xl"></i></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </table>
                        </div>


                        <a href={route('shop')} className="flex font-semibold text-blue-600 text-sm my-10">

                            <svg className="fill-current mr-2 text-blue-600 w-4" viewBox="0 0 448 512">
                                <path
                                    d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                            </svg>
                            Continue Shopping
                        </a>
                    </div>

                    <div id="summary" className="px-2 py-4 md:px-4 md:py-8 md:col-span-4 col-auto md:dark:bg-slate-800  dark:bg-gray-800 dark:dark:bg-gray-800 rounded-lg ">
                        <h1 className="text-blue-600 text-lg font-bold pb-4">Order Summary</h1>
                        <div className="flex justify-between mt-10 mb-5">
                            <span className="font-semibold text-sm uppercase dark:text-white">Items {cartItems.length}</span>
                            <span className="font-semibold text-sm dark:text-white">{currency.symbol}{totalPrice}</span>
                        </div>

                        {
                            couponFeedbackSuccessMessage
                            &&
                            <div className="flex p-4 mt-2 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-300 dark:border-green-800" role="alert">
                                <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Info</span>
                                <div>
                                    <span className="font-medium">Warning alert!</span> {couponFeedbackSuccessMessage}
                                </div>
                            </div>
                        }
                        {
                            couponFeedbackErrorMessage
                            &&
                            <div className="flex p-4 mt-2 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-300 dark:border-red-800" role="alert">
                                <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Info</span>
                                <div>
                                    {couponFeedbackErrorMessage}
                                </div>
                            </div>
                        }
                        {
                            cookieCoupon &&
                            <div className="flex p-4 mt-2 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-300 dark:border-green-800" role="alert">
                                <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                                <div className='flex flex-col'>
                                    <span className='font-bold pr-2'>"{cookieCoupon.coupon}" Is Applied!</span>
                                    <span className='font-bold pr-2'>{cookieCoupon.discount_precent}%</span>
                                    <div className='flex font-bold pr-2 capitalize'>
                                        <span className='pr-2'>{currency.symbol}{priceAfterCoupon}</span>
                                        <span className='pr-2'>instead of</span>
                                        <span className='pr-2 text-red-600 line-through'>{currency.symbol}{totalPrice}</span>

                                    </div>
                                </div>
                            </div>
                        }
                        <div className="py-4">
                            <label htmlFor="coupon" className="font-semibold inline-block mb-3 text-sm uppercase dark:text-white">Promo
                                Code</label>
                            <input onChange={handleChangeOfCoupon} value={coupon} type="text" id="coupon" placeholder="Enter your code"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <button
                            onClick={applyCoupon}
                            className="bg-gray-900 hover:bg-gray-800 px-5 py-2 text-sm text-white uppercase dark:text-white rounded-md">Apply</button>
                        <div className="border-t mt-8">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span className=" dark:text-white">Total cost</span>
                                <span className=" dark:text-white">{currency.symbol}{priceAfterCoupon}</span>
                            </div>
                            <a href={route('checkout')}
                                className="bg-blue-600 font-semibold hover:bg-blue-700 px-6 py-3 text-sm text-white uppercase w-full rounded-md">Proceed To Checkout</a>
                        </div>
                    </div>

                </div>
            </div>
        </SiteLayout>
    )
}

export default Cart