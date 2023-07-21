import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import Select from 'react-select';
import { TextEditor } from '../../CKEditor/TextEditor';

function EditProduct({ product, categories, setProducts }) {
    const [imageToDelete, setImageToDelete] = useState(null);

    // images preview array
    const [imagesPreview, setImagesPreview] = useState(product.images || []);

    // newly uploaded
    const [newlyAddedPics, setNewlyAddedPics] = useState([]); //for preview
    const [newlyAddedImagesFormImages, setNewlyAddedImagesFormImages] = useState([]);


    const [multiSelect, setMultiSelect] = useState([]);
    const [currentCategories, setCurrentCategories] = useState([]);
    const handleMultiSelect = (e) => {
        setCurrentCategories(e);
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
        refreshData(product)
        let cats = []
        product.categories.map((cat) => cats.push({ value: cat.id, label: cat.name }))
        setCurrentCategories(cats)
    }, [product]);




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

    const refreshData = (product) => {
        setFormData({
            title: product.title,
            price: product.price,
            weight: product.weight,
            desc: product.desc,
            short_desc: product.short_desc,
            tax_status: product.tax_status,
            sku: product.sku,
            in_stock: product.in_stock,
            visible: product.visible,
            featured: product.featured,
            categories: product.categories,
            images: product.images,
        });
        let cats = [];
        product.categories.map((cat, index) => {
            cats.push({
                value: cat.id,
                label: cat.name
            });
        });

        setCurrentCategories(cats);
        setImagesPreview(product.images);
    }

    const [loading, setLoading] = useState(false);


    const handleDeletingProductPicture = () => {
        axios.post(route('admin.products.image.delete', [product.slug, imageToDelete])).then((res) => {
            if (!res.data.success) {
                console.log(res.data.errors);
                for (const key in res.data.errors) {
                    toast.error(`${key}: ${res.data.errors[key]}`, {
                        position: toast.POSITION.TOP_LEFT,
                        autoClose: 15000
                    })
                }

            }

            if (res.data.success) {
                toast.success('Image Removed Successfully', {
                    position: toast.POSITION.TOP_LEFT,
                    autoClose: 15000
                })
                setProducts(res.data.products);
                setNewlyAddedImagesFormImages([])
                setNewlyAddedPics([])

                refreshData(res.data.product);

            }

        })
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
            images: newlyAddedImagesFormImages
        }

        axios.post(route('admin.products.update', [product.slug]), data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }).then((res) => {
            if (!res.data.success) {
                console.log(res.data.errors);
                for (const key in res.data.errors) {
                    toast.error(`${key}: ${res.data.errors[key]}`, {
                        position: toast.POSITION.TOP_LEFT,
                        autoClose: 15000
                    })
                }
                setLoading(false);
            }

            if (res.data.success) {
                toast.success('Product Data Updated Successfully', {
                    position: toast.POSITION.TOP_LEFT,
                    autoClose: 15000
                })
                setProducts(res.data.products);
                setNewlyAddedImagesFormImages([])
                setNewlyAddedPics([])
                
                refreshData(res.data.product);
                setLoading(false);

            }

        }).catch(error => console.log(error))

    }


    const handleChange = (e) => {
        if (e.target.id == 'images') {
            if (e.target.files.length > 6) {
                toast.error("You Cant Upload More Than 6 Pictures", {
                    position: toast.POSITION.TOP_CENTER
                });
                return;
            }
            let arrayOfImages = [

            ];
            let imagesPreviewUrls = [];
            for (let index = 0; index < e.target.files.length; index++) {
                if (index < 6) {
                    newlyAddedImagesFormImages.push(e.target.files[index]);
                    newlyAddedPics.push(URL.createObjectURL(e.target.files[index]));
                }
            }
            // form.append(e.target.id, [...form.get('images'), ...arrayOfImages]);
            const key = e.target.id;

            formData.images = [...formData.images, ...arrayOfImages];
            setImagesPreview([...imagesPreviewUrls, ...imagesPreview]);
            return;
        }
        setFormData(values => ({
            ...values,
            [e.target.id]: e.target.value,
        }));

    }

    const toggleCheckbox = (e) => {
        setFormData(values => ({
            ...values,
            [e.target.id]: formData[e.target.id] == 1 ? 0 : 1,
        }));


    }

    const [state, setState] = useState(true);

    const handleRemovePic = (index) => {
        let filtered = imagesPreview.filter((_, i) => i != index);
        formData.images = formData.images.filter((_, i) => i != index);
        setImagesPreview(filtered);
    }

    const handleNewlyAddedPicsRemove = (index) => {
        let filtered = newlyAddedPics.filter((_, i) => i != index);
        setNewlyAddedImagesFormImages(newlyAddedImagesFormImages.filter((_, i) => i != index));
        setNewlyAddedPics(filtered);
    }


    const handleUploadingNewImages = () => {
        let formImags = new FormData();

        newlyAddedImagesFormImages.forEach((image, key) => {
            formImags.append('images[]', image)
        })

        axios.post(route('admin.products.images.upload', product.slug), formImags, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }).then(res => {
            if (!res.data.success) {
                console.log(res.data.errors);
                for (const key in res.data.errors) {
                    toast.error(`${key}: ${res.data.errors[key]}`, {
                        position: toast.POSITION.TOP_LEFT,
                        autoClose: 15000
                    })
                }
                setLoading(false);
            }

            if (res.data.success) {
                toast.success('Images Uploaded Successfully', {
                    position: toast.POSITION.TOP_LEFT,
                    autoClose: 15000
                })
                setProducts(res.data.products);
                setNewlyAddedImagesFormImages([])
                setNewlyAddedPics([])
                refreshData(res.data.product);
                setLoading(false);

            }

        }).catch((error) => {
            setLoading(false);
            console.log(error);
        })
    }



    return (

        <>
            <form action="#" id="drawer-update-product" encType="multipart/form-data" onSubmit={handleSubmit}
                className="fixed top-0 left-0 z-40 w-full h-screen max-w-3xl p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800"
                tabIndex="-1" aria-labelledby="drawer-update-product-label" aria-hidden="true">
                <h5 id="drawer-label"
                    className="inline-flex items-center mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Edit
                    Product</h5>
                <button type="button" data-drawer-dismiss="drawer-update-product" aria-controls="drawer-update-product"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd" />
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>
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
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                        <input onChange={handleChange} value={formData.price} type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Price" />
                    </div>
                    <div className="grid gap-4 sm:col-span-2 md:gap-6 sm:grid-cols-4">
                        <label className="relative inline-flex items-center mr-5 cursor-pointer">
                            <input type="checkbox" id='featured' onChange={toggleCheckbox} checked={formData.featured} className="sr-only peer" />
                            <div className="absolute w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ml-14 text-sm font-medium text-gray-900 dark:text-gray-300">Is Featured</span>
                        </label>

                        <label className="relative inline-flex items-center mr-5 cursor-pointer">
                            <input type="checkbox" id='tax_status' onChange={toggleCheckbox} checked={formData.tax_status} className="sr-only peer" />
                            <div className="absolute w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ml-14 text-sm font-medium text-gray-900 dark:text-gray-300">Is Taxable</span>
                        </label>

                        <label className="relative inline-flex items-center mr-5 cursor-pointer">
                            <input type="checkbox" id='in_stock' onChange={toggleCheckbox} checked={formData.in_stock} className="sr-only peer" />
                            <div className="absolute w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ml-14 text-sm font-medium text-gray-900 dark:text-gray-300">In Stock</span>
                        </label>

                        <label className="relative inline-flex items-center mr-5 cursor-pointer">
                            <input type="checkbox" id='visible' onChange={toggleCheckbox} checked={formData.visible} className="sr-only peer" />
                            <div className="absolute w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ml-14 text-sm font-medium text-gray-900 dark:text-gray-300">Visible</span>
                        </label>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="description" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                        <TextEditor
                            desc="desc"
                            name="description"
                            value={formData.desc}
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
                    <span className="block mb-2 text-gray-900 dark:text-white font-bold text-md">Product Images</span>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        {
                            imagesPreview.map((image, index) => (
                                <div key={index} className="relative p-2 bg-gray-100 rounded-lg sm:w-36 sm:h-36 dark:bg-gray-700">
                                    <img src={image.url}
                                        alt="imac image" />
                                    <button onClick={() => { setImageToDelete(image.id) }} type="button" data-modal-target="delete-modal" data-modal-toggle="delete-modal"
                                        className="absolute text-red-600 dark:text-red-500 hover:text-red-500 dark:hover:text-red-400 bottom-1 left-1">
                                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                clipRule="evenodd" />
                                        </svg>
                                        <span className="sr-only">Remove image</span>
                                    </button>


                                </div>
                            ))
                        }
                    </div>
                </div>
                {
                    newlyAddedPics.length > 0 &&
                    <div className="mb-4">
                        <span className="block mb-2  text-gray-900 dark:text-white font-bold text-md ">Newly Added Product Images</span>
                        <div className="grid grid-cols-3 gap-4 mb-4">
                            {
                                newlyAddedPics.map((image, index) => (
                                    <div key={index} className="relative p-2 bg-gray-100 rounded-lg sm:w-36 sm:h-36 dark:bg-gray-700">
                                        <img src={image} alt="imac image" />
                                        <button onClick={() => { handleNewlyAddedPicsRemove(index) }} type="button" data-modal-target="delete-modal" data-modal-toggle="delete-modal"
                                            className="absolute text-red-600 dark:text-red-500 hover:text-red-500 dark:hover:text-red-400 bottom-1 left-1">
                                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd"
                                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                    clipRule="evenodd" />
                                            </svg>
                                            <span className="sr-only">Remove image</span>
                                        </button>
                                    </div>
                                ))
                            }
                        </div>
                        <button onClick={handleUploadingNewImages} type="button" className="w-full sm:w-auto justify-center text-white inline-flex bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 capitalize text-xs">upload new images</button>
                    </div>
                }

                <div className="mb-4">

                    <div className="flex justify-center items-center w-full">
                        {
                            (imagesPreview.length + newlyAddedPics.length < 6) &&
                            <label htmlFor="image" className="relative flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div className="mb-1 flex flex-col justify-center  w-full h-full inset-0 cursor-auto">

                                    <input id="images" name='images[]' multiple="multiple" type="file" className="cursor-pointer opacity-0 w-full h-full absolute" onChange={handleChange} />
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
                        }

                    </div>
                </div>
                <div className="items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 justify-center">
                    {
                        loading ?
                            <button disabled type="button" className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-700 focus:z-10 focus:ring-2 focus:ring-gray-700 focus:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
                                <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
                                </svg>
                                Loading...
                            </button>
                            :
                            <button type="submit" className="w-full sm:w-auto justify-center text-white inline-flex bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">update product</button>
                    }
                </div>



            </form >
            {/* delete pic confirmation modal */}
            <div id="delete-modal" tabIndex="-1" className="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full h-auto max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="delete-modal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="p-6 text-center">
                            <svg aria-hidden="true" className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product Image you can not undo this action?</h3>
                            <button onClick={handleDeletingProductPicture} data-modal-toggle="delete-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">Yes, I'm sure</button>
                            <button data-modal-toggle="delete-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </>
    )
}

export default EditProduct