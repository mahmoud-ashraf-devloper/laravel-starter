@include('site.parts.start')
<div class="relative">
    

    <!-- Page Content -->
    <main class="pt-[4rem]">
        @include('site.parts.nav')
        <div class=" h-full mx-auto w-full ">
            @yield('main')
        </div>
    </main>
</div>

@include('site.parts.shopping-cart')
@include('site.parts.contact-form')
@include('site.parts.product-added-notification')
@include('site.parts.footer')
@include('site.parts.end')
