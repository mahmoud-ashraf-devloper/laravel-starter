
<!-- drawer component -->
<div id="shopping-cart"
    class="fixed top-0 right-0 z-40 min-h-screen lg:w-1/4 md:1/3 w-full overflow-y-auto transition-transform translate-x-full dark:bg-gray-800"
    tabindex="-1" aria-labelledby="shopping-cart">

    <div class="flex h-screen flex-col  bg-slate-50 shadow-xl  dark:bg-gray-800 dark:text-white">
        <div class="flex items-start justify-between px-6 py-8">
            <h2 class="text-lg font-medium dark:text-white text-gray-900" id="slide-over-title">Shopping cart
            </h2>
            <div class="ml-3 flex h-7 items-center">
                <button type="button" data-drawer-hide="shopping-cart" aria-controls="shopping-cart"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only">Close menu</span>
                </button>
            </div>
        </div>
        <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">

            <div class="mt-8">
                <div class="flow-root">
                    <ul id="cart" role="list" class="-my-6 divide-y divide-gray-200 flex flex-col space-y-4">
                        items
                    </ul>
                </div>
            </div>
        </div>

        <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
            <div class="flex justify-between text-base font-medium text-gray-900 dark:text-white">
                <p id="total"></p>

            </div>
            <p class="mt-0.5 text-sm text-gray-500 dark:text-white">Shipping and taxes calculated at checkout.
            </p>
            <div class="mt-6">
                <a href="{{ route('checkout') }}"
                    class="flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700">Checkout</a>
            </div>
            <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                    or <button type="button" data-drawer-hide="shopping-cart" aria-controls="shopping-cart"
                        class="font-medium text-blue-600 hover:text-blue-500">Continue
                        Shopping<span aria-hidden="true"> &rarr;</span></button>
                </p>
            </div>
        </div>
    </div>
</div>
