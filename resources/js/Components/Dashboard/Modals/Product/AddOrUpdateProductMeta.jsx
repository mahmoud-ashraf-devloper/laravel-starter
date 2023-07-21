import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function AddProductMeta({ product }) {
    const defaultFormData = {
        meta_desc: '',
        meta_keywords: '',
        meta_title: ''
    };
    const [formData, setFormData] = useState(defaultFormData);
    const [loading, setLoading] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        axios.post(route('admin.products.add.or.update.mmeta', product.slug), formData).then(res => {
            console.log(res);
            setFormData(defaultFormData)
            setLoading(false)
            toast.success(`${res.data.message}`, {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 1000
            })
        }).catch(error => {
            for (const key in error.response.data.errors) {
                toast.error(`${key}: ${error.response.data.errors[key]}`, {
                    position: toast.POSITION.TOP_LEFT,
                    autoClose: 1000
                })
            }
            setFormData(defaultFormData)
            setLoading(false)
        });
    }

    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value

        setFormData(values => ({
            ...values,
            [key]: value,
        }));

    }

    return (

        <div id="AddProductMetaModal"
            className="overflow-y-auto fixed top-0 left-0 z-40 p-4 w-full max-w-lg h-screen bg-white transition-transform -translate-x-full dark:bg-gray-800"
            tabIndex="-1" aria-labelledby="drawer-label" aria-hidden="true">
            <div className='my-10'>
                <h4 id="read-drawer-label" className="mb-1.5 leading-none text-xl font-semibold text-gray-900 dark:text-white">{product.title}</h4>
            </div>
            <button type="button" data-drawer-dismiss="AddProductMetaModal"
                aria-controls="AddProductMetaModal"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd" />
                </svg>
                <span className="sr-only">Close menu</span>
            </button>
            <form onSubmit={handleSubmit}>
                <div className="grid gap-4 mb-4">
                    <div>
                        <h4 className='block mb-2 text-lg font-bold text-gray-900 dark:text-white'>General Meta Tags</h4>
                        <div>
                            <label htmlFor="meta_desc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Meta desc</label>
                            <input onChange={handleChange} value={formData.meta_desc} type="text" name="meta_desc" id="meta_desc" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type product meta desc" />
                        </div>
                        <div>
                            <label htmlFor="meta_keywords" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Meta keyword</label>
                            <input onChange={handleChange} value={formData.meta_keywords} type="text" name="meta_keywords" id="meta_keywords" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type product meta keywords comma seberated values" />
                        </div>
                        <div>
                            <label htmlFor="meta_title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Meta title</label>
                            <input onChange={handleChange} value={formData.meta_title} type="text" name="meta_title" id="meta_title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type product meta title" />
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    {
                        loading ?

                            <button disabled type="button" class="mb-4  py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
                                <svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
                                </svg>
                                Loading...
                            </button>
                            :

                            <button type="submit" className="mb-4  w-full sm:w-auto justify-center text-white inline-flex bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Or Update Meta</button>
                    }
                </div>
            </form>
        </div>
    )
}

export default AddProductMeta