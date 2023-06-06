   @extends('site.layouts.base')
@section('main')
<div class="flex justify-center items-center min-h-[calc(100vh-4rem)] relative z-10">

    <div class="md:w-1/2 lg:w-1/3 w-full p-4 md:p-7 rounded-lg bg-slate-100 border dark:bg-slate-800 border-gray-200 dark:border-gray-700">
        <!-- Session Status -->
        <x-auth-session-status class="mb-4" :status="session('status')" />
         <span>
             @if (session('status'))
             {{session('status')}}
             @endif
         </span>
         <span>
             @if ($errors->has('email'))
             {{
                 dd($errors)
             }}
             @endif
         </span>
        <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white text-center">
             User Register
         </h3>
         @if ($errors)
         <ul>
             @foreach ($errors->all() as $message)
                 <li class="text-xs text-red-600 font-bold pl-1 pb-1">{{ $message }}</li>
             @endforeach
         </ul>
         @endif
        <form method="POST" action="{{ route('register') }}">
            @csrf
            <!-- Email Address -->
            <div class="mb-6">
                <input id="name" type="name" name="name" value="{{ old('name') }}"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Your Name" required>
            </div>
            <div class="mb-6">
                <input id="email" type="email" name="email" value="{{ old('email') }}"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Your Email" required>
            </div>
            <div class="mb-6">
                <input id="password" placeholder="Password" type="password" name="password" value="{{ old('password') }}"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required>
            </div>
            <div class="mb-6">
                <input id="cpassword" placeholder="Confirm Password" type="password" name="password_confirmation" value="{{ old('cpassword') }}"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required>
            </div>
            
            <button type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
        </form>
    </div>
</div>
@endsection
