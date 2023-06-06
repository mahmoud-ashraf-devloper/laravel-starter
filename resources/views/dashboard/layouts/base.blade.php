@include('dashboard.parts.start')
<div class="antialiased bg-gray-50 dark:bg-gray-900">
    <!-- Page Content -->
    @include('dashboard.parts.nav')
    @include('dashboard.parts.sidebar')
    <main class="p-4 md:ml-64 h-auto pt-20">

        @yield('main')


    </main>
</div>
@include('dashboard.parts.end')
