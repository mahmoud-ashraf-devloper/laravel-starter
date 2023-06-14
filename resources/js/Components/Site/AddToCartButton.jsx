import { React, useRef, useState } from 'react'
import { usePage } from '@inertiajs/inertia-react';
import { addToCart } from '../../features/cartSlice';
import { useDispatch } from 'react-redux';



function AddToCartButton({ product, text, classes }) {
    const [isDisabled, setIsDisabled] = useState(false);
    let { authenticated, user, appUrl } = usePage().props;
    let buttonRef = useRef();

    const dispatch = useDispatch();
    // const handleClick = () => {

    //     let data = {
    //         userId: user ? user.id : null,
    //         product_id: product.id,
    //     };

    //     setIsDisabled(true);

    //     axios
    //         .post(route('shopping.cart.add'), data)
    //         .then(function (response) {
    //             console.log(response.data);
    //             setIsDisabled(false);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });

    // }

    return (
        <button disabled={isDisabled} ref={buttonRef} type="button" onClick={() => {
            let item = null;
            item = { ...product, quantity: 1 };
            dispatch(addToCart(item));
        }}
            className={classes}>
            {text}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                fill="currentColor" className="bi bi-bag-plus dark:text-white" viewBox="0 0 16 16">
                <path fillRule="evenodd"
                    d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                <path
                    d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg>
        </button>
    )
}

export default AddToCartButton