import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();


import React from 'react'
import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/inertia-react'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'

import store from './store';
import { Provider } from 'react-redux';
import StoreComponent from './Components/Site/StoreComponent';
import { toast, ToastContainer } from 'react-toastify';

import { Head } from '@inertiajs/react'

createInertiaApp({
    progress: {
        // The delay after which the progress bar will appear, in milliseconds...
        delay: 250,

        // The color of the progress bar...
        color: '#29d',

        // Whether to include the default NProgress styles...
        includeCSS: true,

        // Whether the NProgress spinner will be shown...
        showSpinner: false,
    },
    // Below you can see that we are going to get all React components from resources/js/Pages folder
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        createRoot(el).render(
            <Provider store={store}>
                <App {...props}>
                </App>
                <ToastContainer />
            </Provider>
        )
    },
})


