import { usePage } from '@inertiajs/inertia-react';
import React, { useRef } from 'react'

function TopNav() {
    const { currency } = usePage().props
    const changeCurrency = (e) => {
        window.location.replace(route('currency.change', {currency: e.target.value}));
    }

    return (
        <div className='h-10 bg-slate-50 border border-b-slate-200 dark:border-none dark:bg-slate-800 fixed w-full z-30'>
            <div className='relative max-w-screen-xl flex justify-between mx-auto p-0 m-0 h-full'>
                <form className='flex items-center' action={route('currency.change')} method="get">
                    <select defaultValue={currency.code} name='currency' onChange={changeCurrency} id="small" className="w-28 font-semibold md:text-sm text-xs text-gray-600 border-none  bg-gray-50  dark:bg-slate-800 dark:border-slate-800 dark:placeholder-gray-400 dark:text-white">
                        <option value="USD">USD</option>
                        <option value="CAD">CAD</option>
                        <option value="JPY">JPY</option>
                    </select>
                </form>
                <span className='whitespace-nowrap font-bold md:text-sm text-xs flex items-center uppercase text-blue-500 '>
                   <img className='mix-blend-screen w-10 h-10 pr-2' src="/images/sale.png" alt="sale image" srcset="" /> sale 30% Off
                </span>
                <select id="small" className="w-28 font-semibold md:text-sm text-xs text-gray-600 border-none  bg-gray-50  dark:bg-slate-800 dark:border-slate-800 dark:placeholder-gray-400 dark:text-white">
                    <option >Lnguage</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                </select>
            </div>

        </div>
    )
}

export default TopNav