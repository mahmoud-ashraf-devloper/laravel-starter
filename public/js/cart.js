
// SELECT ELEMENTS
const cartItemsEl = document.querySelector("#cart");
// const cartPageItemsEl = document.querySelector("#cart-page-items");
const subtotalEl = document.querySelector("#total");
const totalItemsInCartEl = document.querySelector("#cartitems");




// cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

// ADD TO CART
function addToCart(product, qty = 1) {
    // check if prodcut already exist in cart
    console.log(cart);
    if (cart.some((item) => item.id === product.id)) {
        changeNumberOfUnits("plus", product.id, qty);
    } else {
        cart.push({
            ...product,
            numberOfUnits: qty,
        });
    }

    updateCart();
    const notificationEl = document.getElementById('item-added-notification');
    // 👇️ removes element from DOM
    notificationEl.classList.add('flex');

    notificationEl.classList.remove('invisible');
    notificationEl.classList.remove('hidden');
    notificationEl.classList.remove('opacity-0');
    notificationEl.classList.add('transition-all');
    notificationEl.classList.add('duration-500');
    notificationEl.classList.add('delay-300');
    notificationEl.classList.add('opacity-100');
    notificationEl.classList.add('z-50');
    setTimeout(() => {
        // 👇️ hides element (still takes up space on page)
        notificationEl.classList.add('transition-all');
        notificationEl.classList.add('duration-1000');
        notificationEl.classList.add('delay-600');
        notificationEl.classList.remove('opacity-100');
        notificationEl.classList.add('opacity-0');
        notificationEl.classList.add('z-0');
        notificationEl.classList.add('hidden');
        notificationEl.classList.add('invisible');
        

    }, 2000);
}

// update cart
function updateCart(cartPage = false) {
    renderCartItems(); //in progress
    renderSubtotal();

    // save cart to local storage
    localStorage.setItem("CART", JSON.stringify(cart));
}

// calculate and render subtotal
function renderSubtotal() {
    let totalPrice = 0,
        totalItems = 0;

    cart.forEach((item) => {
        totalPrice += item.price * item.numberOfUnits;
        totalItems += 1;
    });

    subtotalEl.innerHTML = `Subtotal (${totalItems} items): $${totalPrice.toFixed(2)}`;
    totalItemsInCartEl.innerHTML = totalItems;
}


// function renderCartPageItems(){
//     cartItemsEl.innerHTML = ""; // clear cart element
//     cart.forEach((item) => {
//         cartItemsEl.innerHTML += `
//                     <li>
//                         <div class="cart-item-desc flex justify-between">
//                             <a href="#" class="image">
//                                 <img src='${item.images[0]}'
//                                     class="cart-thumb w-14 h-14 rounded-md" alt="">
//                             </a>
//                             <p class="dark:text-white">${item.title}</p>
//                             <div class="flex flex-col">
//                                 <p class="dark:text-white"> <span id="qauantity">${item.numberOfUnits}</span> x - <span class="price">$${item.price}</span></p>
//                                 <div class="flex space-x-2  dark:bg-slate-700 dark:text-white">
//                                     <span class="p-1  dark:bg-slate-700  rounded-md cursor-pointer" onclick="changeNumberOfUnits('minus', '${item.id}')">-</span>
//                                     <span class="p-1  dark:bg-slate-700  rounded-md cursor-pointer" onclick="changeNumberOfUnits('plus', '${item.id}')">+</span>
//                                     <span class="p-1  dark:bg-slate-700  rounded-md cursor-pointer text-red-600 text-xs font-bold mt-2" onclick="removeItemFromCart('${item.id}')">
//                                         <i class="fa-solid fa-trash"></i>   
//                                     </span>

//                                 </div>
//                             </div>
//                         </div>
//                     </li>
//                 `;

//     });
// }

// render cart items
function renderCartItems() {
    cartItemsEl.innerHTML = ""; // clear cart element
    cart.forEach((item) => {
        cartItemsEl.innerHTML += `
                    <li>
                        <div class="cart-item-desc flex justify-between">
                            <a href="#" class="image">
                                <img src='${item.images[0]}'
                                    class="cart-thumb w-14 h-14 rounded-md" alt="">
                            </a>
                            <p class="dark:text-white">${item.title}</p>
                            <div class="flex flex-col">
                                <p class="dark:text-white"> <span id="qauantity">${item.numberOfUnits}</span> x - <span class="price">$${item.price}</span></p>
                                <div class="flex space-x-2  dark:bg-slate-700 dark:text-white">
                                    <span class="p-1  dark:bg-slate-700  rounded-md cursor-pointer" onclick="changeNumberOfUnits('minus', '${item.id}')">-</span>
                                    <span class="p-1  dark:bg-slate-700  rounded-md cursor-pointer" onclick="changeNumberOfUnits('plus', '${item.id}')">+</span>
                                    <span class="p-1  dark:bg-slate-700  rounded-md cursor-pointer text-red-600 text-xs font-bold mt-2" onclick="removeItemFromCart('${item.id}')">
                                        <i class="fa-solid fa-trash"></i>   
                                    </span>

                                </div>
                            </div>
                        </div>
                    </li>
                `;

    });
}

// remove item from cart
function removeItemFromCart(id, cartPage = false) {
    cart = cart.filter((item) => item.id !== id);

    updateCart(cartPage);
}

// change number of units for an item
function changeNumberOfUnits(action, id, cartPage = false, qty = 1) {
    cart = cart.map((item) => {
        let numberOfUnits = item.numberOfUnits;
        if (item.id === id) {
            if (action === "minus" && numberOfUnits > 1) {
                numberOfUnits--;
            } else if (action === "plus") {
                numberOfUnits++;
            }
        }

        return {
            ...item,
            numberOfUnits,
        };
    });

    updateCart(cartPage);
}
