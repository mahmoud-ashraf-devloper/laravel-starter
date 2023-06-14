import { useState } from 'react'
import { router } from '@inertiajs/react'
import SiteLayout from '../Layouts/SiteLayout'
import { usePage } from '@inertiajs/inertia-react';

function Register() {
    const { errors } = usePage().props;
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    })

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        router.post(route('register'), values)
    }

    return (
        <SiteLayout>
            <div class="flex justify-center items-center min-h-[calc(100vh-4rem)] relative z-10">

                <div class="md:w-1/2 lg:w-1/3 w-full p-4 md:p-7 rounded-lg bg-slate-100 border dark:bg-slate-800 border-gray-200 dark:border-gray-700">

                    <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white text-center">
                        User Register
                    </h3>
                    <ul>
                        {errors.email && <li className='text-xs text-red-600 font-bold pl-1 pb-1'>{errors.name}</li>}
                        {errors.password && <li className='text-xs text-red-600 font-bold pl-1 pb-1'>{errors.email}</li>}
                        {errors.password && <li className='text-xs text-red-600 font-bold pl-1 pb-1'>{errors.password}</li>}
                        {errors.password && <li className='text-xs text-red-600 font-bold pl-1 pb-1'>{errors.password_confirmation}</li>}
                    </ul>
                    <form onSubmit={handleSubmit}>
                        <div class="mb-6">
                            <input id="name" type="name" name="name" value={values.name} onChange={handleChange}
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Enter Your Name" />
                        </div>
                        <div class="mb-6">
                            <input id="email" type="email" name="email" value={values.email} onChange={handleChange}
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Enter Your Email" />
                        </div>
                        <div class="mb-6">
                            <input id="password" placeholder="Password" type="password" name="password" value={values.password} onChange={handleChange}
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                        <div class="mb-6">
                            <input id="password_confirmation" placeholder="Confirm Password" type="password" name="password_confirmation" value={values.password_confirmation} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>

                        <button type="submit"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
                    </form>
                </div>
            </div>
        </SiteLayout>
    )
}

export default Register