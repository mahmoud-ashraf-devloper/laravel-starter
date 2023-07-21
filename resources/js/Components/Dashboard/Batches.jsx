import { usePage } from '@inertiajs/inertia-react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Batches() {
    const [batchesData, setBatchesData] = useState([])
    const [loading, setLoading] = useState(false)
    const [firstRound, setFirstRound] = useState(true)



    const getBatchs = async () => {
        setLoading(true)
        axios.get(route('admin.batches')).then(res => {
            setBatchesData(res.data.data);
            setLoading(false)
        }).catch(error => {
            console.log(error);
            setLoading(false)
        })

    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            if(firstRound){
                getBatchs()
                setFirstRound(false)
            }
            if(batchesData.length > 0){
                getBatchs()
            }
        }, 6000);
        return () => clearInterval(intervalId);
    }, [])

    return (
        <div id="toast-bottom-right" className="fixed z-30 flex flex-col  items-center w-full max-w-sm p-4 space-y-1 text-gray-500  divide-x divide-gray-200 rounded-lg shadow right-5 bottom-5 dark:text-gray-400 dark:divide-gray-700 space-x " role="alert">
            {
                batchesData.length > 0 &&
                batchesData.map((batch, index) => (
                    <div key={index} className='flex flex-col w-full mb-4 py-1 px-2 rounded-md bg-gray-800 border-2 border-slate-700'>
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium  text-white">{batch.name}</span>
                            <span className="text-sm font-medium  text-white ">
                                <button className='pr-2' onClick={getBatchs}><i className={loading ? `fa-solid fa-arrows-rotate animate-spin ` : 'fa-solid fa-arrows-rotate'}></i></button>
                                {batch.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: batch.progress + '%' }}></div>
                        </div>
                        <div className="flex justify-between text-sm pt-4 pb-2">
                            <span className='uppercase font-semibold'>details</span>
                            <span>{batch.processedJobs} of {batch.totalJobs}</span>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Batches