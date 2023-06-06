   @extends('site.layouts.base')
   @section('main')
    <div class="flex justify-center items-center min-h-[calc(100vh-4rem)] relative z-10">

       <div class="md:w-1/2 lg:w-1/3 w-full p-4 md:p-7 rounded-lg bg-slate-100 dark:bg-slate-800">
           <!-- Session Status -->
           <x-auth-session-status class="mb-4" :status="session('status')" />
           <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white text-center">
                User Login
            </h3>
            @if ($errors)
            <ul>
                @foreach ($errors->all() as $message)
                    <li class="text-xs text-red-600 font-bold pl-1 pb-1">{{ $message }}</li>
                @endforeach
            </ul>
            @endif
           <form method="POST" action="{{ route('login') }}">
               @csrf
               <!-- Email Address -->
               <div class="mb-6">
                   <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                       email</label>
                   <input id="email" type="email" name="email" value="{{ old('email') }}"
                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="name@flowbite.com" required>
               </div>
               <div class="mb-6">
                   <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                       password</label>
                   <input id="password" type="password" name="password" value="{{ old('password') }}"
                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       required>
               </div>
               <div class="flex items-start mb-6">
                   <div class="flex items-center h-5">
                       <input id="remember_me" type="checkbox" name="remember"
                           class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                           >
                   </div>
                   <label for="remember_me" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember
                       me</label>
               </div>
               <button type="submit"
                   class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>

               <div class="flex items-center justify-end mt-4">
                   @if (Route::has('password.request'))
                       <a class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                           href="{{ route('password.request') }}">
                           {{ __('Forgot your password?') }}
                       </a>
                   @endif
               </div>
           </form>
       </div>
    </div>

   @endsection
