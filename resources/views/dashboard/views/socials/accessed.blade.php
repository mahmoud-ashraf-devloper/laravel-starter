@extends('dashboard.layouts.base')

@section('main')
    <h1>Use</h1>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4 my-6">
            <a href="#" class="flex items-center  justify-center p-4  h-24 rounded bg-gray-50 dark:bg-gray-800 text-base font-medium text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white">
                <i class="fa-brands fa-facebook fa-beat fa-2xl" style="color: #003ca3;"></i>
                <span class="w-full ml-4">Facebook</span>
            </a> 
            <a href="#" class="flex items-center  justify-center p-4  h-24 rounded bg-gray-50 dark:bg-gray-800 text-base font-medium text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white">
                <i class="fa-brands fa-instagram fa-beat fa-2xl" style="color: #da220d;"></i>
                <span class="w-full ml-4">Instagram</span>
            </a> 
            <a href="#" class="flex items-center  justify-center p-4  h-24 rounded bg-gray-50 dark:bg-gray-800 text-base font-medium text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white">
                <i class="fa-brands fa-twitter fa-beat fa-2xl" style="color: #005fa3;"></i>
                <span class="w-full ml-4">Twitter</span>
            </a> 
            <a href="#" class="flex items-center  justify-center p-4  h-24 rounded bg-gray-50 dark:bg-gray-800 text-base font-medium text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white">
                <i class="fa-brands fa-linkedin fa-beat fa-2xl" style="color: #003ca3;"></i>
                <span class="w-full ml-4">Linkedin</span>
            </a> 
    </div>
@endsection
