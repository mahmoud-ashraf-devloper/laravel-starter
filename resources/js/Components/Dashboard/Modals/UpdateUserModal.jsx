import React from 'react'

function UpdateUserModal({ user, roles, permissions }) {
    return (
        <div id="updateUserModal" tabIndex="-1" aria-hidden="true"
            className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                {/* <!-- Modal content -. */}
                <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                    {/* <!-- Modal header -. */}
                    <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Update User Roles and Permissions For {user.name}</h3>
                        <button type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-toggle="updateUserModal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* <!-- Modal body -. */}
                    <form id="editForm" method="POST" action="{ route('dashboard.users.sync.permissions') }">
                        {/* @csrf */}
                        {/* @method('POST') */}
                        <div className="flex flex-col gap-4 mb-4">
                            <div>
                                <select id="role"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option defaultValue="">Select Role</option>
                                    {
                                        roles.map((role, index) => (
                                            <option key={index} value={role.id}>{role.name}</option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className="flex flex-col">
                                {
                                    permissions.map((permission, index) => (
                                        <div key={index} className="flex items-center">
                                            <div className="flex items-center h-5">
                                                <input name="permissions[]" id="permission_{ permission.id }"
                                                    type="checkbox"
                                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                                            </div>
                                            <label htmlFor="permission_{ permission.id }"
                                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{permission.name}</label>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                        <button type="submit"
                            className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg className="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                    clipRule="evenodd" />
                            </svg>
                            Add new user
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateUserModal