import React, { useEffect } from 'react'
import DashboardLayout from '../../Layouts/DashboardLayout'
import UpdateUserModal from '../../Components/Dashboard/Modals/UpdateUserModal';
import { useState } from 'react';
import DeleteUSerModal from '../../Components/Dashboard/Modals/DeleteUSerModal';
import Pagination from './../../Components/Dashboard/Pagination';

function Categories({ categories, ziggy }) {
  const [updateUser, setUpdateUser] = useState(categories.data[0]);
  const [deleteUser, setDeleteUser] = useState(categories.data[0]);
  useEffect(() => {
    console.log(updateUser);
  }, [updateUser])

  const handleUpdateUser = (user) => {
    setUpdateUser(user)
    console.log(user, updateUser);
  }
  return (
    <DashboardLayout>
      {/* <!-- Start block -. */}
      <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased">
        <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
          {/* <!-- Start coding here -. */}
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full md:w-1/2">
                <form className="flex items-center">
                  <label htmlFor="simple-search" className="sr-only">Search</label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd" />
                      </svg>
                    </div>
                    <input type="text" id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search" />
                  </div>
                </form>
              </div>
              <div
                className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">

                <div className="flex items-center space-x-3 w-full md:w-auto">
                  <button id="actionsDropdownButton" data-dropdown-toggle="actionsDropdown"
                    className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    type="button">
                    <svg className="-ml-1 mr-1.5 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path clipRule="evenodd" fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                    Actions
                  </button>
                  <div id="actionsDropdown"
                    className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="actionsDropdownButton">
                      <li>
                        <a href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mass
                          Edit</a>
                      </li>
                    </ul>
                    <div className="py-1">
                      <a href="#"
                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete
                        all</a>
                    </div>
                  </div>
                  <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown"
                    className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                      className="h-4 w-4 mr-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd"
                        d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                        clipRule="evenodd" />
                    </svg>
                    Filter
                    <svg className="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path clipRule="evenodd" fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </button>
                  <div id="filterDropdown"
                    className="z-10 hidden w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
                    <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">User</h6>
                    <ul className="space-y-2 text-sm" aria-labelledby="filterDropdownButton">
                      <li className="flex items-center">
                        <input id="apple" type="checkbox"
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label htmlFor="apple"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Apple
                          (56)</label>
                      </li>
                      <li className="flex items-center">
                        <input id="fitbit" type="checkbox"
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label htmlFor="fitbit"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Fitbit
                          (56)</label>
                      </li>
                      <li className="flex items-center">
                        <input id="dell" type="checkbox"
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label htmlFor="dell"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Dell
                          (56)</label>
                      </li>
                      <li className="flex items-center">
                        <input id="asus" type="checkbox"
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label htmlFor="asus"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Asus
                          (97)</label>
                      </li>
                      <li className="flex items-center">
                        <input id="logitech" type="checkbox"
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label htmlFor="logitech"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Logitech
                          (97)</label>
                      </li>
                      <li className="flex items-center">
                        <input id="msi" type="checkbox"
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label htmlFor="msi"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">MSI
                          (97)</label>
                      </li>
                      <li className="flex items-center">
                        <input id="bosch" type="checkbox"
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label htmlFor="bosch"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Bosch
                          (176)</label>
                      </li>
                      <li className="flex items-center">
                        <input id="sony" type="checkbox"
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label htmlFor="sony"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Sony
                          (234)</label>
                      </li>
                      <li className="flex items-center">
                        <input id="samsung" type="checkbox"
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label htmlFor="samsung"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Samsung
                          (76)</label>
                      </li>
                      <li className="flex items-center">
                        <input id="canon" type="checkbox"
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label htmlFor="canon"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Canon
                          (49)</label>
                      </li>
                      <li className="flex items-center">
                        <input id="microsoft" type="checkbox"
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label htmlFor="microsoft"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Microsoft
                          (45)</label>
                      </li>
                      <li className="flex items-center">
                        <input id="razor" type="checkbox"
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label htmlFor="razor"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Razor
                          (49)</label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-4 py-4">Id</th>
                    <th scope="col" className="px-4 py-3">Name</th>
                    <th scope="col" className="px-4 py-3">Is Main</th>
                    <th scope="col" className="px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    categories.data.map(item => (
                      <tr key={item.id} className="border-b dark:border-gray-700">
                        <th scope="row"
                          className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {item.id}</th>
                        <td className="px-4 py-3">{item.name}</td>
                        {
                          item.parent_id ?
                            <td className="px-4 py-3 max-w-[12rem] truncate "><span className='uppercase text-xs bg-gray-500 text-white px-2 py-1 rounded-md font-bold'>not main</span></td>
                            :
                            <td className="px-4 py-3 max-w-[12rem] truncate "><span className='uppercase text-xs bg-green-500 text-white px-2 py-1 rounded-md font-bold'>main</span></td>
                        }

                        <td className='flex justify-center'>
                          <div id="actions"
                            className="z-10 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 w-fit">
                            <ul className="py-1 text-sm flex justify-end" aria-labelledby="actions-button">
                              <li>
                                <button data-modal-target="updateUserModal" onClick={() => { setUpdateUser(item) }}
                                  data-modal-toggle="updateUserModal"
                                  className="editBtn flex w-full items-center py-2 px-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-700 dark:text-gray-200">
                                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path
                                      d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                    <path fillRule="evenodd" clipRule="evenodd"
                                      d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                                  </svg>
                                </button>
                              </li>

                              <li>
                                <button type="button" data-modal-target="deleteModal" onClick={() => { setDeleteUser(item) }}
                                  data-modal-toggle="deleteModal"
                                  className="flex w-full items-center py-2 px-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-red-500 dark:hover:text-red-400">
                                  <svg className="w-4 h-4" viewBox="0 0 14 15" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                      fill="currentColor"
                                      d="M6.09922 0.300781C5.93212 0.30087 5.76835 0.347476 5.62625 0.435378C5.48414 0.523281 5.36931 0.649009 5.29462 0.798481L4.64302 2.10078H1.59922C1.36052 2.10078 1.13161 2.1956 0.962823 2.36439C0.79404 2.53317 0.699219 2.76209 0.699219 3.00078C0.699219 3.23948 0.79404 3.46839 0.962823 3.63718C1.13161 3.80596 1.36052 3.90078 1.59922 3.90078V12.9008C1.59922 13.3782 1.78886 13.836 2.12643 14.1736C2.46399 14.5111 2.92183 14.7008 3.39922 14.7008H10.5992C11.0766 14.7008 11.5344 14.5111 11.872 14.1736C12.2096 13.836 12.3992 13.3782 12.3992 12.9008V3.90078C12.6379 3.90078 12.8668 3.80596 13.0356 3.63718C13.2044 3.46839 13.2992 3.23948 13.2992 3.00078C13.2992 2.76209 13.2044 2.53317 13.0356 2.36439C12.8668 2.1956 12.6379 2.10078 12.3992 2.10078H9.35542L8.70382 0.798481C8.62913 0.649009 8.5143 0.523281 8.37219 0.435378C8.23009 0.347476 8.06631 0.30087 7.89922 0.300781H6.09922ZM4.29922 5.70078C4.29922 5.46209 4.39404 5.23317 4.56282 5.06439C4.73161 4.8956 4.96052 4.80078 5.19922 4.80078C5.43791 4.80078 5.66683 4.8956 5.83561 5.06439C6.0044 5.23317 6.09922 5.46209 6.09922 5.70078V11.1008C6.09922 11.3395 6.0044 11.5684 5.83561 11.7372C5.66683 11.906 5.43791 12.0008 5.19922 12.0008C4.96052 12.0008 4.73161 11.906 4.56282 11.7372C4.39404 11.5684 4.29922 11.3395 4.29922 11.1008V5.70078ZM8.79922 4.80078C8.56052 4.80078 8.33161 4.8956 8.16282 5.06439C7.99404 5.23317 7.89922 5.46209 7.89922 5.70078V11.1008C7.89922 11.3395 7.99404 11.5684 8.16282 11.7372C8.33161 11.906 8.56052 12.0008 8.79922 12.0008C9.03791 12.0008 9.26683 11.906 9.43561 11.7372C9.6044 11.5684 9.69922 11.3395 9.69922 11.1008V5.70078C9.69922 5.46209 9.6044 5.23317 9.43561 5.06439C9.26683 4.8956 9.03791 4.80078 8.79922 4.80078Z" />
                                  </svg>
                                </button>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>


            <Pagination data={categories} ziggy={ziggy} />
          </div>
        </div>
      </section>

      {/* <UpdateUserModal roles={roles} permissions={permissions} user={updateUser} />
      <DeleteUSerModal user={deleteUser} /> */}

    </DashboardLayout >
  )
}

export default Categories