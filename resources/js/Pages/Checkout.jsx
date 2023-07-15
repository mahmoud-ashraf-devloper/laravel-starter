import React, { useState } from 'react'
import { redirect } from "react-router-dom";
import SiteLayout from './../Layouts/SiteLayout';
import { useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Checkout() {
    const [cookieCoupon, setCookieCoupon] = useState('');
    useEffect(() => {
        if (Cookies.get('coupon')) {
            setCookieCoupon(JSON.parse(Cookies.get('coupon')))
            console.log(JSON.parse(Cookies.get('coupon')));
        }
    }, [])

    const [sameAsShippingAddress, setSameAsShippingAddress] = useState(true);

    const defaultFormData = {
        shipping_first_name: '',
        shipping_last_name: '',
        shipping_company_name: '',
        shipping_email: '',
        shipping_address_1: '',
        shipping_address_2: '',
        shipping_appartment_suit_unit: '',
        shipping_country: '',
        shipping_state: '',
        shipping_city: '',
        shipping_zip_code: '',
        shipping_phone: '',

        // billing states
        billing_first_name: '',
        billing_last_name: '',
        billing_company_name: '',
        billing_email: '',
        billing_address_1: '',
        billing_address_2: '',
        billing_appartment_suit_unit: '',
        billing_country: '',
        billing_state: '',
        billing_city: '',
        billing_zip_code: '',
        billing_phone: '',
    };
    const [formData, setFormData] = useState(defaultFormData);

    const resetForm = () => {
        setFormData(defaultFormData)
    }

    // shipping
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingStates, setShippingStates] = useState([]);
    const [shippingCities, setShippingCities] = useState([]);

    // billing
    const [billingCountries, setBillingCountries] = useState([]);
    const [billingStates, setBillingStates] = useState([]);
    const [billingCities, setBillingCities] = useState([]);

    // shipping
    useEffect(() => {
        axios.get(route('user.get-countries')).then((res) => {
            setShippingCountries(res.data.countries);

        }).catch(error => {
            console.log(error);
        })
    }, [])


    const getShippingStates = (e) => {
        handleChange(e)
        axios.get(route('user.get-states', e.target.value)).then((res) => {
            setShippingStates(res.data.states);
        }).catch(error => {
            console.log(error);
        })
    }

    const getShippingCities = (e) => {
        handleChange(e)

        axios.get(route('user.get-cities', e.target.value)).then((res) => {
            setShippingCities(res.data.cities);
        }).catch(error => {
            console.log(error);
        })
    }


    // billing
    useEffect(() => {
        axios.get(route('user.get-countries')).then((res) => {
            setBillingCountries(res.data.countries);
        }).catch(error => {
            console.log(error);
        })
    }, [])


    const getBillingStates = (e) => {
        handleChange(e)

        axios.get(route('user.get-states', e.target.value)).then((res) => {
            setBillingStates(res.data.states);
        }).catch(error => {
            console.log(error);
        })
    }

    const getBillingCities = (e) => {
        handleChange(e)

        axios.get(route('user.get-cities', e.target.value)).then((res) => {
            setBillingCities(res.data.cities);
        }).catch(error => {
            console.log(error);
        })
    }


    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value

        console.log(e.target.id, e.target.value);
        setFormData(values => ({
            ...values,
            [key]: value,
        }))
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        let data = {
            ...formData,
            billing_address_same_as_shipping_address: sameAsShippingAddress,
            coupon: JSON.stringify(cookieCoupon)
        }
        axios.post(route('user.order.create'), data).then(res => {
            if (res.data.success) {
                setTimeout(() => {
                    window.location.replace(route('payment') + `?order=${res.data.data.id}`);
                }, 2000);

                Cookies.remove('coupon');

                toast.success(res.data.message, {
                    position: toast.POSITION.TOP_LEFT,
                    autoClose: 1500
                })
                resetForm();
            }

        }).catch(error => {
            for (const key in error.response.data.errors) {
                toast.error(`${key}: ${error.response.data.errors[key]}`, {
                    position: toast.POSITION.TOP_LEFT,
                    autoClose: 10000
                })
            }

        });
    }

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
                                className="z-10 flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full ring-0 ring-white dark:bg-gray-700 sm:ring-8 dark:ring-gray-900 shrink-0">
                                <svg aria-hidden="true" className="w-3 h-3 text-gray-800 dark:text-gray-300" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="mt-3">
                            <h3 className="font-medium text-gray-900 dark:text-white">Payment</h3>
                        </div>
                    </li>
                </ol>


                {/* <!-- Form --> */}
                <form onSubmit={handleSubmit}>
                    <h1 className='text-lg font-bold pb-4'>Shipping Address</h1>
                    <div className="grid gap-4 mb-4 sm:grid-cols-2">
                        <div>
                            <label htmlFor="shipping_first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First
                                Name</label>
                            <input type="text" name="shipping_first_name" id="shipping_first_name" onChange={handleChange} value={formData.shipping_first_name}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="first name" />
                        </div>
                        <div>
                            <label htmlFor="shipping_last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last
                                Name</label>
                            <input type="text" name="shipping_last_name" id="shipping_last_name" onChange={handleChange} value={formData.shipping_last_name}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="last name" />
                        </div>
                        <div>
                            <label htmlFor="shipping_company_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company
                                Name</label>
                            <input type="text" name="shipping_company_name" id="shipping_company_name" onChange={handleChange} value={formData.shipping_company_name}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="company name" />
                        </div>
                        <div>
                            <label htmlFor="shipping_email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">shipping_Email</label>
                            <input type="text" name="email" id="shipping_email" onChange={handleChange} value={formData.shipping_email}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="shipping Email" />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="shipping_address_1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address
                                1</label>
                            <input type="text" name="shipping_address_1" id="shipping_address_1" onChange={handleChange} value={formData.shipping_address_1}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Address 1" />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="shipping_address_2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address
                                2</label>
                            <input type="text" name="shipping_address_2" id="shipping_address_2" onChange={handleChange} value={formData.shipping_address_2}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Address 2" />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="shipping_appartment_suit_unit"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apartment/Suite/Unit</label>
                            <input type="text" name="shipping_appartment_suit_unit" id="shipping_appartment_suit_unit" onChange={handleChange} value={formData.shipping_appartment_suit_unit}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Apartment/Suite/Unit" />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="appartment_suit_unit"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country | State | City</label>
                            <div className="grid sm:grid-cols-3 gap-x-2 gap-y-2">
                                <select onChange={getShippingStates} id="shipping_country" name='shipping_country' value={formData.shipping_country}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option>Select Country</option>
                                    {
                                        shippingCountries.map((country) => (
                                            <option key={country.id} onChange={handleChange} value={country.id}>{country.name}</option>
                                        ))
                                    }

                                </select>
                                <select id="shipping_state" onChange={getShippingCities} name='shipping_state' value={formData.shipping_state}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option>Select State</option>
                                    {
                                        shippingStates.map((state) => (
                                            <option key={state.id} onChange={handleChange} value={state.id}>{state.name}</option>
                                        ))
                                    }
                                </select>
                                <select id="shipping_city" name='shipping_city' onChange={handleChange} value={formData.shipping_city}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option>Select City</option>
                                    {
                                        shippingCities.map((city) => (
                                            <option key={city.id} onChange={handleChange} value={city.id}>{city.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="shipping_zip_code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Zip Code</label>
                            <input type="text" name="shipping_zip_code" id="shipping_zip_code" onChange={handleChange} value={formData.shipping_zip_code}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Zip Code" />
                        </div>
                        <div>
                            <label htmlFor="shipping_phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">shipping_Phone</label>
                            <input type="text" name="shipping_phone" id="shipping_phone" onChange={handleChange} value={formData.shipping_phone}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Phone" />
                        </div>


                    </div>


                    <div className='flex mt-10 space-x-2'>
                        <input onChange={() => { setSameAsShippingAddress(!sameAsShippingAddress) }} defaultChecked={sameAsShippingAddress} type="checkbox" name="sameAsShippingAddress" id="sameAsShippingAddress"
                            className="bg-gray-50 border border-gray-300 text-blue-600 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="SameAsShippingAddress" />
                        <label htmlFor="sameAsShippingAddress" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Billing address same as Shipping Address</label>
                    </div>

                    {
                        !sameAsShippingAddress &&
                        // Billing Address Form 
                        <>
                            <h1 className='text-lg font-bold py-10'>Billing Address</h1>

                            <div className="grid gap-4 mb-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="billing_first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First
                                        Name</label>
                                    <input type="text" name="billing_first_name" id="billing_first_name" onChange={handleChange} value={formData.billing_first_name}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="first name" />
                                </div>
                                <div>
                                    <label htmlFor="billing_last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last
                                        Name</label>
                                    <input type="text" name="billing_last_name" id="billing_last_name" onChange={handleChange} value={formData.billing_last_name}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="last name" />
                                </div>
                                <div>
                                    <label htmlFor="billing_company_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company
                                        Name</label>
                                    <input type="text" name="billing_company_name" id="billing_company_name" onChange={handleChange} value={formData.billing_company_name}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="company name" />
                                </div>
                                <div>
                                    <label htmlFor="billing_email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Billing_email</label>
                                    <input type="text" name="billing_email" id="billing_email" onChange={handleChange} value={formData.billing_email}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Billing_email" />
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="billing_address_1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address
                                        1</label>
                                    <input type="text" name="billing_address_1" id="billing_address_1" onChange={handleChange} value={formData.billing_address_1}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Address 1" />
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="billing_address_2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address
                                        2</label>
                                    <input type="text" name="billing_address_2" id="billing_address_2" onChange={handleChange} value={formData.billing_address_2}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Address 2" />
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="billing_appartment_suit_unit"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apartment/Suite/Unit</label>
                                    <input type="text" name="billing_appartment_suit_unit" id="billing_appartment_suit_unit" onChange={handleChange} value={formData.billing_appartment_suit_unit}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Apartment/Suite/Unit" />
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="appartment_suit_unit"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country | State | City</label>
                                    <div className="grid sm:grid-cols-3 gap-x-2 gap-y-2">
                                        <select onChange={getBillingStates} id="billing_country" name='billing_country' value={formData.billing_country}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Select Country</option>
                                            {
                                                billingCountries.map((country) => (
                                                    <option key={country.id} onChange={handleChange} value={country.id}>{country.name}</option>
                                                ))
                                            }

                                        </select>
                                        <select id="billing_state" onChange={getBillingCities} name='billing_state' value={formData.billing_state}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Select State</option>
                                            {
                                                billingStates.map((state) => (
                                                    <option key={state.id} onChange={handleChange} value={state.id}>{state.name}</option>
                                                ))
                                            }
                                        </select>
                                        <select id="billing_city" name='billing_city' onChange={handleChange} value={formData.billing_city}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Select City</option>
                                            {
                                                billingCities.map((city) => (
                                                    <option key={city.id} onChange={handleChange} value={city.id}>{city.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="billing_zip_code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Zip Code</label>
                                    <input type="text" name="billing_zip_code" id="billing_zip_code" onChange={handleChange} value={formData.billing_zip_code}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Zip Code" />
                                </div>
                                <div>
                                    <label htmlFor="billing_phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">billing_phone</label>
                                    <input type="text" name="billing_phone" id="billing_phone" onChange={handleChange} value={formData.billing_phone}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Phone" />
                                </div>


                            </div>
                        </>

                    }

                    <button type='submit'
                        className="mt-10 text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <i className="fa-solid fa-credit-card pr-2"></i>
                        Proceed To Payment
                    </button>
                </form>
            </div>
            <ToastContainer />
        </SiteLayout>
    )
}

export default Checkout