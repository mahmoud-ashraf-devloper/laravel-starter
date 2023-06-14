import React, { useEffect } from 'react'
import Navbar from '../Components/Site/Navbar'
import Footer from '../Components/Site/Footer'
import { initFlowbite } from 'flowbite'
import ShoppingCart from '../Components/Site/ShoppingCart';
import ContactUs from '../Components/Site/ContactUs';


function SiteLayout({ children }) {
    useEffect(()=>{
        initFlowbite()
    }, [])
    return (
        <div>
            <Navbar/>
            <div className='pt-[4rem]'></div>
            {children}
            <ShoppingCart />
            <ContactUs />
            <Footer/>
        </div>
    )
}

export default SiteLayout