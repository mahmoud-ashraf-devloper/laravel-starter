import React, { useEffect } from 'react'
import { initFlowbite } from 'flowbite'
import Navbar from './../Components/Dashboard/Navbar';
import Sidebar from '../Components/Dashboard/Sidebar';
import Batches from '../Components/Dashboard/Batches';


function DashboardLayout({ children }) {
    useEffect(() => {
        initFlowbite()
    }, [])
    return (
        <div className="antialiased bg-gray-50 dark:bg-gray-900">
            <Navbar />
            <Sidebar />
            {/* <!-- Page Content --> */}
            <main className="p-4 md:ml-64 h-auto pt-20">
                {children}
            </main>

            <Batches />
        </div>
    )
}

export default DashboardLayout