import React from 'react'
import { useState } from 'react'
import { router } from '@inertiajs/react'
import { usePage } from '@inertiajs/inertia-react';
import { useEffect } from 'react';
import axios from 'axios';
import AddReviewModal from './AddReviewModal';
import route from './../../../../vendor/tightenco/ziggy/src/js/index';

function Reviews({ product_id, product_slug }) {
    const { user } = usePage().props;
    const { errors } = usePage().props;
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/reviews/${product_slug}`).then((res) => {
            setReviews(res.data)

            console.log(res);
        });
    }, [])

    

    const stars = [
        <svg key="star-1" aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>1st star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>,
        <svg key="star-2" aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>2nd star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>,
        <svg key="star-3" aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>3rd star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>,
        <svg key="star-4" aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>4th star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>,
        <svg key="star-5" aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>5th star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>,
    ];

    return (
        <section className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
            <div className="bg-white dark:bg-gray-900">
                <div className="mx-auto">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Reviews ({reviews.length})</h2>


                        {
                            user ?
                                <button type="button" data-modal-target="add-review-modal" data-modal-toggle="add-review-modal" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                    Add Review
                                </button>
                                :
                                <a href={route('login')} type="button" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                    Please Login To add Review
                                </a>
                        }
                    </div>
                    <ul>
                        {errors.review && <li className='text-xs text-red-600 font-bold pl-1 pb-1'>{errors.review}</li>}
                        {errors.stars && <li className='text-xs text-red-600 font-bold pl-1 pb-1'>{errors.stars}</li>}
                    </ul>




                    {
                        reviews.map((review, index) => (
                            <article key={review.id} className='my-10 relative px-4'>
                                <div className='w-1 h-32 rounded-md bg-blue-600  absolute md:-left-6 -left-2'></div>
                                <div className='flex justify-between'>

                                    <div className="flex items-center mb-4 space-x-4">
                                        <span className="w-10 h-10 rounded-full dark:text-white"><i className="fa-sharp fa-solid fa-user fa-lg"></i></span>
                                        <div className="space-y-1 font-medium dark:text-white">
                                            <p>{review.user.name}<time dateTime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">Joined on {review.user.created_at}</time></p>
                                        </div>
                                    </div>
                                    <p className="mb-5 text-sm text-gray-500 dark:text-gray-400"><span>Written: <time dateTime="2017-03-03 19:00">{review.created_at}</time></span></p>
                                </div>
                                <div className="flex items-center mb-1">
                                    <span className='pr-4 dark:text-white'>Stars: </span>
                                    {
                                        stars.map((item, index) => {
                                            if (index + 1 <= review.stars) {
                                                return item;
                                            }
                                        })
                                    }
                                </div>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">{review.review}</p>

                            </article>


                        ))
                    }

                </div>
            </div>
            {user && <AddReviewModal product_id={product_id} product_slug={product_slug} />}

        </section>
    )
}

export default Reviews