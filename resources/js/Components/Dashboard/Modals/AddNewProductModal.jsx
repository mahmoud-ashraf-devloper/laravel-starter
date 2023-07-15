// import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { TextEditor } from '../CKEditor/TextEditor';
import Select from 'react-select';


function AddNewProductModal({ categories, setProducts }) {

    const [formData, setFormData] = useState({
        title: '',
        price: 0,
        weight: 0,
        desc: '',
        short_desc: '',
        tax_status: 0,
        sku: '',
        in_stock: 0,
        visible: 0,
        featured: 0,
        categories: [],
        images: []
    });


    const [multiSelect, setMultiSelect] = useState([]);
    const [currentCategories, setCurrentCategories] = useState([]);
    const handleMultiSelect = (e) => {
        setCurrentCategories(e)
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
        setMultiSelect(arrayOfOptions)
    }, []);

    const [loading, setLoading] = useState(false);
    const [imagesPreview, setImagesPreview] = useState([]);

    const resetForm = () => {
        setImagesPreview([]);
        setFormData({
            title: '',
            price: 0,
            weight: 0,
            desc: '',
            short_desc: '',
            tax_status: 0,
            sku: '',
            in_stock: 0,
            visible: 0,
            featured: 0,
            categories: [],
            images: []
        })

        formData = new FormData()
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        let data = {
            title: formData.title,
            price: formData.price,
            weight: formData.weight,
            desc: formData.desc,
            short_desc: formData.short_desc,
            tax_status: formData.tax_status,
            sku: formData.sku,
            in_stock: formData.in_stock,
            visible: formData.visible,
            featured: formData.featured,
            categories: currentCategories,
            images: formData.images
        }

        
        // console.log(data);
        axios.post(route('admin.products.add'),
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
                setProducts(res.data.products);
                resetForm();
            }

            setLoading(false);
        }).catch((error) => {
            setLoading(false);
            console.log(error);
        })
    }


    const handleChange = (e) => {
        if (e.target.id == 'images') {
            if (e.target.files.length > 6) {
                toast.error("You Cant Upload More Than 6 Pictures", {
                    position: toast.POSITION.TOP_CENTER
                });
                return;
            }
            let arrayOfImages = [];
            let imagesPreviewUrls = [];
            for (let index = 0; index < e.target.files.length; index++) {
                if (index < 6) {
                    arrayOfImages.push(e.target.files[index]);
                    imagesPreviewUrls.push(URL.createObjectURL(e.target.files[index]));
                }
            }
            // form.append(e.target.id, [...form.get('images'), ...arrayOfImages]);
            const key = e.target.id;

            formData.images = [...formData.images, ...arrayOfImages];
            setImagesPreview([...imagesPreviewUrls, ...imagesPreview]);
            return;
        }
        const key = e.target.id;
        const value = e.target.value

        setFormData(values => ({
            ...values,
            [key]: value,
        }));
    }

    const toggleCheckbox = (e) => {
        setFormData(values => ({
            ...values,
            [e.target.id]: formData[e.target.id] == 1 ? 0 : 1,
        }));
    }


    const handleRemovePic = (index) => {
        let filtered = imagesPreview.filter((_, i) => i != index);
        formData.images = formData.images.filter((_, i) => i != index);
        setImagesPreview(filtered);
    }

    return (
        <div id="createProductModal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 min-h-full">
            <div className="relative p-4 w-full max-w-3xl h-full md:h-auto mt-52">
                {/* <!-- Modal content --> */}
                <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                    {/* <!-- Modal header --> */}
                    <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Add Product</h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="createProductModal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <form encType="multipart/form-data" onSubmit={handleSubmit}>
                        <div className="grid gap-4 mb-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Title</label>
                                <input onChange={handleChange} value={formData.title} type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type product title" />
                            </div>
                            <div>
                                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                <Select
                                    options={multiSelect}
                                    placeholder="Select Categories"
                                    value={currentCategories}
                                    onChange={handleMultiSelect}
                                    isMulti={true}
                                    isSearchable={true}
                                />
                            </div>
                            <div>
                                <label htmlFor="weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weight</label>
                                <input onChange={handleChange} value={formData.weight} type="number" name="weight" id="weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product weight" />
                            </div>
                            <div>
                                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                <input onChange={handleChange} value={formData.price} type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Price" />
                            </div>
                            <div className="grid gap-4 sm:col-span-2 md:gap-6 sm:grid-cols-4">
                                <label className="relative inline-flex items-center mr-5 cursor-pointer">
                                    <input type="checkbox" id='featured' onChange={toggleCheckbox} disabled={formData.featured} className="sr-only peer" />
                                    <div className="absolute w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ml-14 text-sm font-medium text-gray-900 dark:text-gray-300">Is Featured</span>
                                </label>

                                <label className="relative inline-flex items-center mr-5 cursor-pointer">
                                    <input type="checkbox" id='tax_status' onChange={toggleCheckbox} disabled={formData.tax_status} className="sr-only peer" />
                                    <div className="absolute w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ml-14 text-sm font-medium text-gray-900 dark:text-gray-300">Is Taxable</span>
                                </label>

                                <label className="relative inline-flex items-center mr-5 cursor-pointer">
                                    <input type="checkbox" id='in_stock' onChange={toggleCheckbox} disabled={formData.in_stock} className="sr-only peer" />
                                    <div className="absolute w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ml-14 text-sm font-medium text-gray-900 dark:text-gray-300">In Stock</span>
                                </label>

                                <label className="relative inline-flex items-center mr-5 cursor-pointer">
                                    <input type="checkbox" id='visible' onChange={toggleCheckbox} disabled={formData.visible} className="sr-only peer" />
                                    <div className="absolute w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span className="ml-14 text-sm font-medium text-gray-900 dark:text-gray-300">Visible</span>
                                </label>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="description" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <TextEditor
                                    desc="desc"
                                    name="description"
                                    onChange={(data) => {
                                        setFormData(values => ({
                                            ...values,
                                            ['desc']: data,
                                        }));
                                    }}
                                />

                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="short_desc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Short_desc</label>
                                <input onChange={handleChange} value={formData.short_desc} type="text" name="short_desc" id="short_desc" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product short description" />
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="sku" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sku</label>
                                <input onChange={handleChange} value={formData.sku} type="text" name="sku" id="sku" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product SKU" />
                            </div>
                        </div>


                        <div className="mb-4">
                            <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Images</span>

                            <div className="flex justify-center items-center w-full">
                                <label htmlFor="image" className="relative flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    {
                                        imagesPreview.length != 6 &&
                                        <input id="images" name='images[]' multiple="multiple" type="file" className="cursor-pointer opacity-0 w-full h-full absolute" onChange={handleChange} />
                                    }
                                    {
                                        imagesPreview.length > 0 ?
                                            <div className="mb-1 flex flex-col justify-center  w-full h-full inset-0 cursor-auto">
                                                <div className="grid grid-cols-6 gap-1 mb-2 relative">
                                                    {
                                                        imagesPreview.map((image, index) => (
                                                            <div key={index} className="relative p-2 bg-gray-100 rounded-lg sm:w-20 sm:h-20 dark:bg-gray-700 shadow-md">
                                                                <img className='w-full h-full rounded-md' src={image} alt="imac image" />
                                                                <button onClick={() => handleRemovePic(index)} type="button" className="absolute text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-400 bottom-3 right-3 bg-white p-1 rounded-full shadow-md">
                                                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                                                    </svg>
                                                                    <span className="sr-only">Remove image</span>
                                                                </button>

                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                                {
                                                    imagesPreview.length != 6 ?
                                                        <div className='flex justify-center w-full pt-4 '>
                                                            <div className='text-center'>
                                                                <div className='flex justify-center'>
                                                                    <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                                    </svg>
                                                                </div>
                                                                <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                                                                    <span className="font-semibold">Click to upload More Pictures</span>
                                                                    or drag and drop
                                                                </p>
                                                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                                            </div>
                                                        </div>
                                                        :
                                                        <span className='font-bold flex h-full justify-center items-center capitalize'>You Can't Upload More Pictures Maximum Number of Pictures Is 6</span>
                                                }
                                            </div>
                                            :

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
                                    }
                                </label>
                            </div>
                        </div>
                        <div className="items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
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

                                    <button type="submit" className="w-full sm:w-auto justify-center text-white inline-flex bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add product</button>
                            }
                        </div>
                    </form>
                </div>
            </div >
            <ToastContainer />
        </div >
    )
}

export default AddNewProductModal