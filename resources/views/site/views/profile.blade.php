@extends('site.layouts.base')
@section('main')
    <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-7xl lg:py-16 grid md:grid-cols-8 gap-10">
            <div class="col-span-2 dark:text-white">
                <div class="p-3">
                    <div class="flex items-center justify-between mb-2">
                        <a href="#">
                            <img class="w-10 h-10 rounded-full"
                                src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos">
                        </a>

                    </div>
                    <p class="text-base font-semibold leading-none text-gray-900 dark:text-white">
                        <a href="#">{{ auth()->user()->name }}</a>
                    </p>
                    <p class="mb-3 text-sm font-normal">
                        <a href="#" class="hover:underline"><span>@</span>{{ auth()->user()->name }}</a>
                    </p>
                    <p class="mb-4 text-sm">I am love two things in life programming and sports
                        <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">
                            my website
                        </a>
                    </p>
                    <ul class="flex text-sm">
                        <li class="mr-2">
                            <a href="#" class="hover:underline">
                                <span class="font-semibold text-gray-900 dark:text-white">0</span>
                                <span>Orders</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">
                                <span class="font-semibold text-gray-900 dark:text-white">Products In Cart</span>
                                <span>0</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-span-6 flex flex-col space-y-8">
                <div>
                    <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Update Profile Picture</h2>
                    <form action="#">
                        <div class="grid gap-4 sm:grid-cols-2 sm:gap-2">
                            <div class="sm:col-span-2">
                                <div class="flex items-center justify-center md:w-1/4">
                                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                        <div class="flex flex-col items-center justify-center pt-2 pb-3 px-1">
                                            <svg aria-hidden="true" class="w-5 h-5 mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                            <p class="text-center mb-2 text-xs text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                            <p class="text-center text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                        </div>
                                        <input id="dropzone-file" type="file" class="hidden" />
                                    </label>
                                </div> 
                            </div>
                        </div>
                        <button type="submit"
                            class="inline-flex max-w-fit justify-center items-center px-5 py-2.5 mt-2 sm:mt-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                            Update Picture
                        </button>
                    </form>
                </div>
                <div>
                    <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Profile Data</h2>
                    <form action="#">
                        <div class="grid gap-4 sm:grid-cols-2 sm:gap-2">
                            <div class="sm:col-span-2">
                                <input type="text" name="name" id="name"
                                    class="bg-gray-50 border border-gray-300 max-w-lg text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Name" required="">
                            </div>
                            <div class="sm:col-span-2">
                                <input type="text" name="username" id="username"
                                    class="bg-gray-50 border border-gray-300 max-w-lg text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Username" required="">
                            </div>
                            <div class="sm:col-span-2">
                                <input type="text" name="bio" id="bio"
                                    class="bg-gray-50 border border-gray-300 max-w-lg text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Bio" required="">
                            </div>
                            <div class="sm:col-span-2">
                                <input type="text" name="website" id="website"
                                    class="bg-gray-50 border border-gray-300 max-w-lg text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Website" required="">
                            </div>

                            <button type="submit"
                                class="inline-flex max-w-fit justify-center items-center px-5 py-2.5 mt-2 sm:mt-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                Update Profile
                            </button>
                        </div>
                    </form>

                </div>
                <div class="">
                    <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Update Password</h2>
                    <form action="#">
                        <div class="grid gap-4 sm:grid-cols-2 sm:gap-2">
                            <div class="sm:col-span-2">
                                <input type="password" name="password" id="password"
                                    class="bg-gray-50 border border-gray-300 max-w-lg text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Password" required="">
                            </div>
                            <div class="sm:col-span-2">
                                <input type="password" name="password_confirmation" id="password_confirmation"
                                    class="bg-gray-50 border border-gray-300 max-w-lg text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Password Ponfirmation" required="">
                            </div>


                            <button type="submit"
                                class="inline-flex max-w-fit justify-center items-center px-5 py-2.5 mt-2 sm:mt-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                Update Password
                            </button>
                        </div>
                    </form>
                </div>
                <div>
                    <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Update Email</h2>
                    <form action="#">
                        <div class="grid gap-4 sm:grid-cols-2 sm:gap-2">
                            <div class="sm:col-span-2">
                                <input type="text" name="email" id="email"
                                    class="bg-gray-50 border border-gray-300 max-w-lg text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Email" required="">
                            </div>
                        </div>
                        <button type="submit"
                            class="inline-flex max-w-fit justify-center items-center px-5 py-2.5 mt-2 sm:mt-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                            Update Email
                        </button>
                    </form>
                </div>
            </div>

        </div>
    </section>
@endsection
