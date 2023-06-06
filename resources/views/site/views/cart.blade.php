@extends('site.layouts.base')

@section('main')
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-lg overflow-hidden">
        <div class="grid  md:grid-cols-12 my-10 ">
            <div class="md:col-span-8 bg-white dark:md:bg-slate-800 dark:bg-gray-900 md:px-10 md:py-10 rounded-lg md:mr-10 ">
                <div class="flex justify-between border-b pb-8">
                    <h1 class="font-semibold dark:text-white md:text-2xl text-lg">Shopping Cart</h1>
                    <h2 class="font-semibold dark:text-white md:text-2xl text-lg">3 Items</h2>
                </div>
                <div class="flex mt-10 mb-5 justify-between">
                    <h3 class="font-semibold text-gray-600 text-xs uppercase px-2 whitespace-nowrap">Product Details</h3>
                    <h3 class="font-semibold text-gray-600 text-xs uppercase px-2 whitespace-nowrap text-center">Quantity
                    </h3>
                    <h3 class="font-semibold text-gray-600 text-xs uppercase px-2 whitespace-nowrap text-center">Price</h3>
                    <h3 class="font-semibold text-gray-600 text-xs uppercase px-2 whitespace-nowrap text-center">Total</h3>
                </div>
                <div class="flex items-center justify-between dark:hover:bg-gray-800 hover:bg-gray-100 py-5">
                    <div class="flex w-2/5">
                        <!-- product -->
                        <div class="md:w-20 w-14">
                            <img class="md:h-24 h-14 rounded-lg" src="{{ asset('images/products/4.jpg') }}" alt="">
                        </div>
                        <div class="flex flex-col justify-between md:ml-4 ml-1 flex-grow">
                            <span class="font-bold md:text-sm text-xs dark:text-white">Iphone 6S</span>
                            <span class="text-blue-500 text-xs dark:text-white">Apple</span>
                            <a href="#" class="font-semibold hover:text-blue-500 text-gray-500 text-xs">Remove</a>
                        </div>
                    </div>
                    <div class="flex justify-center w-10 rounded-md overflow-hidden">
                        <span
                            class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-10  text-center p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">3</span>
                    </div>
                    <span class="text-center w-1/5 font-semibold md:text-sm text-xs dark:text-white">$400.00</span>
                    <span class="text-center w-1/5 font-semibold md:text-sm text-xs dark:text-white">$400.00</span>
                </div>

                <a href="{{ route('shop') }}" class="flex font-semibold text-blue-600 text-sm my-10">

                    <svg class="fill-current mr-2 text-blue-600 w-4" viewBox="0 0 448 512">
                        <path
                            d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                    </svg>
                    Continue Shopping
                </a>
            </div>

            <div id="summary"
                class="md:col-span-4 md:px-8 md:py-10 bg-white md:dark:bg-slate-800 dark:bg-gray-900 rounded-lg ">
                <h1 class="font-semibold md:text-2xl text-lg dark:text-white border-b pb-8">Order Summary</h1>
                <div class="flex justify-between mt-10 mb-5">
                    <span class="font-semibold text-sm uppercase dark:text-white">Items 3</span>
                    <span class="font-semibold text-sm dark:text-white">590$</span>
                </div>
                <div>
                    <label class="font-medium inline-block mb-2 text-sm uppercase dark:text-white">Shipping</label>
                    <select
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option>Standard shipping - $10.00</option>
                    </select>
                </div>
                <div class="py-4">
                    <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase dark:text-white">Promo
                        Code</label>
                    <input type="text" id="promo" placeholder="Enter your code"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </div>
                <button
                    class="bg-blue-500 hover:bg-blue-600 px-5 py-2 text-sm text-white uppercase dark:text-white rounded-md">Apply</button>
                <div class="border-t mt-8">
                    <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                        <span class=" dark:text-white">Total cost</span>
                        <span class=" dark:text-white">$600</span>
                    </div>
                    <button
                        class="bg-blue-600 font-semibold hover:bg-blue-700 py-3 text-sm text-white uppercase w-full rounded-md">Checkout</button>
                </div>
            </div>

        </div>
    </div>
@endsection
