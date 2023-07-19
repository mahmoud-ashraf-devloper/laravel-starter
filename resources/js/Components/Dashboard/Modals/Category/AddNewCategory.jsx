import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Select from 'react-select';

function AddNewCategory({ setCategories, categories }) {

    const [formData, setFormData] = useState({
        name: '',
        subCategories: []
    });

    const [subCategories, setSubCategories] = useState([]);
    const [selectedSubCategories, setSelectedSubCategories] = useState([]);
    const handleSubCategories = (e) => {
        setSelectedSubCategories(e)
        // formData.categories = currentCategories
        // formData.set('categories',e);
    }

    useEffect(() => {
        let arrayOfOptions = [];
        categories.map(category => {
                arrayOfOptions.push({
                    value: category.id,
                    label: category.name,
                })
        })
        setSubCategories(arrayOfOptions)
    }, []);


    const [loading, setLoading] = useState(false);

    const resetForm = ()=>{
        setFormData({
            name: '',
            subCategories: []
        })
    }

    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value

        setFormData(values => ({
            ...values,
            [key]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // categories.add

        e.preventDefault()
        setLoading(true)

        let data = {
            name: formData.name,
            subCategories: selectedSubCategories,
        }


        // console.log(data);
        axios.post(route('admin.categories.add'),
            data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }
        ).then((res) => {
            if (!res.data.success) {
                console.log(res.data.errors);
                for (const key in res.data.errors) {
                    toast.error(`${key}: ${res.data.errors[key]}`, {
                        position: toast.POSITION.TOP_LEFT,
                        autoClose: 1500
                    })
                }

            }

            if (res.data.success) {
                toast.success('Product Added Successfully', {
                    position: toast.POSITION.TOP_LEFT,
                    autoClose: 1500
                })
                setCategories(res.data.categories);
                resetForm()
            }

            setLoading(false);
        }).catch((error) => {
            setLoading(false);
            resetForm()
            console.log(error);
        })
    }

    return (
        <div id="createCategoryModal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 min-h-full">
            <div className="relative p-4 w-full max-w-2xl h-full md:mt-20 ">
                {/* <!-- Modal content --> */}
                <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                    {/* <!-- Modal header --> */}
                    <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">New Category</h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="createCategoryModal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <form onSubmit={handleSubmit} className='pb-6 '>
                        <div className='my-4 '>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category Name</label>
                            <input onChange={handleChange} value={formData.name} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type Category Name" />
                        </div>
                        <div className='my-4 '>
                            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                            <Select
                                options={subCategories}
                                placeholder="Select Categories"
                                value={selectedSubCategories}
                                onChange={handleSubCategories}
                                isMulti={true}
                                isSearchable={true}
                            />
                        </div>
                        <div className="my-4 mt-10 items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                            {
                                loading ?

                                    <button disabled type="button" class="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
                                        <svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
                                        </svg>
                                        Loading...
                                    </button>
                                    :

                                    <button type="submit" className="w-full sm:w-auto justify-center text-white inline-flex bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Category</button>
                            }
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />

        </div>
    )
}

export default AddNewCategory