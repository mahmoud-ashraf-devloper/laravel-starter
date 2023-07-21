import React from 'react'
import DashboardLayout from '../../Layouts/DashboardLayout'
import DeleteProduct from '../../Components/Dashboard/Modals/Product/DeleteProduct'
import ProductPreview from '../../Components/Dashboard/Modals/Product/ProductPreview'
import Pagination from './../../Components/Dashboard/Pagination';
import { useState } from 'react';
import EditProduct from '../../Components/Dashboard/Modals/Product/EditProduct';
import AddNewProductModal from '../../Components/Dashboard/Modals/Product/AddNewProductModal';
import { usePage } from '@inertiajs/inertia-react';
import AddProductMeta from '../../Components/Dashboard/Modals/Product/AddOrUpdateProductMeta';
import BulkUploadProducts from '../../Components/Dashboard/Modals/Product/BulkUploadProducts';
import FilterArea from '../../Components/Site/FilterArea';
import MakeTestCsv from '../../Components/Dashboard/Modals/Product/MakeTestCsv';

function Products({ categories, ziggy, user }) {
  const defaultProduct = {
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
  };
  const [products, setProducts] = useState(usePage().props.products);
  const [loading, setLoading] = useState(false);
  const [productPreview, setProductPreview] = useState(defaultProduct);
  const [productEdit, setProductEdit] = useState(defaultProduct);
  const [productDelete, setProductDelete] = useState(defaultProduct);
  const [productToAddMetaTo, setProductToAddMetaTo] = useState(defaultProduct);

  const updateProductsState = (newProducts) => {
    setProducts(newProducts)
  }
  const setLoadingStatus = (status) => {
    setLoading(status)
  }

  const getBlankCsv = () => {
    window.location.replace(route('admin.get.blank.csv'))
  }

  return (
    <DashboardLayout>
      {/* <!-- Start block --> */}
      <section className="bg-gray-50 dark:bg-gray-900 sm:p-5 antialiased">
        <div className="mx-auto">
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <FilterArea setLoading={setLoadingStatus} setProducts={setProducts} />
            <div className="flex flex-col md:flex-row items-stretch md:items-center md:space-x-3 space-y-3 md:space-y-0 justify-between mx-4 py-4 ">
              {/* {{-- filter area --}} */}
              <div className="w-full md:w-auto flex flex-col md:flex-row items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                {
                  user.roles == 'Admin' &&
                  <button type="button" id="createProductButton" data-modal-toggle="createProductModal" className="text-white bg-gradient-to-r capitalize from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> Add Single product</button>
                }

                {
                  user.roles == 'Admin' &&
                  <button type="button" id="createProductButton" data-modal-toggle="BulkUploadProductsModal" className="text-white bg-gradient-to-r capitalize from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Bulk Add Products</button>
                }

                {
                  user.roles == 'Admin' &&

                  <button ype="button" id="createProductButton" data-modal-toggle="CsvGeneratorModal" type="button" className="text-white bg-gradient-to-r capitalize from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Make Test Excel Sheet</button>
                }

                {
                  user.roles == 'Admin' &&
                  <button onClick={getBlankCsv} type="button" className="text-white bg-gradient-to-r capitalize from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Download Blank Csv</button>
                }

              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="p-4">
                      <div className="flex items-center">
                      </div>
                    </th>
                    <th scope="col" className="p-4">Product</th>
                    <th scope="col" className="p-4">Categories</th>
                    <th scope="col" className="p-4">Visible</th>
                    <th scope="col" className="p-4">Featured</th>
                    <th scope="col" className="p-4">Created at</th>

                    <th scope="col" className="p-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    products.data.map(product => (
                      <tr key={product.id} className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td className="p-4 w-4">
                          <div className="flex items-center">

                            <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                          </div>
                        </td>
                        <td scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <div className="flex items-center mr-3">
                            {product.images.length > 0 &&
                              <img src={product.images[0].url} alt={product.title} className="h-8 w-auto mr-3" />

                            }
                            {product.title}
                          </div>
                        </td>
                        <td className='flex space-x-1 decoration-transparent pt-3 pl-4'>
                          {
                            product.categories.map((item, id) => (
                              <a key={id} href={route('category.products', item.slug)}
                                className="bg-slate-700 test-xs h-fit text-white p-1 rounded-md text-xs font-bold uppercase hover:underline">{item.name}</a>
                            ))
                          }
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <div className="flex items-center">
                            {
                              product.visible ?
                                <div className="h-4 w-4 rounded-full inline-block mr-2 bg-green-500"></div>
                                :
                                <div className="h-4 w-4 rounded-full inline-block mr-2 bg-red-500"></div>
                            }
                          </div>
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <div className="flex items-center">
                            {
                              product.featured ?
                                <div className="h-4 w-4 rounded-full inline-block mr-2 bg-green-500"></div>
                                :
                                <div className="h-4 w-4 rounded-full inline-block mr-2 bg-red-500"></div>
                            }
                          </div>
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {product.created_at}
                        </td>

                        <td className="px-4 py-3 font-medium whitespace-nowrap text-white">
                          <div className="flex items-center space-x-4">
                            {
                              (user.roles.includes('Admin') || user.roles.includes('Editor'))
                              &&

                              <button type="button" data-drawer-target="drawer-update-product" data-drawer-show="drawer-update-product" aria-controls="drawer-update-product" onClick={() => { setProductEdit(product) }} className="text-white py-2 px-3 flex items-center text-sm font-medium text-center  bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 -ml-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                  <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                                </svg>
                                Edit
                              </button>
                            }
                            {
                              (user.roles.includes('Admin') || user.roles.includes('Editor'))
                              &&

                              <button type="button" data-drawer-target="AddProductMetaModal" data-drawer-show="AddProductMetaModal" aria-controls="AddProductMetaModal" onClick={() => { setProductToAddMetaTo(product) }} className="text-white py-2 px-3 flex items-center text-sm font-medium text-center  bg-slate-700 rounded-lg hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 -ml-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                  <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                                </svg>
                                Add Or Update Meta
                              </button>
                            }
                            <button type="button" data-drawer-target="drawer-read-product-advanced" data-drawer-show="drawer-read-product-advanced" aria-controls="drawer-read-product-advanced" onClick={() => { setProductPreview(product) }} className="py-2 px-3 flex items-center text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2 -ml-0.5">
                                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" />
                              </svg>
                              Preview
                            </button>
                            {
                              (user.roles.includes('Admin'))
                              &&
                              <button onClick={() => { setProductDelete(product) }} type="button" data-modal-target="delete-modal" data-modal-toggle="delete-modal" className="flex items-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 -ml-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                Delete
                              </button>
                            }
                          </div>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
              <div className='flex justify-center py-10'>
                {
                  loading &&
                  <div className='w-full flex justify-center' role="status">
                    <svg aria-hidden="true" className="inline w-36 h-36 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                }
              </div>
            </div>
            <Pagination data={products} ziggy={ziggy} />
          </div>
        </div>
      </section>
      {/* <!-- End block --> */}

      <AddNewProductModal setProducts={updateProductsState} categories={categories} />
      {productToAddMetaTo && <AddProductMeta product={productToAddMetaTo} />}
      <EditProduct setProducts={updateProductsState} product={productEdit} categories={categories} />
      <DeleteProduct setProducts={updateProductsState} product={productDelete} />
      <ProductPreview product={productPreview} />
      <BulkUploadProducts />
      <MakeTestCsv />
    </DashboardLayout >
  )
}

export default Products