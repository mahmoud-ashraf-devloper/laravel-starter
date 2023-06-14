import React from 'react'
import { useState } from 'react'
import { router } from '@inertiajs/react'
import { usePage } from '@inertiajs/inertia-react';
import { useEffect } from 'react';
import axios from 'axios';
function AddReviewModal({ product_id, product_slug }) {
    const { user } = usePage().props;
    const { errors } = usePage().props;

    const [reviews, setReviews] = useState([]);
    const [rate, setRate] = useState(5);
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/reviews/${product_slug}`).then((res) => {
            setReviews(res.data)

            console.log(res);
        });
    }, [])

    const onOptionChange = e => {
        setRate(e.target.value)
    }

    const [values, setValues] = useState({
        review: "",
        product_id: product_id,
        user_id: user.id,
    })

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }



    function handleSubmit(e) {
        e.preventDefault()
        router.post(route('reviews.add'), {...values, rate: rate})
    }
    const stars = [
        <svg key="star-1" aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>1st star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>,
        <svg key="star-2" aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>2nd star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>,
        <svg key="star-3" aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>3rd star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>,
        <svg key="star-4" aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>4th star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>,
        <svg key="star-5" aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>5th star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>,
    ];
    return (
        <div id="add-review-modal" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative w-full max-w-xl max-h-full">
                {/* <!-- Modal content --> */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="add-review-modal">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    {/* <!-- Modal header --> */}
                    <div className="px-6 py-4 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
                            Add Review
                        </h3>
                    </div>
                    {/* <!-- Modal body --> */}
                    <form onSubmit={handleSubmit} className="p-6">
                        <div className="my-1 space-y-1">
                            <div>
                                <input onChange={onOptionChange} checked={rate == "1"} type="radio" id="1-star" name="star-rate" value={1} className="hidden peer" />
                                <label htmlFor="1-star" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-600 dark:peer-checked:text-yellow-400 peer-checked:border-yellow-400 peer-checked:text-yellow-400 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-600" >
                                    <div className="flex">
                                        {
                                            stars.map((item, index) => {
                                                if (index + 1 <= 1) {
                                                    return item;
                                                }
                                            })
                                        }
                                    </div>
                                    <span className='text-yellow-400'>
                                        <i className="fa-solid fa-face-frown fa-bounce fa-xl"></i>
                                    </span>

                                </label>
                            </div>
                            <div>
                                <input onChange={onOptionChange} checked={rate == 2} type="radio" id="2-star" name="star-rate" value={2} className="hidden peer" />
                                <label htmlFor="2-star" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-600 dark:peer-checked:text-yellow-400 peer-checked:border-yellow-400 peer-checked:text-yellow-400 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-600" >
                                    <div className="flex">
                                        {
                                            stars.map((item, index) => {
                                                if (index + 1 <= 2) {
                                                    return item;
                                                }
                                            })
                                        }
                                    </div>

                                    <span className='text-yellow-400'>
                                        <i className="fa-solid fa-face-meh fa-bounce fa-xl"></i>
                                    </span>

                                </label>
                            </div>
                            <div>
                                <input onChange={onOptionChange} checked={rate == 3} type="radio" id="3-star" name="star-rate" value={3} className="hidden peer" />
                                <label htmlFor="3-star" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-600 dark:peer-checked:text-yellow-400 peer-checked:border-yellow-400 peer-checked:text-yellow-400 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-600" >
                                    <div className="flex">
                                        {
                                            stars.map((item, index) => {
                                                if (index + 1 <= 3) {
                                                    return item;
                                                }
                                            })
                                        }
                                    </div>

                                    <span className='text-yellow-400'>
                                        <i className="fa-regular fa-face-smile-beam fa-bounce fa-xl"></i>
                                    </span>

                                </label>
                            </div>
                            <div>
                                <input onChange={onOptionChange}  checked={rate == 4} type="radio" id="4-star" name="star-rate" value={4} className="hidden peer" />
                                <label  htmlFor="4-star" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-600 dark:peer-checked:text-yellow-400 peer-checked:border-yellow-400 peer-checked:text-yellow-400 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-600" >
                                    <div className="flex">
                                        {
                                            stars.map((item, index) => {
                                                if (index + 1 <= 4) {
                                                    return item;
                                                }
                                            })
                                        }
                                    </div>

                                    <span className='text-yellow-400'>
                                        <i className="fa-solid fa-face-grin-stars fa-bounce fa-xl"></i>
                                    </span>

                                </label>
                            </div>
                            <div>
                                <input onChange={onOptionChange} checked={rate == 5} type="radio" id="5-star" name="star-rate"  value={5} className="hidden peer" />
                                <label htmlFor="5-star" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-600 dark:peer-checked:text-yellow-400 peer-checked:border-yellow-400 peer-checked:text-yellow-400 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-600" >
                                    <div className="flex">
                                        {
                                            stars.map((item, index) => {
                                                if (index + 1 <= 5) {
                                                    return item;
                                                }
                                            })
                                        }
                                    </div>

                                    <span className='text-yellow-400'>
                                        <i className="fa-solid fa-face-kiss-wink-heart fa-bounce fa-xl"></i>
                                    </span>
                                </label>
                            </div>

                        </div>
                        <div>
                            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-600">
                                <div className="px-4 py-2 bg-white rounded-lg dark:bg-gray-800">
                                    <label htmlFor="comment" className="sr-only">Your comment</label>
                                    <textarea onChange={handleChange} value={values.review} id="review" name="review" rows="4" className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." ></textarea>
                                </div>
                            </div>
                        </div>

                        <button type="submit"
                            className="inline-flex items-center py-2.5 px-4 text-md font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                            Add Review
                        </button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default AddReviewModal