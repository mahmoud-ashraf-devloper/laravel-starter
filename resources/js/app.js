import './bootstrap';
import 'flowbite';



import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

let shoppingCardWrapper = document.getElementById('shopping-cart-wrapper');
let shoppingCardCloseButton = document.getElementById('shopping-cart-close-button');
let shoppingCardButton = document.getElementById('shopping-cart-button');
// let addToCartBtn = document.getElementsByClassName('.addToCartBtn');


if (shoppingCardButton && shoppingCardCloseButton) {
    shoppingCardButton.addEventListener('click', () => {
        shoppingCardWrapper.classList.toggle('hidden');
    });
    shoppingCardCloseButton.addEventListener('click', () => {
        shoppingCardWrapper.classList.toggle('hidden');
    });

}

// const addToCart = () => {
//     alert('added')
//     console.log(addToCart);
// };

// if (addToCartBtn) {
//     // console.log(addToCartBtn);
//     addToCartBtn.addEventListener('click', addToCart);
// }

