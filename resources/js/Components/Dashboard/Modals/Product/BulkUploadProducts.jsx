import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function BulkUploadProducts() {
    const [excelFile, setExcelFile] = useState();
    const [loading, setLoading] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        let data = new FormData()
        data.append('file', excelFile);
        axios.post(route('admin.products.bulk.upload.or.update'), data).then(res => {
            setExcelFile()
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
            setExcelFile()
            setLoading(false)
        });
    }



    const handleChange = (e) => {
        const key = e.target.id;
        console.log(key);
        const value = e.target.value
        setExcelFile(e.target.files[0]);
    }
    return (
        <div id="BulkUploadProductsModal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 min-h-full">
            <div className="relative p-4 w-full max-w-3xl h-full md:h-auto">
                {/* <!-- Modal content --> */}
                <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                    {/* <!-- Modal header --> */}
                    <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Bulk Upload Or Update Products</h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="BulkUploadProductsModal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <form encType="multipart/form-data" onSubmit={handleSubmit}>
                        <label htmlFor="file" className="relative flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="mb-1 flex flex-col justify-center  w-full h-full inset-0 cursor-auto">

                                <input id="file" name='file' type="file" className="cursor-pointer opacity-0 w-full h-full absolute" onChange={handleChange} />
                                <div className="flex flex-col justify-center items-center pt-5 pb-6">
                                    <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                        <span className="font-semibold">Click to upload</span>
                                        or drag and drop
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                            </div>
                        </label>

                        <div className="flex justify-center mt-10 mb-2">
                        {
                            loading ?

                                <button disabled type="button" class="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
                                    <svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
                                    </svg>
                                    Uploading...
                                </button>
                                :

                                <button type="submit" className="w-full sm:w-auto justify-center text-white inline-flex bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Upload Or Update Products</button>
                        }

                        </div>
                    </form>
                </div>
            </div >
            <ToastContainer />
        </div >
    )
}

export default BulkUploadProducts