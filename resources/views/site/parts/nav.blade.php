<nav class="bg-white dark:bg-gray-900 fixed w-full z-30 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="flex items-center">
            <div class="w-15 h-15 ">
                <svg class="w-14 fill-blue-600 h-14" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" viewBox="0 0 750 750"><defs><path id="a" fill="transparent" d="M-75-75h900v900H-75z"/></defs><defs><clipPath id="b"><path d="M9 8h733v734H9Zm0 0"/></clipPath></defs><use xlink:href="#a"/><use xlink:href="#a"/><use xlink:href="#a"/><g clip-path="url(#b)"><path d="M291 463a85 85 0 1 0 94-85c-2 0-3-1-3-2v-90c0-2 1-3 2-3a29 29 0 1 0-17 0c2 0 2 1 2 3v90l-2 2c-43 5-76 41-76 85ZM82 134a20 20 0 1 0 39 5 20 20 0 0 0-39-5Zm123-78a20 20 0 1 0 5-38 20 20 0 0 0-5 38Zm337 0a20 20 0 1 0 5-38 20 20 0 0 0-5 38Zm106 100a20 20 0 1 0 5-39 20 20 0 0 0-5 39ZM93 168a33 33 0 1 1 17 0l-2 2v126l2 3 147 44 3-1c13-12 28-22 45-29 1-1 2-4 0-5l-102-83-2-5V71l-2-2a33 33 0 1 1 17 0l-2 2v144l1 2 73 60c2 2 5 0 4-2l-2-19a86 86 0 1 1 169 19c0 2 3 4 5 2l73-60 1-2V71l-2-2a33 33 0 1 1 17 0c-2 0-2 1-2 2v149l-3 5-101 83c-2 1-2 4 0 5 16 7 32 17 45 29l2 1 148-44 2-3V170l-2-2a33 33 0 1 1 17 0l-2 2v136l-2 2-162 49h-4v-1h-2v-1a1 1 0 0 1-1 0c-16-16-36-28-58-36h-1v-1h-1v-1h-1v-1l-1-1v-4a7 7 0 0 1 1-2l1-1a73 73 0 1 0-99 1h-1l1 1a7 7 0 0 1 1 2v3l-1 1-1 1v1a103 103 0 0 0-1 0l-1 1h-1c-21 8-41 20-58 36l-1 1h-1v1h-1a6 6 0 0 1-3 0L97 308l-2-2V170l-2-2Zm636 448a20 20 0 1 0-39-6 20 20 0 0 0 39 6Zm-91 78a20 20 0 1 0-5 39 20 20 0 0 0 5-39Zm104-81c0 20-18 36-38 32-13-2-25-15-27-28s5-26 15-32c1-1 2-2 1-3l-36-125-2-2-105-12c-2 0-4 2-3 3a173 173 0 0 1-10 86c-1 1 0 3 2 3l70 14c3 1 5 3 6 6l21 123c0 2 1 3 2 3a33 33 0 1 1-8 64 33 33 0 0 1-9-62c2 0 2-1 2-2l-20-118-2-2-76-15a6 6 0 0 1-2-1h-1v-1h-1v-1h-1v-6a158 158 0 0 0 11-102l1-2c2-3 5-4 7-4h3l120 14c3 0 5 2 6 4l38 131c0 2 1 2 3 2 18 0 33 15 33 33Zm-623 81a20 20 0 1 0-5 39 20 20 0 0 0 5-39Zm-57-78a20 20 0 1 0-39-6 20 20 0 0 0 39 6Zm169-73v1h-1v1h-1l-1 1h-1l-76 15-2 2-20 118 1 2a33 33 0 1 1-16-2c1 0 2-1 2-3l21-123c1-3 3-5 5-6l71-14c2 0 3-2 2-3a171 171 0 0 1-10-86c0-1-1-3-3-3L97 455l-2 2-37 125 1 3a33 33 0 1 1-17-5h1c1 0 2 0 3-2l38-131c1-2 3-4 5-4l120-14h2c3-1 6 0 9 4v2a160 160 0 0 0 11 102l1 1v4l-1 1Zm283 30a172 172 0 0 1-275 1c-3-4-1-11 7-10l2 1c30 41 77 64 128 64 50 0 96-23 126-63 4-4 11-3 13 5l-1 2"/></g></svg>
            </div>
            <span
                class="self-center md:text-2xl font-semibold whitespace-nowrap text-blue-600 uppercase">{{ env('APP_NAME') }}</span>
        </a>
        <div class="flex md:order-2">
            
            <button id="theme-toggle" type="button"
                class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
                <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        fill-rule="evenodd" clip-rule="evenodd"></path>
                </svg>
            </button>

            <div class="flex items-center ml-3">
                @if (auth()->check())
                    <div>
                        <button type="button"
                            class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                            aria-expanded="false" data-dropdown-toggle="dropdown-user">
                            <span class="sr-only">Open user menu</span>
                            <img class="w-8 h-8 rounded-full"
                                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo">
                        </button>
                    </div>
                    <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                        id="dropdown-user">
                        <div class="px-4 py-3" role="none">
                            <p class="text-sm text-gray-900 dark:text-white" role="none">
                                {{ auth()->user()->name }}
                            </p>
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                                {{ auth()->user()->email }}
                            </p>
                        </div>
                        <ul class="py-1" role="none">
                            <li>
                                <a href="{{ route('dashboard') }}"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                    role="menuitem">Dashboard</a>
                            </li>
                            <li>
                                <a href="{{ route('shop') }}"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                    role="menuitem">shop</a>
                            </li>
                            <li>
                                <a href="{{ route('user.orders') }}"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                    role="menuitem">Previous Orders</a>
                            </li>
                            <li>
                                <a href="{{ route('user.profile') }}"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                    role="menuitem">Profile Setting</a>
                            </li>
                            <li>
                                <form method="POST" action="{{ route('logout') }}">
                                    @csrf
                                    <button type="submit"
                                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                        role="menuitem">Sign out</button>

                                </form>
                            </li>
                        </ul>
                    </div>
                @else
                    <div class="md:flex justify-center items-center hidden">
                        <div class="flex text-sm font-bold mr-2 gap-1 dark:text-white">
                            <a href="{{ route('register') }}">Register</a>
                            <span class="text-gray-500">Or</span>
                        </div>
                        <a href="{{ route('login') }}"
                            class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</a>

                    </div>
                @endif
            </div>
            
            <button
                class="relative md:ml-2 mt-2 dark:text-white text-gray-500 hover:text-slate-950 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 mr-2 mb-2  dark:hover:text-white/80 focus:outline-none dark:focus:ring-blue-800"
                type="button" id="shopping-cart-button"
                data-drawer-target="shopping-cart" data-drawer-backdrop="true" data-drawer-backdrop-clases="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30" data-drawer-show="shopping-cart" data-drawer-placement="right" aria-controls="shopping-cart"
                >
                <i class="fa-sharp fa-solid fa-cart-shopping fa-lg"></i>
                <span id="cartitems" class="absolute -top-1 -right-1 bg-blue-600 text-white w-5 h-5 rounded-full">/span>
            </button>

            <button data-collapse-toggle="navbar-sticky" type="button"
                class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"></path>
                </svg>
            </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul
                class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <a href="/"
                        class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                        aria-current="page">Home</a>
                </li>
                <li>
                    <a href="#"
                        class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                </li>
                <li>
                    <a href="{{ route('shop') }}"
                        class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        role="menuitem">shop</a>
                </li>
                <li>
                    <a href="{{ route('blog') }}"
                        class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        role="menuitem">blog</a>
                </li>
                
                <li>
                    <button type="button" data-drawer-target="contact-form" data-drawer-show="contact-form" aria-controls="contact-form"
                        class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</button>
                </li>
            </ul>
        </div>
    </div>
</nav>
