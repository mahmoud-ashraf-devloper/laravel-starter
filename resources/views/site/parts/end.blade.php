<script>
    var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

    // Change the icons inside the button based on previous settings
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia(
            '(prefers-color-scheme: dark)').matches)) {
        themeToggleLightIcon.classList.remove('hidden');
    } else {
        themeToggleDarkIcon.classList.remove('hidden');
    }

    var themeToggleBtn = document.getElementById('theme-toggle');

    themeToggleBtn.addEventListener('click', function() {

        // toggle icons inside button
        themeToggleDarkIcon.classList.toggle('hidden');
        themeToggleLightIcon.classList.toggle('hidden');

        // if set via local storage previously
        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }

            // if NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }

    });


    // select the favicon 👉
    const faviconEl = document.querySelector('link[rel="icon"]')
    const logoFooter = document.getElementById('footer-logo')

    // watch for changes 🕵️
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', themeChange)

    // listener 👂
    function themeChange(event) {
        if (event.matches) {
            faviconEl.setAttribute('href', 'favicon-dark.png')
            logoFooter.setAttribute('src', 'logo-dark.png')
        } else {
            faviconEl.setAttribute('href', 'favicon-dark.png')
            logoFooter.setAttribute('src', 'logo-light.png')
        }
    }
</script>
{{-- @vite(['resources/js/cart.js']) --}}
<script src="{{ asset('js/cart.js') }}" defer></script>
</body>

</html>
