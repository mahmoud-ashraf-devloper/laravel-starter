import React, { useState } from 'react'

function MakeTestCsv() {
    const [rows, setRows] = useState(0)
    const downloadCsv = () => {
        window.location.replace(route('admin.create.csv', rows))
    }
    return (
        <div id="CsvGeneratorModal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 min-h-full">
            <div className="relative p-4 w-full max-w-xl h-full md:h-auto">
                {/* <!-- Modal content --> */}
                <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                    {/* <!-- Modal header --> */}
                    <div className="flex justify-between items-center pb-4 mb-4 rounded-t sm:mb-5 dark:border-gray-600">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Make Test Excel Sheet of Dummy Products</h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="CsvGeneratorModal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <div className='my-6'>
                        <label htmlFor="rows" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number Of Rows Rows</label>
                        <input onChange={(e) => { setRows(e.target.value) }} value={rows} type="number" name="rows" id="rows" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product rows" />
                    </div>

                    <button onClick={downloadCsv} type="button" className="block text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Download The CSV File</button>
                </div>
            </div >
        </div >
    )
}

export default MakeTestCsv