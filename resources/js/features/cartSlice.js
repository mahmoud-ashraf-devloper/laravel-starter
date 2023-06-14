import { createSlice } from "@reduxjs/toolkit";
import Swal from 'sweetalert2';
import axios from 'axios';
import { useDispatch } from "react-redux";
import store from '../store'

const initialState = {
    cartItems: [],
    totalPrice: 0,
}


const pushItemsToCart = (cartItems) => {
    let cartItemsData = [];
    let totalPrice = 0;
    cartItems.forEach(element => {
        totalPrice += element.product.price * element.qty;
        cartItemsData.push({ ...element.product, quantity: element.qty });
    });


    if (totalPrice) {
        store.dispatch(setTotalPrice(totalPrice));
    }

    if (cartItems.length == 0) {
        store.dispatch(setTotalPrice(0));
    }

    store.dispatch(setCartItems(cartItemsData));
}


axios.get('http://127.0.0.1:8000/carts').then((res) => {
    console.log(res.data);
    if (res.data.data.items) {
        pushItemsToCart(res.data.data.items);
    }
}).catch((error) => {
    console.log('error has occured in initializing the cart slice items', error);
});

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Getting a list of cartItems in a store
        setCartItems: (state, action) => {
            state.cartItems = action.payload
        },
        // Getting a list of cartItems in a store
        setTotalPrice: (state, action) => {
            state.totalPrice = action.payload
        },
        // In case of problems with receiving, we will add an error to the store.
        setError: (state, action) => {
            state.error = action.payload
        },

        addToCart(state, action) {
            console.log(action);
            const item = action.payload;
            axios.post('http://127.0.0.1:8000/carts/add', {
                product_id: item.id
            }).then((res) => {
                // console.log(res.data.data);
                console.log('add', res.data);
                let { items } = res.data.data
                pushItemsToCart(items);
                if (res.data.success == true) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Product Added To The Cart',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }).catch((error) => {
                console.log('error has occured in Adding item the cart slice items', error);
            });
        },
        incrementQ(state, action) {
            const item = action.payload;
            axios.post('http://127.0.0.1:8000/carts/increase', {
                product_id: item.id
            }).then((res) => {
                console.log(res);
                let { items } = res.data.data
                console.log('increase', items);
                pushItemsToCart(items);
                if (res.data.success == true) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Product Quantity Increased',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }).catch((error) => {
                console.log('error has occured in Increaseing item the cart slice items', error);
            });
        },
        decrementQ(state, action) {
            const item = action.payload;
            axios.post('http://127.0.0.1:8000/carts/decrease', {
                product_id: item.id
            }).then((res) => {
                // console.log(res.data.data);
                let { items } = res.data.data
                console.log('decrease', items);
                pushItemsToCart(items);
                if (res.data.success == true) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Product Quantity Decreased',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }).catch((error) => {
                console.log('error has occured in decrease item the cart slice items');
            });
        },
        removeFromCart(state, action) {
            const item = action.payload;
            axios.post('http://127.0.0.1:8000/carts/remove', {
                product_id: item.id
            }).then((res) => {
                // console.log(res.data.data);
                let { items } = res.data.data
                console.log('remove', res.data);
                pushItemsToCart(items);
                if (res.data.success == true) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Product Removed From The Cart',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }).catch((error) => {
                console.log('error has occured in Removeing item the cart slice items');
            });
        }
    }
});


export const { addToCart, incrementQ, decrementQ, removeFromCart, setCartItems, setTotalPrice } = cartSlice.actions;

export default cartSlice.reducer;

