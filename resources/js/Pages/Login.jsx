import { useState } from 'react'
import { router } from '@inertiajs/react'
import { usePage } from '@inertiajs/inertia-react';
import SiteLayout from '../Layouts/SiteLayout'

function Login() {

    const { errors, message } = usePage().props;

    const [values, setValues] = useState({
        email: "",
        password: "",
        remember: "",
    })

    console.log(errors);
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
        router.post(route('login'), values)
    }



    return (
        <SiteLayout>
            <div className="flex flex-col justify-center items-center min-h-[calc(100vh-4rem)] relative z-10">
                {
                    message
                    &&
                    <div className="flex p-4 mb-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800" role="alert">
                        <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Info</span>
                        <div>
                            <span className="font-medium">Warning alert!</span> {message}
                        </div>
                    </div>
                }
                <div className="md:w-1/2 lg:w-1/3 w-full p-4 md:p-7 rounded-lg bg-slate-100 dark:bg-slate-800">
                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white text-center">
                        User Login
                    </h3>
                    <ul>
                        {errors.email && <li className='text-xs text-red-600 font-bold pl-1 pb-1'>{errors.email}</li>}
                        {errors.password && <li className='text-xs text-red-600 font-bold pl-1 pb-1'>{errors.password}</li>}
                    </ul>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                email</label>
                            <input id="email" type="email" name="email" value={values.email} onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@flowbite.com" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                password</label>
                            <input id="password" type="password" name="password" value={values.password} onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                        <div className="flex items-start mb-6">
                            <div className="flex items-center h-5">
                                <input id="remember_me" type="checkbox" name="remember" value={values.remember} onChange={handleChange}
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                />
                            </div>
                            <label htmlFor="remember_me" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember
                                me</label>
                        </div>
                        <button type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>

                        <div className="flex items-center justify-end mt-4">
                            <a className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                                href="{{ route('password.request') }}">
                                Forgot your password?
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </SiteLayout>
    )
}

export default Login